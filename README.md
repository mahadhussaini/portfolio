# Syed Mahad Hussaini — Portfolio

Personal portfolio for a Full Stack Developer (MERN, Next.js, TypeScript). Dark-first premium design with a bento-grid layout, light theme, subtle motion and full keyboard / screen-reader support.

**Live:** https://mahadhussaini.netlify.app

## Stack

- **React 18 + TypeScript**, built with **Vite 5**
- **Tailwind CSS v4** (design tokens in `src/index.css`, both themes)
- **Framer Motion** for reveal, layout and micro-interactions (honours `prefers-reduced-motion`)
- **Lucide** icons, self-hosted **Geist / Geist Mono** variable fonts
- **React Router** — legacy deep links (`/projects`, `/contact`, …) scroll to their section

## Project structure

```
src/
  data/            ← all content lives here (edit these, not components)
    profile.ts       bio, stats, skills, experience, impact, services, education
    projects.ts      projects (stack + highlights taken from each repo)
  components/
    layout/          Navbar (scroll-spy, progress bar, mobile menu), Footer
    sections/        Hero, About, Skills, Experience, Impact, Projects, ProjectDialog, Services, Contact
    ui/              BentoCard, Button, Reveal, CountUp, Avatar, Tag, SectionHeading, BrandIcons
    Assistant.tsx    keyword-based "quick answers" widget (answers only from data/)
  hooks/           useTheme, useActiveSection, useGitHubProfile
  lib/             analytics (local, no third parties), contact (validation + delivery)
  pages/           Home, NotFound
public/
  project-images/  WebP screenshots (≈470 KB total)
  resume.pdf, og-image.png, _redirects, robots.txt, sitemap.xml, manifest.json
```

## Scripts

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build → dist/
npm run preview    # serve dist/
npm run lint
npm run typecheck
```

## Contact form

Delivery order (see `src/lib/contact.ts`):

1. `VITE_CONTACT_ENDPOINT` — any JSON form endpoint (e.g. Formspree). Set it in `.env.local` or the host's env settings.
2. **Netlify Forms** in production — the form is registered in `index.html`. Enable form detection in the Netlify dashboard and add an email notification.
3. Otherwise (e.g. local dev) the form reports a delivery error and offers a pre-filled email instead. It never fakes success.

A honeypot field filters basic spam.

## Profile photo

Add a square image at `public/avatar.jpg` (≈320×320). Until then a monogram is shown.

## Updating content

Edit `src/data/profile.ts` and `src/data/projects.ts`. Every figure on the site comes from `public/resume.pdf`, so keep the two in sync.
