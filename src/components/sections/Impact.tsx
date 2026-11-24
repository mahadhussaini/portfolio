import { motion } from "framer-motion";
import { impact } from "../../data/profile";
import { BentoCard } from "../ui/BentoCard";
import { CountUp } from "../ui/CountUp";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** Bento layout: 2×2 hero metric, a wide card, then six single cells — fills 4 columns with no orphans. */
const spans = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  "sm:col-span-2 lg:col-span-2",
  "",
  "",
  "",
  "",
  "",
  "",
];

function BeforeAfter({ from, to, unit }: { from: number; to: number; unit?: string }) {
  return (
    <div className="mt-5 space-y-2" aria-label={`From ${from}${unit ?? ""} to ${to}${unit ?? ""}`}>
      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full bg-line-strong"
          initial={{ width: 0 }}
          whileInView={{ width: `${from}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${to}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="flex justify-between font-mono text-[0.7rem] text-subtle">
        <span>before · {from}{unit}</span>
        <span className="text-accent">after · {to}{unit}</span>
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="impact-title"
        eyebrow="Impact"
        title={
          <>
            Measurable results, <span className="text-muted">not adjectives.</span>
          </>
        }
        description="Outcomes from my roles to date — each figure is tied to the team and system it came from."
      />

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((m, i) => {
          const hero = i === 0;
          return (
            <Reveal as="li" key={m.label} delay={0.04 * i} className={spans[i]}>
              <BentoCard className={`flex h-full flex-col justify-between overflow-hidden p-6 ${hero ? "sm:p-8" : ""}`}>
                {hero && (
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 size-56 rounded-full bg-accent/15 blur-3xl"
                    aria-hidden="true"
                  />
                )}
                <p
                  className={`font-semibold tracking-tight ${
                    hero ? "text-6xl sm:text-7xl lg:text-8xl" : "text-4xl"
                  } ${hero ? "text-accent-gradient" : ""}`}
                >
                  <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                </p>
                <div className={hero ? "mt-10" : "mt-6"}>
                  <h3 className={`font-semibold ${hero ? "text-xl" : ""}`}>{m.label}</h3>
                  <p className="mt-1 text-sm text-muted">{m.context}</p>
                  {m.from !== undefined && m.to !== undefined && <BeforeAfter from={m.from} to={m.to} unit={m.unit} />}
                </div>
              </BentoCard>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
