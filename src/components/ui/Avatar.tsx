import { useState } from "react";

type Props = { src: string; alt: string; initials: string; className?: string };

/** Profile photo that degrades to a monogram if the image is missing or fails. */
export function Avatar({ src, alt, initials, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-linear-to-br from-accent/30 to-indigo-500/20 ring-1 ring-line-strong ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={160}
          height={160}
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span role="img" aria-label={alt} className="font-mono text-[0.95em] font-semibold tracking-tight text-fg">
          {initials}
        </span>
      )}
    </div>
  );
}
