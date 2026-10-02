"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const STATS = [
  { value: "Next.js", label: "Frontend", sub: "Modern & Performant" },
  { value: "Python", label: "Backend", sub: "Scalable & Robust" },
  { value: "AI", label: "Integration", sub: "Smart & Agentic" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
      {/* Layer 1 — Background photograph */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/kinza-bg.jpg')",
          backgroundPosition: "50% 18%",
          filter: "saturate(0.9) brightness(0.85) contrast(1.05)",
        }}
      />

      {/* Layer 2 — Graphite overlay for text contrast */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[#0B0D0C]/88" />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[radial-gradient(115%_80%_at_50%_38%,transparent_0%,rgba(8,9,15,0.5)_70%,rgba(8,9,15,0.8)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[1] h-40 bg-[linear-gradient(180deg,rgba(11,13,12,0.9)_0%,transparent_100%)]"
      />

      {/* Layer 3 — Texture, diffused crimson ambience and terrain curves */}
      <div className="grid-bg absolute inset-0 z-[2] opacity-60" />
      <div className="absolute left-1/2 top-10 z-[2] h-80 w-[42rem] -translate-x-1/2 rounded-full bg-crimson-600/12 blur-[160px]" />
      <div className="absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-crimson-500/25 to-transparent" />

      {/* Layered dark terrain curves */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-44 w-full sm:h-56"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 104 C 220 52, 430 140, 720 106 C 1010 72, 1210 138, 1440 92 L1440 200 L0 200 Z"
          fill="#170E1E"
        />
        <path
          d="M0 142 C 300 104, 520 162, 860 134 C 1120 112, 1290 158, 1440 132 L1440 200 L0 200 Z"
          fill="#0E0B16"
        />
        <path
          d="M0 176 C 340 148, 640 190, 980 172 C 1200 162, 1330 186, 1440 174 L1440 200 L0 200 Z"
          fill="#08090F"
        />
      </svg>

      {/* Layer 4 — Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Main Title */}
        <h1 className="text-[2.1rem] font-bold leading-[1.06] tracking-[-0.03em] text-chalk sm:text-6xl lg:text-7xl xl:text-8xl">
          Kinza Khan
        </h1>

        {/* Crimson rule */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-7" aria-hidden="true">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-crimson-500/70 sm:w-16" />
          <span className="h-1.5 w-1.5 rotate-45 bg-crimson-500" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-crimson-500/70 sm:w-16" />
        </div>

        <p className="mt-6 text-[1.05rem] font-semibold uppercase leading-tight tracking-[0.06em] text-crimson-400 sm:mt-7 sm:text-2xl lg:text-3xl">
          Full-Stack &amp; AI Integration Specialist
        </p>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          I build modern, scalable web applications and digital experiences with{" "}
          <span className="font-medium text-chalk">Next.js</span>,{" "}
          <span className="font-medium text-chalk">TypeScript</span>, and{" "}
          <span className="font-medium text-chalk">AI integrations</span>.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full bg-crimson-500 px-10 py-4 font-semibold text-white shadow-[0_16px_40px_-22px_rgba(216,30,54,0.9)] transition-all duration-300 hover:bg-crimson-400"
            >
              <span>View My Work</span>
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-10 py-4 font-semibold text-chalk backdrop-blur-xl transition-all duration-300 hover:border-crimson-400/60 hover:text-crimson-300"
            >
              <span>Let&rsquo;s Talk</span>
            </a>
          </Magnetic>
        </div>

        {/* Tech Strip */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-white/8 pt-10 sm:mt-20">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {STATS.map((s) => (
              <li key={s.label} className="group/stat flex flex-col items-center gap-1.5">
                <span className="text-xl font-bold text-chalk transition-colors duration-300 group-hover/stat:text-crimson-300 sm:text-2xl">
                  {s.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Availability Indicator */}
        <div className="mt-14 flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-mist sm:mt-16 sm:text-xs">
          <span className="text-crimson-400" aria-hidden="true">
            *
          </span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-crimson-400" />
          </span>
          <span>Available for Freelance Projects</span>
        </div>
      </motion.div>
    </section>
  );
}
