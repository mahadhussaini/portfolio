import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { headlineStats, profile } from "../../data/profile";
import { track } from "../../lib/analytics";
import { Avatar } from "../ui/Avatar";
import { BentoCard } from "../ui/BentoCard";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/Button";
import { CountUp } from "../ui/CountUp";

const ease = [0.16, 1, 0.3, 1] as const;
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const socials = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

type Tok = [string, string?];
const S = "text-emerald-600 dark:text-emerald-300"; // string
const K = "text-sky-700 dark:text-sky-300"; // key
const P = "text-muted"; // punctuation
const codeLines: Tok[][] = [
  [["const ", "text-fuchsia-700 dark:text-fuchsia-300"], ["mahad", "text-fg"], [" = {", P]],
  [["  role", K], [": ", P], ['"Full Stack Developer"', S], [",", P]],
  [["  stack", K], [": [", P], ['"MongoDB"', S], [", ", P], ['"Express"', S], [", ", P], ['"React"', S], [", ", P], ['"Node"', S], ["],", P]],
  [["  also", K], [": [", P], ['"Next.js"', S], [", ", P], ['"TypeScript"', S], [", ", P], ['"Angular"', S], ["],", P]],
  [["  cloud", K], [": [", P], ['"AWS"', S], [", ", P], ['"Docker"', S], [", ", P], ['"Kubernetes"', S], ["],", P]],
  [["  shipped", K], [": ", P], ["15", "text-amber-600 dark:text-amber-300"], [", ", P], ["// production apps", "text-subtle italic"]],
  [["  cares", K], [": ", P], ['"scalable · secure · reliable"', S], [",", P]],
  [["};", P]],
];

function CodeCard() {
  return (
    <BentoCard className="overflow-hidden" interactive={false}>
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="font-mono text-xs text-subtle">profile.ts</span>
      </div>

      <div className="flex items-center gap-4 border-b border-line px-5 py-4">
        <Avatar src={profile.avatar} alt={`Portrait of ${profile.name}`} initials={profile.initials} className="size-14 text-lg" />
        <div className="min-w-0">
          <p className="truncate font-semibold">{profile.name}</p>
          <p className="truncate text-sm text-muted">Full Stack Engineer · RECV (FinTech)</p>
        </div>
      </div>

      <pre
        tabIndex={0}
        className="scrollbar-none overflow-x-auto px-5 py-5 font-mono text-[0.78rem] leading-6 sm:text-[0.82rem]"
        aria-label="Profile summary as code"
      >
        <code>
          {codeLines.map((line, i) => (
            <span key={i} className="block">
              <span className="mr-4 inline-block w-4 text-right text-subtle/60 select-none" aria-hidden="true">
                {i + 1}
              </span>
              {line.map(([t, c], j) => (
                <span key={j} className={c}>
                  {t}
                </span>
              ))}
              {i === codeLines.length - 1 && (
                <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-accent" aria-hidden="true" />
              )}
            </span>
          ))}
        </code>
      </pre>
    </BentoCard>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative mx-auto max-w-6xl px-4 pt-32 sm:px-6 sm:pt-40">
      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
        <motion.div className="min-w-0" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-7 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Full stack engineer building </span>
            <span className="text-accent-gradient">fast, reliable</span>
            <span className="text-gradient"> products.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            I’m <strong className="font-medium text-fg">{profile.name}</strong>, a MERN-stack specialist with 3+ years
            shipping 15+ production applications that serve 50,000+ users — from fintech dashboards to real-time
            communication platforms.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" size="lg">
              View my work
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={profile.resume}
              download="Syed-Mahad-Hussaini-Resume.pdf"
              variant="secondary"
              size="lg"
              onClick={() => track("resume_download", { from: "hero" })}
            >
              <Download className="size-4" aria-hidden="true" />
              Download résumé
            </ButtonLink>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul className="flex items-center gap-1" aria-label="Social profiles">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={() => track("social_click", { platform: label.toLowerCase(), from: "hero" })}
                    className="grid size-10 place-items-center rounded-full text-muted transition-[color,background-color,transform] hover:-translate-y-0.5 hover:bg-surface-2 hover:text-fg"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location} · {profile.timezone}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-accent/10 blur-3xl" aria-hidden="true" />
          <CodeCard />
        </motion.div>
      </div>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
        className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4"
        aria-label="Career highlights"
      >
        {headlineStats.map((s) => (
          <motion.li key={s.label} variants={item}>
            <BentoCard className="h-full p-5 sm:p-6">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
            </BentoCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
