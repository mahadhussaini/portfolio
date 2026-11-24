import { ArrowUp, Mail, MapPin } from "lucide-react";
import { navItems, profile } from "../../data/profile";
import { track } from "../../lib/analytics";
import { Avatar } from "../ui/Avatar";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
              <Avatar src={profile.avatar} alt="" initials={profile.initials} className="size-8 text-xs" />
              {profile.name}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {profile.role} specialising in the MERN stack — building scalable, secure and fast web applications.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4" aria-hidden="true" /> {profile.location} · Remote-friendly
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-4 font-mono text-xs tracking-[0.18em] text-subtle uppercase">Navigate</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} download className="text-muted transition-colors hover:text-fg" onClick={() => track("resume_download", { from: "footer" })}>
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 font-mono text-xs tracking-[0.18em] text-subtle uppercase">Connect</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 break-all text-muted transition-colors hover:text-fg">
                  <Mail className="size-4 shrink-0" aria-hidden="true" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("social_click", { platform: "github", from: "footer" })}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
                >
                  <GitHubIcon className="size-4" /> github.com/{profile.githubUser}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("social_click", { platform: "linkedin", from: "footer" })}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
                >
                  <LinkedInIcon className="size-4" /> in/mahad-arshad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center">
          <p>© {year} {profile.name}. Built with React, TypeScript & Tailwind CSS.</p>
          <a href="#top" className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg">
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
