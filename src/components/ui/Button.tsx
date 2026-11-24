import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out-expo " +
  "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-accent hover:text-accent-fg shadow-[0_8px_30px_-10px_var(--accent)] hover:-translate-y-0.5",
  secondary: "glass text-fg hover:border-line-strong hover:bg-surface-2 hover:-translate-y-0.5",
  ghost: "text-muted hover:text-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

// eslint-disable-next-line react-refresh/only-export-components -- shared class helper for <a>/<Link>
export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string };

export function Button({ variant, size, className, children, ...rest }: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  external,
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean }) {
  return (
    <a
      className={buttonClass(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
