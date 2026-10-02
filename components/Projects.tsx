"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Section from "@/components/Section";
import { GITHUB_PROFILE, PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      badge="Case Studies"
      title="Selected Work"
      intro="Seven shipped projects, each with a live deployment and public source. Every one of them covers a different problem — commerce, administration, ordering, booking and content."
    >
      {/* Case study list */}
      <ol className="space-y-5">
        {PROJECTS.map((p, index) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: Math.min(index, 3) * 0.08, ease: "easeOut" }}
            className="group relative"
          >
            <article
              className={`glow-card relative overflow-hidden rounded-[1.75rem] ${
                index === 0 ? "glass glass-elevated" : "glass border-white/8"
              }`}
            >
              {/* Index rail */}
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-px bg-gradient-to-b from-crimson-400/60 via-crimson-500/15 to-transparent transition-opacity duration-500 ${
                  index === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
              {/* Ambient wash */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crimson-500/[0.05] opacity-0 blur-[110px] transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative grid gap-7 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-9">
                {/* Marker */}
                <div className="flex items-center gap-4 lg:w-12 lg:flex-col lg:items-center lg:gap-3">
                  <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-crimson-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-crimson-500/25 lg:h-10 lg:w-px" aria-hidden="true" />
                  <span
                    className={`rounded-xl border p-2.5 text-crimson-300 transition-all duration-300 ${
                      index === 0
                        ? "border-crimson-400/30 bg-crimson-400/[0.07]"
                        : "border-white/10 bg-navy/60 group-hover:border-crimson-400/30 group-hover:bg-crimson-400/[0.06]"
                    }`}
                  >
                    <p.icon size={20} aria-hidden="true" />
                  </span>
                </div>

                {/* Body */}
                <div className="min-w-0">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-crimson-500">
                        {index === 0 && (
                          <span className="rounded-full border border-crimson-400/30 bg-crimson-400/[0.07] px-2 py-0.5 text-crimson-300">
                            Featured
                          </span>
                        )}
                        <span>{p.type}</span>
                      </p>
                      <h3 className="mt-2.5 text-xl font-bold tracking-[-0.01em] text-chalk transition-colors group-hover:text-crimson-200 sm:text-2xl">
                        {p.title}
                      </h3>
                    </div>

                    {/* Actions — Live Demo prominent, GitHub secondary */}
                    <div className="flex shrink-0 flex-wrap gap-2.5 sm:justify-end">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live demo (opens in a new tab)`}
                        className="group/live inline-flex items-center gap-1.5 rounded-full border border-crimson-400/30 bg-crimson-500 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-300 sm:text-sm"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                        />
                      </a>
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} source code on GitHub (opens in a new tab)`}
                        className="group/repo inline-flex items-center gap-1.5 rounded-full border border-crimson-400/25 bg-navy/60 px-4 py-2.5 text-xs font-semibold text-mist transition-all duration-300 hover:border-crimson-400/35 hover:bg-crimson-400/[0.06] hover:text-crimson-200 sm:text-sm"
                      >
                        <Github size={16} aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
                    {p.summary}
                  </p>

                  {/* Tech + highlights */}
                  <div className="mt-6 flex flex-col gap-5 border-t border-white/8 pt-6 xl:flex-row xl:items-start xl:gap-10">
                    <ul className="flex flex-wrap gap-2 xl:w-44 xl:shrink-0">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-white/8 bg-navy/70 px-2.5 py-1 text-xs font-medium text-mist"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <ul className="flex-1 space-y-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-2.5 text-xs leading-relaxed text-muted sm:text-sm"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-crimson-400/70"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>

      {/* GitHub CTA */}
      <div className="mt-14 flex justify-center">
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-crimson-400/25 bg-navy/60 px-7 py-3.5 text-sm font-semibold text-mist transition-all duration-300 hover:border-crimson-400/40 hover:bg-crimson-400/[0.06] hover:text-crimson-200"
        >
          <Github size={18} aria-hidden="true" className="text-crimson-400 transition-colors group-hover:text-crimson-300" />
          <span>See the rest on GitHub</span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </Section>
  );
}