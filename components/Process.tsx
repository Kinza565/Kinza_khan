"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Rocket, Search, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "@/components/Section";
import Magnetic from "@/components/Magnetic";

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
}

export interface EngagementType {
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Scoping",
    summary:
      "We start by understanding the problem before touching code — requirements, architecture, and whether AI genuinely belongs in the solution.",
    points: [
      "Requirements & constraint mapping",
      "System and data architecture",
      "AI model and integration selection",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Design & Full-Stack Build",
    summary:
      "Rapid iteration from first commit to production shape, using Next.js and API routes with the interface refined alongside the logic.",
    points: [
      "Next.js App Router & API routes",
      "Rapid iteration on working builds",
      "UI polish and accessibility pass",
    ],
    icon: Layers,
  },
  {
    number: "03",
    title: "Deployment & Support",
    summary:
      "Ship it, measure it, then hand it over properly — a live deployment, a performance check, and documentation your team can act on.",
    points: [
      "Vercel deployment & CI pipeline",
      "Performance and quality verification",
      "Post-launch handoff and support",
    ],
    icon: Rocket,
  },
];

export const ENGAGEMENT_TYPES: EngagementType[] = [
  {
    title: "Fixed-Price Web Apps",
    description:
      "A scoped build with agreed deliverables and a fixed quote. Best when the requirements are clear and the outcome is well defined.",
  },
  {
    title: "AI Integration Sprints",
    description:
      "A focused engagement that wires AI into an existing product or prototypes a new capability — prompt design, API integration, and evaluation.",
  },
  {
    title: "Full-Stack Maintenance",
    description:
      "Ongoing cover for features, dependency upgrades, performance work, and bug fixes — keeping an existing product healthy as it grows.",
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      badge="Process"
      title="Process & Work Engagement"
      intro="A predictable three-stage path from first conversation to live deployment — and the ways we can work together once the scope is clear."
    >
      <ol className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {PROCESS_STEPS.map((step, index) => (
          <motion.li
            key={step.number}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-navy/60 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-crimson-400/35 hover:bg-navy/85 hover:shadow-[0_24px_50px_-32px_rgba(216,30,54,0.45),0_18px_40px_-30px_rgba(0,0,0,0.9)] sm:p-7"
          >
            {/* Crimson edge wash revealed on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-crimson-400/70 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            />

            <div className="flex items-center justify-between gap-4">
              <span
                aria-hidden="true"
                className="bg-gradient-to-br from-chalk via-crimson-300 to-crimson-600 bg-clip-text text-4xl font-bold leading-none tracking-[-0.03em] text-transparent sm:text-5xl"
              >
                {step.number}
              </span>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-800 text-crimson-300 transition-all duration-300 group-hover:border-crimson-400/40 group-hover:text-crimson-200">
                <step.icon size={20} aria-hidden="true" />
              </span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-chalk sm:text-xl">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-mist">
              {step.summary}
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-5">
              {step.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-mist"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-crimson-400"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      {/* Engagement Callout */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="group relative mt-6 overflow-hidden rounded-2xl border border-neutral-800 bg-navy/70 p-7 transition-colors duration-400 hover:border-crimson-400/30 sm:p-9"
      >
        {/* Ambient crimson wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-crimson-500/10 blur-[100px]"
        />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson-400/25 bg-crimson-400/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-300">
              <Sparkles size={12} aria-hidden="true" />
              Engagement Types
            </span>

            <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-chalk sm:text-3xl">
              Three ways we can work together
            </h3>

            <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:gap-6">
              {ENGAGEMENT_TYPES.map((type) => (
                <li
                  key={type.title}
                  className="border-l border-white/8 pl-4 transition-colors duration-300 hover:border-crimson-400/50"
                >
                  <p className="text-sm font-semibold text-chalk">
                    {type.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {type.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 lg:pl-8">
            <Magnetic>
              <a
                href="#contact"
                className="group/cta inline-flex items-center gap-2 rounded-full border border-crimson-400/40 bg-crimson-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-400"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/cta:translate-x-1"
                />
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}