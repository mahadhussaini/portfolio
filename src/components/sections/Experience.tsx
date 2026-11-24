import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";
import { experience } from "../../data/profile";
import { BentoCard } from "../ui/BentoCard";
import { Emphasis } from "../ui/Emphasis";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title={
          <>
            Where I’ve shipped, <span className="text-muted">and what changed.</span>
          </>
        }
        description="Four roles across fintech, communications, HR SaaS and government — each with outcomes I can point to."
      />

      <ol ref={listRef} className="relative space-y-4 md:space-y-6">
        {/* timeline rail */}
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(25%+7px)]" aria-hidden="true" />
        <motion.span
          style={{ scaleY: line }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent md:left-[calc(25%+7px)]"
          aria-hidden="true"
        />

        {experience.map((role, i) => (
          <li key={role.company} className="relative grid gap-4 pl-8 md:grid-cols-[25%_1fr] md:gap-0 md:pl-0">
            <span
              className={`absolute top-2 left-0 size-[15px] rounded-full border-2 md:left-[25%] ${
                role.current ? "border-accent bg-accent shadow-[0_0_0_6px_var(--accent-soft)]" : "border-line-strong bg-bg"
              }`}
              aria-hidden="true"
            />
            <Reveal delay={0.05 * i} className="md:pr-10 md:text-right">
              <p className="font-mono text-xs tracking-wide text-accent">{role.period}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted md:justify-end">
                <MapPin className="size-3.5" aria-hidden="true" />
                {role.location}
              </p>
            </Reveal>

            <Reveal delay={0.05 * i + 0.05} className="md:pl-10">
              <BentoCard className="p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {role.title} <span className="text-muted">· {role.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-subtle">{role.domain}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>
                        <Emphasis text={h} />
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {role.stack.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
