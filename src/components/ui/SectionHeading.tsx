import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, id, align = "left", action }: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-10 flex flex-col gap-6 md:mb-14 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-accent uppercase">
          <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && <p className="mt-4 text-base leading-relaxed text-pretty text-muted md:text-lg">{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}
