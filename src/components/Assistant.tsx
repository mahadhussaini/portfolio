import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { experience, profile } from "../data/profile";
import { projects } from "../data/projects";
import { track } from "../lib/analytics";

/**
 * Quick-answer assistant. It is keyword-based (no LLM) and only answers
 * from portfolio data, so it can never invent facts. Labelled as such.
 */

type Msg = { id: number; from: "bot" | "user"; text: string; link?: { href: string; label: string } };

const current = experience[0];
const featured = projects.filter((p) => p.featured).map((p) => p.name);

const intents: { keys: string[]; answer: () => Omit<Msg, "id" | "from"> }[] = [
  {
    keys: ["skill", "stack", "tech", "react", "node", "typescript", "angular", "know"],
    answer: () => ({
      text: "Core stack: React.js, Next.js, Node.js/Express, TypeScript and Angular, with MongoDB, PostgreSQL and Redis on the data side, and AWS, Docker and Kubernetes for delivery.",
      link: { href: "#skills", label: "See all skills" },
    }),
  },
  {
    keys: ["experience", "work", "job", "role", "current", "company", "recv", "years"],
    answer: () => ({
      text: `3+ years across four roles. Currently ${current.title} at ${current.company} (${current.domain}), building Angular/TypeScript fintech tooling over Fineract.`,
      link: { href: "#experience", label: "View experience" },
    }),
  },
  {
    keys: ["project", "portfolio", "built", "demo", "app"],
    answer: () => ({
      text: `${projects.length} live projects with public source. Featured: ${featured.join(", ")}.`,
      link: { href: "#projects", label: "Browse projects" },
    }),
  },
  {
    keys: ["impact", "result", "metric", "achievement", "performance", "users"],
    answer: () => ({
      text: "Highlights: 15+ production apps serving 50,000+ users, 10× messaging throughput, 35% lower API latency, and appraisal completion lifted from 40% to 95%.",
      link: { href: "#impact", label: "See impact" },
    }),
  },
  {
    keys: ["resume", "cv", "pdf", "download"],
    answer: () => ({ text: "Here’s the latest résumé as a PDF.", link: { href: profile.resume, label: "Download résumé" } }),
  },
  {
    keys: ["contact", "hire", "email", "reach", "available", "freelance", "call"],
    answer: () => ({
      text: `${profile.availability}. Email ${profile.email} or use the contact form.`,
      link: { href: "#contact", label: "Go to contact" },
    }),
  },
  {
    keys: ["location", "where", "based", "remote", "timezone"],
    answer: () => ({ text: `Based in ${profile.location} (${profile.timezone}) and comfortable working remotely across time zones.` }),
  },
  {
    keys: ["education", "degree", "university", "study", "certif"],
    answer: () => ({
      text: "Bachelor of Computer Science, Iqra University (2020–2023). Certifications include React Advanced Patterns, Node.js Performance Optimization and Docker & Kubernetes Fundamentals.",
      link: { href: "#about", label: "More about Mahad" },
    }),
  },
];

const suggestions = ["What’s your tech stack?", "Current role?", "Show projects", "Are you available?"];

function reply(input: string): Omit<Msg, "id" | "from"> {
  const q = input.toLowerCase();
  const hit = intents.find((i) => i.keys.some((k) => q.includes(k)));
  return (
    hit?.answer() ?? {
      text: "I can answer questions about skills, experience, projects, impact, education or how to get in touch. For anything else, Mahad is happy to reply by email.",
      link: { href: `mailto:${profile.email}`, label: "Email Mahad" },
    }
  );
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 0, from: "bot", text: `Hi! Ask me anything about ${profile.shortName}’s work — or tap a suggestion below.` },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = (text: string) => {
    if (!text.trim() || typing) return;
    setMsgs((m) => [...m, { id: Date.now(), from: "user", text: text.trim() }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMsgs((m) => [...m, { id: Date.now() + 1, from: "bot", ...reply(text) }]);
      setTyping(false);
    }, 450);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <div className="fixed right-4 bottom-4 z-[55] sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Quick answers about Mahad"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            className="absolute right-0 bottom-16 flex h-[min(520px,calc(100dvh-7rem))] w-[min(380px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-line bg-bg-elev shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-accent">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Quick answers</p>
                <p className="text-xs text-subtle">Instant replies from portfolio data</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid size-8 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg"
              >
                <X className="size-4" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
              {msgs.map((m) => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "user" ? "rounded-br-md bg-fg text-bg" : "rounded-bl-md border border-line bg-surface-2"
                    }`}
                  >
                    {m.text}
                    {m.link && (
                      <a
                        href={m.link.href}
                        onClick={() => m.link!.href.startsWith("#") && setOpen(false)}
                        {...(m.link.href.endsWith(".pdf") ? { download: true } : {})}
                        className="mt-2 block font-medium text-accent hover:underline"
                      >
                        {m.link.label} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-1 px-2 py-1" aria-label="Typing">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="size-1.5 animate-bounce rounded-full bg-subtle" style={{ animationDelay: `${i * 120}ms` }} />
                  ))}
                </div>
              )}
            </div>

            <div className="scrollbar-none flex gap-2 overflow-x-auto px-4 pb-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="shrink-0 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
                >
                  {s}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex gap-2 border-t border-line p-3">
              <label htmlFor="assistant-input" className="sr-only">
                Your question
              </label>
              <input
                id="assistant-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects…"
                autoComplete="off"
                className="min-w-0 flex-1 rounded-full border border-line bg-surface-2 px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-fg transition-opacity disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          if (!open) track("assistant_open");
        }}
        aria-expanded={open}
        aria-label={open ? "Close quick answers" : "Open quick answers"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="grid size-13 place-items-center rounded-full bg-fg text-bg shadow-[0_10px_30px_-8px_var(--accent)] transition-colors hover:bg-accent hover:text-accent-fg"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </motion.button>
    </div>
  );
}
