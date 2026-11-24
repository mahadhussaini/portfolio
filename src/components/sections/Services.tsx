import { ArrowRight, BarChart3, Check, Cloud, Gauge, Layers, Radio, Server, type LucideIcon } from "lucide-react";
import { services } from "../../data/profile";
import { BentoCard } from "../ui/BentoCard";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  layers: Layers,
  server: Server,
  gauge: Gauge,
  cloud: Cloud,
  radio: Radio,
  chart: BarChart3,
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title={
          <>
            How I can help <span className="text-muted">your team.</span>
          </>
        }
        description="Available for full-time roles and selected freelance or contract work. Every service below maps to work I’ve already delivered."
        action={
          <ButtonLink href="#contact" variant="secondary" className="shrink-0">
            Start a conversation <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal as="li" key={s.title} delay={0.05 * (i % 3)}>
              <BentoCard className="group flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl border border-line bg-surface-2 text-accent transition-[transform,background-color] duration-500 group-hover:-rotate-6 group-hover:bg-accent-soft">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-auto space-y-2 pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-muted">
                      <Check className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
