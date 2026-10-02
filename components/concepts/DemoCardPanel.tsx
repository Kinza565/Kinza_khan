"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

interface ShowcaseProject {
  title: string;
  kind: string;
  description: string;
  tech: string[];
  live: string;
  code: string;
  featured?: boolean;
}

const PROJECTS: ShowcaseProject[] = [
  {
    title: "Foody",
    kind: "Delivery App",
    description:
      "Mobile-first food ordering with a browsable menu, cart and checkout flow tuned for one-handed use.",
    tech: ["Next.js", "Tailwind", "React"],
    live: "https://food-y-navy.vercel.app",
    code: "https://github.com/Kinza565/food-y",
    featured: true,
  },
  {
    title: "PromptGPT",
    kind: "AI Generator",
    description:
      "Prompt workspace with streaming completions, saved runs and structured output presets.",
    tech: ["FastAPI", "Next.js", "Neon"],
    live: "https://promptgpt.example.app",
    code: "https://github.com/Kinza565/promptgpt",
  },
];

function Card({ project }: { project: ShowcaseProject }) {
  const [hover, setHover] = useState(false);
  const featured = Boolean(project.featured);

  return (
    <motion.article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={{ y: featured ? -6 : 0, scale: featured && hover ? 1.015 : 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`glass relative flex flex-col overflow-hidden rounded-[1.5rem] p-6 sm:p-7 ${
        featured ? "border-crimson-400/40" : "border-white/8"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-crimson-500/45 to-transparent opacity-70"
      />

      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-crimson-400">
        {project.kind}
      </p>
      <h3 className="mt-2.5 text-xl font-semibold tracking-[-0.01em] text-chalk">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-white/8 bg-navy/70 px-2.5 py-1 text-[11px] font-medium text-mist"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* Actions + muted preview */}
      <div className="relative mt-7 flex items-center gap-2.5">
        <span className="relative">
          {/* Muted preview pops out above the button on hover */}
          <motion.span
            initial={false}
            animate={
              featured && hover
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 10, scale: 0.96 }
            }
            transition={{ duration: 0.28, ease: "easeOut" }}
            aria-hidden="true"
            className="pointer-events-none absolute -top-[7.5rem] left-1/2 z-10 block w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-crimson-400/35 bg-[#0C0F18] shadow-[0_18px_40px_-22px_rgba(216,30,54,0.8)]"
          >
            <span className="relative block h-24 bg-[linear-gradient(135deg,#1E1226_0%,#0C0F18_55%,#2A1018_100%)]">
              <span className="absolute inset-0 block bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_3px)]" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-chalk">
                  <Play size={12} fill="currentColor" aria-hidden="true" />
                </span>
              </span>
              <motion.span
                animate={featured && hover ? { x: ["0%", "100%"] } : { x: "0%" }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 block h-0.5 w-1/3 bg-crimson-500/80"
              />
            </span>
            <span className="block px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted">
              Muted preview · no audio
            </span>
          </motion.span>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
              featured && hover
                ? "border-crimson-300 bg-crimson-500 text-white shadow-[0_0_26px_-6px_rgba(216,30,54,0.95)]"
                : "border-crimson-400/30 bg-crimson-500/10 text-crimson-200"
            }`}
          >
            <span>Live Demo</span>
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </span>

        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold text-mist transition-colors hover:border-crimson-400/50 hover:text-chalk"
        >
          Code
        </a>
      </div>
    </motion.article>
  );
}

export default function DemoCardPanel() {
  return (
    <div className="relative p-5 sm:p-8">
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        {PROJECTS.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        The Foody card sits forward with a lift; hover it to raise the muted preview and light the
        Live Demo button.
      </p>
    </div>
  );
}
