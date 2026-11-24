import { ArrowUpRight, Award, Briefcase, Gauge, GraduationCap, Languages, MapPin, ShieldCheck, Workflow, Network } from "lucide-react";
import type { ReactNode } from "react";
import { certifications, education, profile } from "../../data/profile";
import { useGitHubProfile } from "../../hooks/useGitHubProfile";
import { track } from "../../lib/analytics";
import { BentoCard } from "../ui/BentoCard";
import { GitHubIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  { Icon: Network, title: "Scalable architecture", body: "Service layers, caching and multi-tenant design that hold up as usage grows." },
  { Icon: Gauge, title: "High performance", body: "Measured wins: 35% lower latency, 10× throughput, 98 Lighthouse." },
  { Icon: ShieldCheck, title: "Secure APIs", body: "JWT auth, interceptors, validation, rate limiting and encrypted data." },
  { Icon: Workflow, title: "Reliable systems", body: "Monitoring, error handling and CI/CD behind 99.9% uptime." },
];

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[0.7rem] tracking-[0.16em] text-subtle uppercase">{children}</p>;
}

function GitHubCard() {
  const gh = useGitHubProfile(profile.githubUser);
  return (
    <a
      href={profile.github}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("social_click", { platform: "github", from: "about" })}
      className="group flex h-full flex-col justify-between gap-6 p-6"
    >
      <div className="flex items-start justify-between">
        <GitHubIcon className="size-7" />
        <ArrowUpRight className="size-5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" aria-hidden="true" />
      </div>
      <div>
        <Label>Open source</Label>
        <div className="mt-3 flex items-end gap-6" aria-live="polite">
          {gh.status === "loading" && (
            <div className="flex gap-6" aria-label="Loading GitHub stats">
              <span className="h-9 w-12 animate-pulse rounded-lg bg-surface-2" />
              <span className="h-9 w-12 animate-pulse rounded-lg bg-surface-2" />
            </div>
          )}
          {gh.status === "ready" && (
            <>
              <div>
                <p className="text-3xl font-semibold tracking-tight tabular-nums">{gh.data.public_repos}</p>
                <p className="text-xs text-muted">public repos</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-tight tabular-nums">{gh.data.followers}</p>
                <p className="text-xs text-muted">followers</p>
              </div>
            </>
          )}
          {gh.status === "error" && <p className="text-sm text-muted">Browse repositories on GitHub</p>}
        </div>
        <p className="mt-3 font-mono text-xs text-muted group-hover:text-accent">@{profile.githubUser}</p>
      </div>
    </a>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="about-title"
        eyebrow="About"
        title={
          <>
            Engineering that holds up <span className="text-muted">in production.</span>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        <Reveal className="md:col-span-4 md:row-span-2">
          <BentoCard className="h-full p-7 sm:p-9">
            <Label>My journey</Label>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-pretty text-muted">
              <p>
                I’m a <strong className="font-medium text-fg">Full Stack Developer</strong> who likes owning a feature
                end to end — from the database schema and API contract to the last pixel of the UI. Over 3+ years I’ve
                delivered <strong className="font-medium text-fg">15+ production applications</strong> serving{" "}
                <strong className="font-medium text-fg">50,000+ users</strong>.
              </p>
              <p>
                My path ran through a government portal for 100,000+ citizens, an HR SaaS used by 500+ employees, and
                a communication platform pushing 10,000 messages a minute. Today I build fintech tooling at RECV —
                Angular and TypeScript admin systems over Fineract, where correctness and latency both matter.
              </p>
              <p>
                I care about the unglamorous parts: clean service layers, sensible caching, observability and tests.
                Next, I’m looking to grow into a <strong className="font-medium text-fg">senior / tech-lead</strong>{" "}
                role — driving architecture decisions and mentoring engineers.
              </p>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.05}>
          <BentoCard className="h-full p-6">
            <div className="flex items-center justify-between">
              <Briefcase className="size-5 text-accent" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-600 dark:text-emerald-300">
                <span className="size-1.5 rounded-full bg-current" /> Now
              </span>
            </div>
            <Label>
              <span className="mt-6 block">Currently</span>
            </Label>
            <p className="mt-2 text-lg font-semibold">Full Stack Engineer</p>
            <p className="text-sm text-muted">RECV · FinTech platform · Remote</p>
            <p className="mt-1 font-mono text-xs text-subtle">since Sep 2025</p>
          </BentoCard>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.1}>
          <BentoCard className="h-full p-6">
            <MapPin className="size-5 text-accent" aria-hidden="true" />
            <Label>
              <span className="mt-6 block">Based in</span>
            </Label>
            <p className="mt-2 text-lg font-semibold">{profile.location}</p>
            <p className="text-sm text-muted">{profile.timezone} · Open to remote</p>
            <p className="mt-3 flex items-center gap-2 text-xs text-muted">
              <Languages className="size-3.5" aria-hidden="true" /> {profile.languages.join(" · ")}
            </p>
          </BentoCard>
        </Reveal>

        <Reveal className="md:col-span-6" delay={0.05}>
          <BentoCard className="p-6 sm:p-7">
            <Label>What I optimise for</Label>
            <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map(({ Icon, title, body }) => (
                <li key={title} className="group">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-transform duration-500 group-hover:-translate-y-0.5">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                </li>
              ))}
            </ul>
          </BentoCard>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.05}>
          <BentoCard className="h-full p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <Label>Education</Label>
                <p className="mt-2 font-semibold">{education.degree}</p>
                <p className="text-sm text-muted">
                  {education.school} · {education.location}
                </p>
                <p className="mt-1 font-mono text-xs text-subtle">{education.period}</p>
              </div>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal className="md:col-span-3 md:row-span-2" delay={0.1}>
          <BentoCard className="h-full p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <Label>Certifications</Label>
                <ul className="mt-3 divide-y divide-line">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-3 py-2.5 text-sm">
                      <span className="font-medium">{c.name}</span>
                      <span className="shrink-0 font-mono text-[0.7rem] text-subtle">{c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.05}>
          <BentoCard className="h-full" as="div">
            <GitHubCard />
          </BentoCard>
        </Reveal>
      </div>
    </section>
  );
}
