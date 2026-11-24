import { motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../../data/projects";
import { GitHubIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/Button";
import { Tag } from "../ui/Tag";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Accessible modal: focus is trapped, Escape closes, background scroll is locked, focus returns on close. */
export default function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line bg-bg-elev shadow-2xl sm:rounded-3xl"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width={811}
            height={599}
            className="aspect-[16/9] w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg-elev via-bg-elev/10 to-transparent" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="glass absolute top-4 right-4 grid size-10 place-items-center rounded-full text-fg transition-transform hover:rotate-90"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="-mt-12 px-6 pb-8 sm:px-10 sm:pb-10">
          <div className="relative">
            <Tag tone="accent">{project.category}</Tag>
            <h2 id="project-dialog-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.name}
            </h2>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
          </div>

          <p className="mt-6 leading-relaxed text-pretty">{project.description}</p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <h3 className="font-mono text-xs tracking-[0.16em] text-subtle uppercase">Engineering highlights</h3>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-[0.16em] text-subtle uppercase">Tech stack</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={project.live} external>
              Visit live demo <ArrowUpRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={project.repo} external variant="secondary">
              <GitHubIcon className="size-4" /> View source
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
