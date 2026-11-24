import type { ReactNode } from "react";

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "accent" }) {
  const tones = {
    neutral: "border-line bg-surface-2 text-muted",
    accent: "border-accent/25 bg-accent-soft text-accent",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.7rem] leading-none ${tones[tone]}`}>
      {children}
    </span>
  );
}
