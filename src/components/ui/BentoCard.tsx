import { useCallback, type AllHTMLAttributes, type ElementType, type PointerEvent, type ReactNode } from "react";

type Props = Omit<AllHTMLAttributes<HTMLElement>, "as"> & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

/**
 * Glass card with a pointer-following spotlight. The spotlight is pure CSS
 * driven by two custom properties, so there is no React re-render on move.
 */
export function BentoCard({ as: Tag = "div", children, className = "", interactive = true, ...rest }: Props) {
  const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <Tag
      onPointerMove={interactive ? onPointerMove : undefined}
      className={`glass spotlight rounded-3xl transition-[border-color,transform] duration-500 ease-out-expo ${
        interactive ? "hover:border-line-strong" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
