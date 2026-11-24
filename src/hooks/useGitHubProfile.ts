import { useEffect, useState } from "react";

export type GitHubProfile = {
  public_repos: number;
  followers: number;
  created_at: string;
  html_url: string;
};

type State =
  | { status: "loading" }
  | { status: "ready"; data: GitHubProfile }
  | { status: "error" };

const CACHE_KEY = "gh_profile_v1";
const TTL = 1000 * 60 * 60 * 6; // 6 hours — keeps us well under the unauthenticated rate limit

/** Fetches public GitHub profile stats with a session cache and graceful failure. */
export function useGitHubProfile(username: string): State {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { t, data } = JSON.parse(cached) as { t: number; data: GitHubProfile };
        if (Date.now() - t < TTL) {
          setState({ status: "ready", data });
          return;
        }
      }
    } catch {
      /* ignore bad cache */
    }

    const controller = new AbortController();
    fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json() as Promise<GitHubProfile>;
      })
      .then((data) => {
        if (cancelled) return;
        setState({ status: "ready", data });
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data }));
        } catch {
          /* ignore */
        }
      })
      .catch((err: unknown) => {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) return;
        setState({ status: "error" });
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [username]);

  return state;
}
