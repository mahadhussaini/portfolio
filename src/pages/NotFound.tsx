import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { buttonClass } from "../components/ui/Button";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Syed Mahad Hussaini";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <section className="mx-auto grid min-h-[80dvh] max-w-xl place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">This page doesn’t exist.</h1>
        <p className="mt-4 text-muted">The link may be outdated, or the address mistyped.</p>
        <Link to="/" className={buttonClass("primary", "lg", "mt-10")}>
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to home
        </Link>
      </div>
    </section>
  );
}
