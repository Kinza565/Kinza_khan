import {
  ShoppingBag,
  ListChecks,
  UtensilsCrossed,
  Car,
  Dumbbell,
  FileText,
  BookOpen,
  Globe,
  Layout,
  Server,
  BrainCircuit,
  MonitorSmartphone,
  Type,
  Blocks,
  Sparkles,
  Database,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Site config                                                               */
/* -------------------------------------------------------------------------- */

export const SITE_URL = "https://kinza-khan.vercel.app";
export const PROFILE_NAME = "Kinza Khan";
export const PROFILE_ROLE = "Full-Stack & AI Integration Specialist";

export const CONTACT_EMAIL = "kinzasardar545@gmail.com";

export const WHATSAPP_NUMBER = "923223091979";
export const WHATSAPP_DISPLAY = "+92 322 3091979";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Kinza, I'd like to discuss a project."
)}`;

export const GITHUB_PROFILE = "https://github.com/Kinza565";

/** Only confirmed accounts live here. No placeholders. */
export const SOCIALS = {
  email: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project Inquiry — Kinza Khan")}`,
  whatsapp: WHATSAPP_URL,
  linkedin: "https://www.linkedin.com/in/kinza-khan-8b64462b7/",
  github: GITHUB_PROFILE,
} as const;

export interface SocialLink {
  href: string;
  label: string;
  Icon: LucideIcon;
  external: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.email, label: "Email", Icon: Mail, external: false },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle, external: true },
  { href: SOCIALS.github, label: "GitHub", Icon: Github, external: true },
  { href: SOCIALS.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface Project {
  title: string;
  type: string;
  icon: LucideIcon;
  summary: string;
  tech: string[];
  points: string[];
  live: string;
  code: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface Service {
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface JourneyStage {
  phase: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  topics: string[];
}

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

export const ABOUT = {
  role: "Full-Stack & AI Integration Specialist",
  headline: "I build complete web products, end to end.",
  paragraphs: [
    "I'm Kinza Khan, a full-stack developer focused on modern web applications. My work spans the interface layer through to the API and data model, so a project stays coherent from design to deployment instead of being handed between specialists.",
    "My core stack is Next.js, React, TypeScript and Tailwind CSS on the frontend, with Python, Node.js and PostgreSQL on the backend. Alongside that, I work on AI integration and agentic AI — wiring language models and tool-using agents into real application workflows rather than treating them as a demo.",
    "I care about the details that are easy to skip: semantic markup, keyboard accessibility, responsive behaviour at every breakpoint, and shipping work that loads fast and stays maintainable after launch.",
  ],
  facts: [
    { label: "Primary focus", value: "Full-Stack Web Development" },
    { label: "Frontend", value: "Next.js · React · TypeScript" },
    { label: "Backend", value: "Python · Node.js · PostgreSQL" },
    { label: "Specialising in", value: "AI Integration · Agentic AI" },
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Node.js",
    "PostgreSQL",
    "AI Integration",
    "Agentic AI",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Tech stack                                                                */
/* -------------------------------------------------------------------------- */

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & AI",
    icon: Server,
    items: [
      "Python",
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "AI Integration",
      "Agentic AI",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Blocks,
    items: ["Git / GitHub", "Vercel", "Docker", "Sanity CMS", "Docusaurus"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Web Development",
    text: "Complete web applications built across frontend and backend — data model, API layer and interface designed together rather than patched together after launch.",
    icon: Globe,
  },
  {
    title: "Next.js / React Development",
    text: "Production-grade React and Next.js work: server components, Server Actions, sensible state architecture and deploys that stay fast as the codebase grows.",
    icon: Layout,
  },
  {
    title: "Business Websites",
    text: "Professional business sites that establish credibility quickly and turn enquiries into conversations through clear calls to action and contact flows.",
    icon: ShoppingBag,
  },
  {
    title: "Responsive UI Development",
    text: "Interfaces that hold up from small phones through to large displays, with careful type scale, spacing rhythm and touch targets throughout.",
    icon: MonitorSmartphone,
  },
  {
    title: "API / Backend Integration",
    text: "REST APIs and database layers in Python and Node.js, wired to PostgreSQL with validation, error handling and third-party service integration.",
    icon: Database,
  },
  {
    title: "AI Integration & Agentic AI",
    text: "Language models and tool-using agents embedded into real application workflows, scoped to a clear use case with practical failure handling.",
    icon: BrainCircuit,
  },
];

/* -------------------------------------------------------------------------- */
/*  Journey / experience                                                      */
/* -------------------------------------------------------------------------- */

export const JOURNEY: JourneyStage[] = [
  {
    phase: "Phase 01",
    title: "JavaScript & Web Foundations",
    icon: Type,
    summary:
      "Started with the fundamentals of the browser: how HTML structures content, how CSS controls presentation, and how JavaScript brings both to life.",
    topics: ["HTML5 & CSS3", "JavaScript (ES6+)", "DOM Manipulation", "Responsive Layouts", "Git & GitHub"],
  },
  {
    phase: "Phase 02",
    title: "React & TypeScript",
    icon: Layout,
    summary:
      "Moved from static pages to component-driven interfaces, then added a type system to make large applications safer to change and easier to reason about.",
    topics: ["React Components", "Hooks & State", "TypeScript", "Tailwind CSS", "Component Architecture"],
  },
  {
    phase: "Phase 03",
    title: "Next.js & Modern Web Development",
    icon: Blocks,
    summary:
      "Adopted the Next.js App Router to handle rendering strategy, routing and data fetching in one coherent framework, with deployment handled through Vercel.",
    topics: ["Next.js App Router", "Server Components", "Server Actions", "API Routes", "Vercel Deployment"],
  },
  {
    phase: "Phase 04",
    title: "Python, Node.js & Databases",
    icon: Server,
    summary:
      "Built the other half of the stack: APIs in Python and Node.js, relational schemas in PostgreSQL, and containerised local environments with Docker.",
    topics: ["Python", "FastAPI", "Node.js & Express", "PostgreSQL", "REST API Design", "Docker"],
  },
  {
    phase: "Phase 05",
    title: "AI Integration & Agentic AI",
    icon: Sparkles,
    summary:
      "Extended applications with language models and agentic workflows — building tool-using agents that act on real application data instead of generating text in isolation.",
    topics: ["AI Integration", "Agentic Workflows", "Tool-Using Agents", "Content Pipelines", "Structured Outputs"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects — verified live demos and repositories                           */
/* -------------------------------------------------------------------------- */

export const PROJECTS: Project[] = [
  {
    title: "Zaviar Trader",
    type: "B2B Export Business Website",
    icon: ShoppingBag,
    summary:
      "A client-facing web presence for a Himalayan Pink Salt export business, built around international buyers and structured to drive enquiries straight into WhatsApp.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Integration"],
    points: [
      "Professional business presence for export operations and buyer enquiries.",
      "Conversion-focused layout with direct WhatsApp lead generation.",
      "Fast-loading architecture for visitors outside the local network.",
    ],
    live: "https://zaviartrader.com",
    code: "https://github.com/Kinza565/zavi-trader-AD",
  },
  {
    title: "EduPortal",
    type: "School Management System",
    icon: ListChecks,
    summary:
      "A school management system covering administrative workflows and student records behind a single, purpose-built interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard UI"],
    points: [
      "Centralises administrative workflows for educational institutions.",
      "Structured student data management instead of scattered spreadsheets.",
      "Interface designed for administrators working through it daily.",
    ],
    live: "https://edu-portal-school-management-system.vercel.app",
    code: "https://github.com/Kinza565/EduPortal-School-Management-System",
  },
  {
    title: "Food-y",
    type: "Food Ordering Application",
    icon: UtensilsCrossed,
    summary:
      "A mobile-first food ordering experience with a browsable menu and a cart and checkout flow designed for one-handed use.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    points: [
      "Modern ordering platform with a clear menu-to-cart journey.",
      "Mobile-first layout tuned for browsing on a phone.",
      "Dynamic menu presentation and intuitive cart handling.",
    ],
    live: "https://food-y-navy.vercel.app",
    code: "https://github.com/Kinza565/food-y",
  },
  {
    title: "Car Rental",
    type: "Vehicle Rental Platform",
    icon: Car,
    summary:
      "A vehicle rental interface built around fast fleet browsing, filtering and a booking flow that keeps the decision path short.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    points: [
      "Fleet browsing with filtering down to a shortlist.",
      "Clean presentation focused on vehicle detail and availability.",
      "Component-driven build for smooth navigation between listings.",
    ],
    live: "https://hackathone-template-7keenzah.vercel.app",
    code: "https://github.com/Kinza565/Hackathone-template-7-kinzah",
  },
  {
    title: "Gym Portfolio",
    type: "Fitness & Wellness Website",
    icon: Dumbbell,
    summary:
      "A portfolio experience for a fitness brand, presenting training programmes and schedules in a bold, performance-focused design.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    points: [
      "Energetic presentation suited to fitness and wellness brands.",
      "Training programmes and schedules presented clearly.",
      "Bold typography with a performance-driven visual identity.",
    ],
    live: "https://gym-portfolio-navy.vercel.app",
    code: "https://github.com/Kinza565/gym-portfolio",
  },
];

/* -------------------------------------------------------------------------- */
/*  Writing & technical notes                                                 */
/* -------------------------------------------------------------------------- */

export const BLOG = {
  id: "blog",
  title: "Blog with Kinza",
  label: "Writing & Technical Notes",
  summary:
    "A headless-CMS writing site where I document what I learn while building — modern web development patterns, framework decisions, and the occasional deep dive into a tool that took me a while to understand.",
  detail: [
    "Content is managed in Sanity CMS and statically generated, so writing stays decoupled from the interface and pages load without a runtime bottleneck.",
    "Layout is built for reading: a constrained measure, generous line height, and consistent typographic hierarchy across posts.",
  ],
  live: "https://blog-with-kinza.vercel.app",
  code: "https://github.com/Kinza565/sanity-blog",
};

/* -------------------------------------------------------------------------- */
/*  Technical publication                                                      */
/* -------------------------------------------------------------------------- */

export const BOOK = {
  id: "publication",
  title: "Physical AI & Humanoid Robotics",
  label: "Technical Book",
  summary:
    "A structured technical publication on the intersection of physical AI and humanoid robotics — covering how embodied systems perceive, reason, and act in the physical world, written as a guided reference rather than a marketing page.",
  detail: [
    "Organised as a progressive learning path: foundational concepts first, then the architectures, sensing and control approaches, and finally the open problems that remain unsolved.",
    "Built with Docusaurus so that long-form technical content stays searchable, versioned, and easy to navigate across a wide number of sections.",
  ],
  highlights: [
    "Progressive, structured learning path",
    "Searchable and versioned long-form content",
    "Built on Docusaurus for technical documentation",
  ],
  live: "https://physical-ai-humanoid-robotics-liard-ten.vercel.app",
  code: "https://github.com/Kinza565/Physical-AI-Humanoid-Robotics",
};