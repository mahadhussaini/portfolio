import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Maximize2 } from "lucide-react";
import { lazy, Suspense, useMemo, useState } from "react";
import { projectCategories, projects, type Project } from "../../data/projects";
import { profile } from "../../data/profile";
import { track } from "../../lib/analytics";
import { BentoCard } from "../ui/BentoCard";
import { GitHubIcon } from "../ui/BrandIcons";
import { Button, ButtonLink } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

const ProjectDialog = lazy(() => import("./ProjectDialog"));

const INITIAL = 6;

function ProjectCard({ project, onOpen, large }: { project: Project; onOpen: () => void; large?: boolean }) {
  return (
    <BentoCard as="article" className="group flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className={`relative block overflow-hidden border-b border-line text-left ${large ? "lg:flex lg:flex-1 lg:flex-col" : ""}`}
        aria-label={`Open case study: ${project.name}`}
      >
        <div
          className={`relative overflow-hidden bg-surface-2 ${
            large
              ? "aspect-[16/10] lg:flex lg:aspect-auto lg:flex-1 lg:items-center lg:justify-center lg:bg-[radial-gradient(circle_at_50%_40%,var(--accent-soft),transparent_70%)] lg:p-10"
              : "aspect-[4/3]"
          }`}
        >
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading={large ? "eager" : "lazy"}
            decoding="async"
            width={811}
            height={599}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.04] ${
              large ? "lg:static lg:h-auto lg:rounded-xl lg:shadow-2xl lg:ring-1 lg:ring-line-strong group-hover:lg:scale-[1.02]" : ""
            }`}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="glass absolute right-3 bottom-3 inline-flex translate-y-2 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Maximize2 className="size-3.5" aria-hidden="true" /> Case study
        </span>
      </button>

      <div className={`flex flex-1 flex-col p-6 ${large ? "lg:flex-none" : ""}`}>
        <div className="flex items-center justify-between gap-3">
          <Tag tone="accent">{project.category}</Tag>
          {project.featured && <span className="font-mono text-[0.7rem] text-subtle">Featured</span>}
        </div>
        <h3 className={`mt-4 font-semibold tracking-tight ${large ? "text-2xl" : "text-lg"}`}>
          <button type="button" onClick={onOpen} className="text-left hover:text-accent">
            {project.name}
          </button>
        </h3>
        <p className="mt-1 text-sm text-fg/80">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, large ? 7 : 4).map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
          {project.stack.length > (large ? 7 : 4) && (
            <li>
              <Tag>+{project.stack.length - (large ? 7 : 4)}</Tag>
            </li>
          )}
        </ul>

        <div className="mt-auto flex items-center gap-2 pt-6">
          <ButtonLink
            href={project.live}
            external
            size="sm"
            onClick={() => track("project_view", { slug: project.slug, via: "live" })}
            aria-label={`Live demo of ${project.name} (opens in new tab)`}
          >
            Live demo <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={project.repo}
            external
            variant="ghost"
            size="sm"
            onClick={() => track("project_view", { slug: project.slug, via: "code" })}
            aria-label={`Source code of ${project.name} on GitHub (opens in new tab)`}
          >
            <GitHubIcon className="size-4" /> Code
          </ButtonLink>
        </div>
      </div>
    </BentoCard>
  );
}

export function Projects() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      projects
        .filter((p) => category === "All" || p.category === category)
        .sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
    [category],
  );
  const shown = expanded || category !== "All" ? filtered : filtered.slice(0, INITIAL);
  const hiddenCount = filtered.length - shown.length;

  const open = (p: Project) => {
    setSelected(p);
    track("project_view", { slug: p.slug, via: "dialog" });
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title={
          <>
            Selected work, <span className="text-muted">live and open source.</span>
          </>
        }
        description={`${projects.length} full-stack applications — every one deployed with public source on GitHub. Open any card for the case study.`}
        action={
          <ButtonLink
            href={profile.github}
            external
            variant="secondary"
            className="shrink-0"
            onClick={() => track("social_click", { platform: "github", from: "projects" })}
          >
            <GitHubIcon className="size-4" /> All repositories
          </ButtonLink>
        }
      />

      <div role="group" aria-label="Filter projects by category" className="scrollbar-none -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {projectCategories.map((c) => {
          const active = c === category;
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setCategory(c);
                track("project_filter", { category: c });
              }}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                active ? "text-accent-fg" : "border border-line text-muted hover:text-fg"
              }`}
            >
              {active && (
                <motion.span layoutId="project-tab" className="absolute inset-0 -z-10 rounded-full bg-accent" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              )}
              {c} <span className={`ml-1 font-mono text-[0.7rem] ${active ? "" : "text-subtle"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p, i) => {
            const large = category === "All" && i === 0;
            return (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={large ? "sm:col-span-2 lg:row-span-2" : ""}
              >
                <ProjectCard project={p} onOpen={() => open(p)} large={large} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <Button variant="secondary" onClick={() => setExpanded(true)}>
            Show {hiddenCount} more projects <ChevronDown className="size-4" aria-hidden="true" />
          </Button>
        </div>
      )}
      {expanded && category === "All" && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="ghost"
            onClick={() => {
              setExpanded(false);
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Show fewer
          </Button>
        </div>
      )}

      <Suspense fallback={null}>
        <AnimatePresence>{selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
      </Suspense>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} of {filtered.length} projects{category !== "All" ? ` in ${category}` : ""}.
      </p>
    </section>
  );
}
