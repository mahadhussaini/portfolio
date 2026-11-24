/**
 * Lightweight, privacy-friendly event log (no third parties).
 * Events stay in the visitor's own localStorage; in development they are
 * also printed to the console. Swap `send` for a real provider if needed.
 */

type EventName =
  | "page_view"
  | "section_view"
  | "project_view"
  | "project_filter"
  | "contact_submit"
  | "social_click"
  | "resume_download"
  | "theme_toggle"
  | "assistant_open";

type StoredEvent = { name: EventName; props?: Record<string, unknown>; t: number };

const KEY = "portfolio_analytics";
const MAX_EVENTS = 100;

function send(event: StoredEvent) {
  if (import.meta.env.DEV) console.debug("[analytics]", event.name, event.props ?? "");
  try {
    const raw = localStorage.getItem(KEY);
    const events: StoredEvent[] = raw ? JSON.parse(raw) : [];
    events.push(event);
    localStorage.setItem(KEY, JSON.stringify(events.slice(-MAX_EVENTS)));
  } catch {
    /* storage unavailable (private mode etc.) — ignore */
  }
}

export function track(name: EventName, props?: Record<string, unknown>) {
  send({ name, props, t: Date.now() });
}
