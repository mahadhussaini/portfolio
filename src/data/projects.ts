/**
 * Projects with live deployments and public source.
 * Descriptions reflect what each live app does; `stack` and `highlights`
 * are taken from each repository's actual dependencies. No usage metrics
 * are listed because none are publicly verifiable — add real ones here
 * if you have analytics for a project.
 */

export type ProjectCategory = "Business" | "Fintech" | "Health" | "AI" | "Community" | "Productivity";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  highlights: string[];
  image: string;
  live: string;
  repo: string;
  featured?: boolean;
};

const gh = (repo: string) => `https://github.com/mahadhussaini/${repo}`;
const img = (file: string) => `/project-images/${file}.webp`;

export const projects: Project[] = [
  {
    slug: "crm-erp-platform",
    name: "CRM-ERP Platform",
    tagline: "Customers, sales and operations in one workspace",
    description:
      "A business-management suite that unifies customer and company records, task tracking and sales reporting, with a drag-and-drop sales pipeline and integrated payments and messaging.",
    category: "Business",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Socket.io", "Stripe", "Twilio", "TanStack Query", "Recharts"],
    highlights: [
      "Authentication with NextAuth, a Prisma adapter and bcrypt-hashed credentials",
      "Drag-and-drop sales pipeline built on dnd-kit",
      "Real-time updates pushed over Socket.io",
      "Stripe payments and Twilio messaging integrations",
      "Type-safe forms with React Hook Form + Zod",
    ],
    image: img("crm-erp-platform"),
    live: "https://crm-erp-platform.vercel.app",
    repo: gh("crm-erp-platform"),
    featured: true,
  },
  {
    slug: "blog-management-system",
    name: "BlogManager",
    tagline: "MERN blogging platform with a hardened API",
    description:
      "A full MERN application for writing, managing and publishing posts — React front end with a rich-text editor, Express/MongoDB back end built with security defaults from day one.",
    category: "Community",
    stack: ["MongoDB", "Express", "React", "Node.js", "Mongoose", "JWT", "Helmet", "Tailwind CSS"],
    highlights: [
      "Express API protected with Helmet, rate limiting and express-validator",
      "JWT authentication with bcrypt-hashed passwords",
      "Rich-text authoring with React Quill and Markdown rendering",
      "Mongoose models with server-side validation",
    ],
    image: img("blog-management-system-nu"),
    live: "https://blog-management-system-nu.vercel.app",
    repo: gh("blog-management-system"),
    featured: true,
  },
  {
    slug: "medisphere",
    name: "MediSphere",
    tagline: "Patient portal for appointments, records and billing",
    description:
      "A healthcare portal where patients manage appointments, medical records, billing and insurance from a single tabbed dashboard.",
    category: "Health",
    stack: ["Next.js", "TypeScript", "SQLite", "JWT (jose)", "Socket.io", "Radix UI", "Zod", "Recharts"],
    highlights: [
      "JWT session handling with jose and bcrypt",
      "Appointment scheduling on react-big-calendar",
      "Medical-record PDFs generated and previewed in the browser",
      "Secure document uploads with react-dropzone",
    ],
    image: img("medisphere-lyart"),
    live: "https://medisphere-lyart.vercel.app",
    repo: gh("medisphere"),
    featured: true,
  },
  {
    slug: "payvia",
    name: "PayVia",
    tagline: "Modern digital-banking dashboard",
    description:
      "A fintech web app for everyday banking — account overview, transactions and spending insights behind a secure sign-in.",
    category: "Fintech",
    stack: ["Next.js", "TypeScript", "TanStack Query", "JWT", "React Hook Form", "Zod", "Recharts", "Framer Motion"],
    highlights: [
      "JWT authentication with bcrypt-hashed credentials",
      "Server-state caching and background refetch with TanStack Query",
      "Validated financial forms using React Hook Form + Zod",
      "Spending insights visualised with Recharts",
    ],
    image: img("payvia-sage"),
    live: "https://payvia-sage.vercel.app",
    repo: gh("payvia"),
    featured: true,
  },
  {
    slug: "memrise",
    name: "Memrise Clone",
    tagline: "Language learning with live practice",
    description:
      "A Memrise-inspired language-learning platform with interactive lessons, real-time conversation practice and in-browser pronunciation feedback.",
    category: "Community",
    stack: ["Next.js", "TypeScript", "Express", "Prisma", "NextAuth", "Socket.io", "Zustand", "TanStack Query"],
    highlights: [
      "Speech recognition and synthesis for pronunciation practice",
      "Real-time rooms over Socket.io with an Express server",
      "NextAuth sign-in backed by Prisma",
      "Zustand for client state, TanStack Query for server state",
    ],
    image: img("memrise-eight"),
    live: "https://memrise-eight.vercel.app",
    repo: gh("memrise"),
    featured: true,
  },
  {
    slug: "haven",
    name: "Haven",
    tagline: "Disaster preparedness & climate resilience",
    description:
      "A location-aware platform offering real-time alerts, AI-generated risk assessments and community support for disaster preparedness.",
    category: "AI",
    stack: ["Next.js", "OpenAI API", "Leaflet", "React Query", "PWA / Workbox", "Recharts", "Zod"],
    highlights: [
      "Interactive risk maps with Leaflet",
      "AI risk assessments through the OpenAI API",
      "Installable PWA with offline caching via Workbox",
    ],
    image: img("haven-henna"),
    live: "https://haven-henna.vercel.app",
    repo: gh("haven"),
    featured: true,
  },
  {
    slug: "unite",
    name: "Unite",
    tagline: "Discover, create and join events",
    description: "A community and events platform for finding events, creating your own and connecting with like-minded people.",
    category: "Community",
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Socket.io", "Nodemailer", "Radix UI", "Zod"],
    highlights: ["Real-time updates with Socket.io", "Email notifications through Nodemailer", "Auth with NextAuth + Prisma"],
    image: img("unite-azure"),
    live: "https://unite-azure.vercel.app",
    repo: gh("unite"),
  },
  {
    slug: "eterna",
    name: "Eterna",
    tagline: "Interest-based matching with real-time chat",
    description: "A dating platform that matches people on shared interests and values, with secure real-time messaging.",
    category: "Community",
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Socket.io", "Radix UI", "Zod"],
    highlights: ["Real-time chat over Socket.io", "Preference-based matching", "NextAuth + Prisma accounts"],
    image: img("eterna-nu"),
    live: "https://eterna-nu.vercel.app",
    repo: gh("eterna"),
  },
  {
    slug: "ecotrack",
    name: "EcoTrack",
    tagline: "Carbon-footprint tracking with rewards",
    description: "Track your environmental impact, get personalised insights and earn eco-points for sustainable actions.",
    category: "Productivity",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "OpenAI API", "Chart.js", "TanStack Query"],
    highlights: ["Personalised insights via the OpenAI API", "PostgreSQL + Prisma data layer", "Impact charts with Chart.js"],
    image: img("ecotrack-azure"),
    live: "https://ecotrack-azure.vercel.app",
    repo: gh("ecotrack"),
  },
  {
    slug: "nutri-ai",
    name: "NutriAI",
    tagline: "AI nutrition and meal planning",
    description: "Daily nutrition dashboard tracking calories, macros and hydration, with AI-assisted meal planning.",
    category: "Health",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Zustand", "Recharts", "Radix UI", "Zod"],
    highlights: ["AI meal plans via the OpenAI API", "Macro and calorie tracking", "Light/dark theming with next-themes"],
    image: img("nutri-ai-theta"),
    live: "https://nutri-ai-theta.vercel.app",
    repo: gh("nutriAI"),
  },
  {
    slug: "formify",
    name: "Formify",
    tagline: "Build smart forms with AI",
    description: "A drag-and-drop form builder with AI-assisted validation and response analytics — no code required.",
    category: "AI",
    stack: ["Next.js", "TypeScript", "dnd-kit", "OpenAI API", "Radix UI", "React Hook Form", "Zod"],
    highlights: ["Drag-and-drop form canvas built on dnd-kit", "AI-assisted validation via OpenAI", "Schema validation with Zod"],
    image: img("formify-wine"),
    live: "https://formify-wine.vercel.app",
    repo: gh("formify"),
  },
  {
    slug: "sketchly",
    name: "Sketchly",
    tagline: "Turn sketches into code",
    description: "Upload hand-drawn sketches or wireframes and convert them into code, then refine it in an in-browser editor with live preview.",
    category: "AI",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Monaco Editor", "Zustand", "Tailwind CSS"],
    highlights: ["Image upload with react-dropzone", "Monaco code editor and live preview", "AI code generation via OpenAI"],
    image: img("sketchly-woad"),
    live: "https://sketchly-woad.vercel.app",
    repo: gh("sketchly"),
  },
  {
    slug: "desaign",
    name: "DesAIgn",
    tagline: "Describe a UI, get the code",
    description: "Prompt-driven UI generator: describe a component, page or layout and get syntax-highlighted code back.",
    category: "AI",
    stack: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    highlights: ["Component, page and layout generation modes", "Syntax-highlighted output"],
    image: img("desaign-tau"),
    live: "https://desaign-tau.vercel.app",
    repo: gh("desaign"),
  },
  {
    slug: "storify",
    name: "Storify",
    tagline: "Write stories together, in real time",
    description: "A collaborative storytelling platform for writing and editing stories with friends, with AI writing assistance.",
    category: "Community",
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth", "OpenAI API", "Zustand", "Framer Motion"],
    highlights: ["Collaborative editing", "AI writing assistance via OpenAI", "NextAuth + Prisma accounts"],
    image: img("storify-pink-five"),
    live: "https://storify-pink-five.vercel.app",
    repo: gh("storify"),
  },
  {
    slug: "memora",
    name: "Memora",
    tagline: "AI companion for memory support",
    description: "A SaaS companion helping people with memory challenges stay independent through reminders, journaling and conversation.",
    category: "AI",
    stack: ["React", "Supabase", "Stripe", "React Router"],
    highlights: ["Supabase auth and database", "Stripe subscription checkout", "Reminders and journaling"],
    image: img("memora-neon"),
    live: "https://memora-neon.vercel.app",
    repo: gh("memora"),
  },
  {
    slug: "coinify",
    name: "Coinify",
    tagline: "Crypto portfolio tracker",
    description: "Monitor crypto holdings with portfolio value, P&L, return on investment and asset allocation, exportable to PDF.",
    category: "Fintech",
    stack: ["Next.js", "TypeScript", "Recharts", "Zustand", "jsPDF"],
    highlights: ["P&L and allocation charts", "PDF report export"],
    image: img("coinify-one"),
    live: "https://coinify-one.vercel.app",
    repo: gh("coinify"),
  },
  {
    slug: "guardify",
    name: "Guardify",
    tagline: "AI-powered personal finance guardian",
    description: "A personal finance dashboard for income, expenses, net worth and savings goals with smart financial alerts.",
    category: "Fintech",
    stack: ["React", "JavaScript", "Recharts"],
    highlights: ["Income, expense and savings tracking", "Goal progress and alerts"],
    image: img("guardify-phi"),
    live: "https://guardify-phi.vercel.app",
    repo: gh("guardify"),
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    tagline: "Security monitoring dashboard",
    description: "A cybersecurity dashboard for real-time monitoring, threat detection status and quick scans.",
    category: "AI",
    stack: ["Next.js", "OpenAI API", "Recharts", "Framer Motion"],
    highlights: ["Live monitoring dashboard", "AI-assisted threat summaries via OpenAI"],
    image: img("sentinel-smoky"),
    live: "https://sentinel-smoky.vercel.app",
    repo: gh("sentinel"),
  },
  {
    slug: "closette",
    name: "Closette",
    tagline: "Digital wardrobe and outfit planner",
    description: "Organise your closet, plan outfits on a calendar and discover your personal style. Installable as a PWA.",
    category: "Productivity",
    stack: ["Next.js", "TypeScript", "Zustand", "React Hook Form", "Drag and drop"],
    highlights: ["Drag-and-drop outfit builder", "Calendar-based planning"],
    image: img("closette-zeta"),
    live: "https://closette-zeta.vercel.app",
    repo: gh("closette"),
  },
  {
    slug: "vitalize",
    name: "Vitalize",
    tagline: "Daily wellness check-ins",
    description: "A health companion for logging mood, energy, sleep and hydration, with a daily health score.",
    category: "Health",
    stack: ["React", "JavaScript", "React Router", "Recharts"],
    highlights: ["Daily check-in flow", "Trend charts with Recharts"],
    image: img("vitalize-six"),
    live: "https://vitalize-six.vercel.app",
    repo: gh("vitalize"),
  },
  {
    slug: "focusly",
    name: "Focusly",
    tagline: "Pomodoro focus timer, installable",
    description: "A focused-work timer built on the Pomodoro technique, with keyboard shortcuts and offline-capable PWA install.",
    category: "Productivity",
    stack: ["React", "TypeScript", "Zustand", "Framer Motion"],
    highlights: ["Keyboard shortcuts", "Installable PWA with online/offline status"],
    image: img("focusly-weld"),
    live: "https://focusly-weld.vercel.app",
    repo: gh("focusly"),
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  ...(Array.from(new Set(projects.map((p) => p.category))) as ProjectCategory[]),
];
