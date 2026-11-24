import { AnimatePresence, motion } from "framer-motion";
import { Cloud, FlaskConical, Layers, Network, Palette, Server, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { architectureSkills, coreStack, skillGroups, type SkillGroup } from "../../data/profile";
import { BentoCard } from "../ui/BentoCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<SkillGroup["icon"], LucideIcon> = {
  layers: Layers,
  server: Server,
  cloud: Cloud,
  test: FlaskConical,
  palette: Palette,
  network: Network,
};

const allSkills = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

function Marquee() {
  const row = [...allSkills, ...allSkills];
  return (
    <div
      className="marquee relative mb-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max gap-3">
        {row.map((s, i) => (
          <span key={i} className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs whitespace-nowrap text-muted">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const [filter, setFilter] = useState<string>("all");
  const tabs = [{ id: "all", title: "All" }, ...skillGroups.map(({ id, title }) => ({ id, title }))];
  const visible = filter === "all" ? skillGroups : skillGroups.filter((g) => g.id === filter);

  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-28 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title={
            <>
              A full-stack toolkit, <span className="text-muted">used in production.</span>
            </>
          }
          description="The core stack I reach for daily, and the wider set of tools I’ve shipped with across fintech, HR, communication and government projects."
        />
      </div>

      <Marquee />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <BentoCard className="p-6 sm:p-8" interactive={false}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">Core stack</h3>
              <p className="font-mono text-xs text-subtle">hover for context</p>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {coreStack.map((t, i) => (
                <motion.li
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-surface-2 p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                  tabIndex={0}
                >
                  <p className="font-semibold tracking-tight">{t.name}</p>
                  <p className="mt-1 text-xs leading-snug text-muted transition-colors group-hover:text-fg group-focus:text-fg">{t.note}</p>
                  <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                </motion.li>
              ))}
            </ul>
          </BentoCard>
        </Reveal>

        <div role="group" aria-label="Filter skills by area" className="scrollbar-none -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {tabs.map((t) => {
            const selected = filter === t.id;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(t.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                  selected ? "text-accent-fg" : "border border-line text-muted hover:text-fg"
                }`}
              >
                {selected && (
                  <motion.span layoutId="skill-tab" className="absolute inset-0 -z-10 rounded-full bg-accent" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                )}
                {t.title}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((g) => {
              const Icon = icons[g.icon];
              return (
                <motion.div
                  key={g.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <BentoCard className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                        <Icon className="size-[18px]" aria-hidden="true" />
                      </span>
                      <h3 className="font-semibold">{g.title}</h3>
                      <span className="ml-auto font-mono text-xs text-subtle">{g.skills.length}</span>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <li key={s} className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[0.82rem] text-muted transition-colors hover:border-accent/40 hover:text-fg">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </BentoCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-3">
          <BentoCard className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center" interactive={false}>
            <h3 className="shrink-0 font-mono text-xs tracking-[0.16em] text-subtle uppercase">Architecture</h3>
            <ul className="flex flex-wrap gap-2">
              {architectureSkills.map((s) => (
                <li key={s} className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-sm text-accent">
                  {s}
                </li>
              ))}
            </ul>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  );
}
