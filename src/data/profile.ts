/**
 * Single source of truth for portfolio content.
 * Every figure here comes from the résumé in /public/resume.pdf.
 * Update this file (not the components) when facts change.
 */

export const profile = {
  name: "Syed Mahad Hussaini",
  shortName: "Mahad",
  initials: "MH",
  role: "Full Stack Developer",
  specialty: "MERN Stack Specialist",
  location: "Karachi, Pakistan",
  timezone: "PKT · UTC+5",
  email: "mahadarshad214@gmail.com",
  phone: "+92 330 6147798",
  phoneHref: "tel:+923306147798",
  resume: "/resume.pdf",
  avatar: "/avatar.jpg",
  site: "https://mahadhussaini.netlify.app",
  github: "https://github.com/mahadhussaini",
  githubUser: "mahadhussaini",
  linkedin: "https://www.linkedin.com/in/mahad-arshad",
  availability: "Open to senior full-stack & tech-lead roles",
  languages: ["English (fluent)", "Urdu (native)"],
} as const;

export const headlineStats = [
  { value: 3, suffix: "+", label: "Years building production software" },
  { value: 15, suffix: "+", label: "Production applications delivered" },
  { value: 50, suffix: "K+", label: "Users served across apps" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime on delivered systems" },
] as const;

export const coreStack = [
  { name: "React.js", note: "18+, hooks, performance tuning" },
  { name: "Next.js", note: "App Router, SSR/SSG, auth" },
  { name: "Node.js", note: "Express APIs at 10K msgs/min" },
  { name: "TypeScript", note: "Default for new work" },
  { name: "Angular", note: "Fintech admin @ RECV" },
  { name: "AWS", note: "EC2, S3, Lambda, RDS" },
  { name: "Docker", note: "Containerised deploys" },
  { name: "Kubernetes", note: "Orchestration & scaling" },
] as const;

export type SkillGroup = {
  id: string;
  title: string;
  icon: "layers" | "server" | "cloud" | "test" | "palette" | "network";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layers",
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "Redux", "RxJS", "React Native", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io", "WebRTC", "JWT auth", "Webhooks", "Prisma", "NextAuth"],
  },
  {
    id: "data",
    title: "Databases",
    icon: "network",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Query optimisation", "Indexing"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Infrastructure as Code", "Git"],
  },
  {
    id: "quality",
    title: "Testing & Quality",
    icon: "test",
    skills: ["Jest", "Cypress", "React Testing Library", "End-to-end testing", "TDD", "Code review", "Agile / Scrum"],
  },
  {
    id: "ui",
    title: "UI & Data Viz",
    icon: "palette",
    skills: ["Tailwind CSS", "Material UI", "Angular Material", "Chart.js", "D3.js", "Recharts", "Responsive design", "SEO"],
  },
];

export const architectureSkills = [
  "Microservices",
  "System design",
  "API gateway patterns",
  "Apache Kafka",
  "Database optimisation",
  "Multi-tenant environments",
];

export type Role = {
  title: string;
  company: string;
  domain: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Full Stack Engineer",
    company: "RECV",
    domain: "FinTech platform",
    period: "Sep 2025 — Present",
    location: "Remote",
    current: true,
    highlights: [
      "Architected a financial-management admin dashboard in Angular 13 & TypeScript for loans, deposits, accounting and client management — supporting 100+ concurrent users and improving transaction-processing efficiency by **45%**.",
      "Designed the RESTful API layer over Fineract with auth interceptors, request caching and centralised error handling across multi-tenant environments, cutting API latency by **35%**.",
      "Built a Chart.js / D3.js reporting suite for real-time financial monitoring, letting executives produce reports in **50% less time**.",
      "Containerised builds with Docker for consistent environments and faster deployments.",
    ],
    stack: ["Angular 13", "TypeScript", "Angular Material", "RxJS", "Chart.js", "D3.js", "Cypress", "Docker", "Fineract"],
  },
  {
    title: "Full Stack Developer",
    company: "Arc Inventador",
    domain: "Communication platform",
    period: "Mar 2025 — Aug 2025",
    location: "Karachi, Pakistan",
    highlights: [
      "Integrated Infobip SMS, Voice and WebRTC APIs for omnichannel customer engagement, serving **5,000+ concurrent connections** with 99.8% reliability.",
      "Built a scalable Node.js / Express backend for messaging workflows, delivery tracking and webhooks — raising throughput from 1,000 to **10,000 messages/minute**.",
      "Hardened the Infobip integration to a **99.9% delivery success rate** and **40% lower latency**, with structured error logging and monitoring.",
    ],
    stack: ["React.js", "Node.js", "Express", "Infobip", "WebRTC", "Webhooks"],
  },
  {
    title: "Junior Full Stack Developer",
    company: "ASC First Solutions",
    domain: "HR SaaS",
    period: "Mar 2024 — Feb 2025",
    location: "Karachi, Pakistan",
    highlights: [
      "Designed and shipped a performance-evaluation module (React & Node.js) for quarterly appraisals across 500+ employees, lifting completion from **40% to 95%**.",
      "Built a recruitment pipeline with job posting, applicant tracking and interview scheduling, reducing time-to-hire by **30%**.",
      "Developed automated payroll — salary calculation, tax deductions and encrypted payslips — for 100+ employees monthly, plus workforce analytics dashboards.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Analytics dashboards"],
  },
  {
    title: "Software Development Intern",
    company: "Paysys Labs",
    domain: "Government project",
    period: "Dec 2023 — Feb 2024",
    location: "Karachi, Pakistan",
    highlights: [
      "Contributed to the Bureau of Emigration & Overseas Employment portal with the National Bank of Pakistan, impacting **100,000+ citizens**.",
      "Built mobile-first React components that improved UX scores by 35% and reached a **98 Lighthouse** performance score.",
      "Added database indexing and query optimisation — 25% faster record retrieval and page loads down from **4s to 2.5s**.",
    ],
    stack: ["React", "Node.js", "Express", "SQL optimisation"],
  },
];

export type Impact = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  context: string;
  /** optional before → after visual */
  from?: number;
  to?: number;
  unit?: string;
};

export const impact: Impact[] = [
  { value: 10, suffix: "×", label: "Messaging throughput", context: "1K → 10K msgs/min · Arc Inventador" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Message delivery success", context: "Infobip integration · Arc Inventador" },
  { value: 95, suffix: "%", label: "Appraisal completion", context: "Up from 40% · ASC First Solutions", from: 40, to: 95, unit: "%" },
  { value: 100, suffix: "K+", label: "Citizens impacted", context: "Government portal · Paysys Labs" },
  { value: 45, suffix: "%", label: "Faster transaction processing", context: "Fintech dashboard · RECV" },
  { value: 35, suffix: "%", label: "Lower API latency", context: "Fineract API layer · RECV" },
  { value: 30, suffix: "%", label: "Shorter time-to-hire", context: "Recruitment pipeline · ASC" },
  { value: 98, label: "Lighthouse performance", context: "Load time 4s → 2.5s · Paysys Labs" },
];

export const services = [
  {
    icon: "layers",
    title: "Full-stack product development",
    body: "End-to-end MERN and Next.js applications — data model, API, UI and deployment — built to grow from MVP to production traffic.",
    points: ["MongoDB · Express · React · Node", "Next.js & TypeScript", "Auth, payments, dashboards"],
  },
  {
    icon: "server",
    title: "Secure APIs & backends",
    body: "REST and GraphQL services with JWT auth, validation, rate limiting and centralised error handling — the boring parts done right.",
    points: ["Node.js / Express", "Helmet, rate limits, validation", "Caching & interceptors"],
  },
  {
    icon: "gauge",
    title: "Performance optimisation",
    body: "Profiling and fixing slow pages and slow queries. Past work: 4s → 2.5s loads, 98 Lighthouse, 35% lower API latency.",
    points: ["Core Web Vitals", "Query & index tuning", "Bundle and render cost"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    body: "Containerised, reproducible deployments on AWS with CI/CD pipelines so releases are routine rather than risky.",
    points: ["AWS EC2, S3, Lambda, RDS", "Docker & Kubernetes", "GitHub Actions CI/CD"],
  },
  {
    icon: "radio",
    title: "Real-time & integrations",
    body: "Live features and third-party platforms: messaging, voice, WebRTC, webhooks and sockets, monitored and fault-tolerant.",
    points: ["Socket.io & WebRTC", "Infobip, Twilio, Stripe", "Webhook pipelines"],
  },
  {
    icon: "chart",
    title: "Dashboards & admin tools",
    body: "Data-heavy internal tools for finance and HR teams — complex workflows, role-based access, and charts people actually use.",
    points: ["Angular & React admin UIs", "Chart.js, D3.js, Recharts", "Reporting & exports"],
  },
] as const;

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Iqra University",
  period: "2020 — 2023",
  location: "Karachi",
};

export const certifications = [
  { name: "React Advanced Patterns", issuer: "Epic React" },
  { name: "Node.js Performance Optimization", issuer: "2024" },
  { name: "Docker & Kubernetes Fundamentals", issuer: "2024" },
  { name: "AWS Cloud Practitioner", issuer: "In progress" },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

/** Legacy routes from the previous site, mapped to sections so old links keep working. */
export const legacyRoutes: Record<string, string> = {
  home: "top",
  about: "about",
  skills: "skills",
  experience: "experience",
  impact: "impact",
  projects: "projects",
  services: "services",
  education: "about",
  testimonials: "impact",
  contact: "contact",
};
