import { useEffect } from "react";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero";
import { Impact } from "../components/sections/Impact";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { Skills } from "../components/sections/Skills";
import { track } from "../lib/analytics";

/** `scrollTo` lets legacy routes like /projects land on the matching section. */
export default function Home({ scrollTo }: { scrollTo?: string }) {
  useEffect(() => {
    track("page_view", { path: window.location.pathname });
  }, []);

  useEffect(() => {
    const target = scrollTo ?? (window.location.hash ? window.location.hash.slice(1) : undefined);
    if (!target || target === "top") return;
    // Wait a frame so layout is ready, then jump without animation.
    const id = requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: "auto" }));
    return () => cancelAnimationFrame(id);
  }, [scrollTo]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Impact />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
