import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = { value: number; decimals?: number; prefix?: string; suffix?: string; duration?: number };

const fmt = (n: number, decimals: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** Animates from 0 to `value` the first time it scrolls into view. Screen readers get the final value. */
export function CountUp({ value, decimals = 0, prefix = "", suffix = "", duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  const final = `${prefix}${fmt(value, decimals)}${suffix}`;
  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {prefix}
        {fmt(display, decimals)}
        {suffix}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
