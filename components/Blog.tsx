"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import Section from "@/components/Section";
import { BLOG } from "@/lib/data";

export default function Blog() {
  return (
    <Section
      id={BLOG.id}
      badge="Writing"
      title={BLOG.label}
      intro="Notes I keep while building — framework decisions, web platform behaviour, and the tools that took me longest to genuinely understand."
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass glow-card group relative overflow-hidden rounded-[2rem] border border-white/8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-crimson-500/[0.045] blur-[110px]"
        />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          {/* Left: editorial */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-crimson-400/25 bg-navy/80 p-2.5 text-crimson-300">
                <FileText size={22} aria-hidden="true" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-400">
                {BLOG.title}
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-chalk sm:text-xl">{BLOG.summary}</p>

            <ul className="mt-8 space-y-4">
              {BLOG.detail.map((para, i) => (
                <li key={i} className="flex gap-3.5 text-sm leading-relaxed text-mist">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-500"
                  />
                  <span>{para}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: actions */}
          <div className="flex flex-col justify-center gap-4 lg:border-l lg:border-white/8 lg:pl-12">
            <a
              href={BLOG.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-between gap-3 rounded-2xl border border-crimson-300/40 bg-crimson-500 px-6 py-4 text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-300"
            >
              <span className="text-left">
                <span className="block text-sm font-bold">Read the Notes</span>
                <span className="block text-xs text-white/70">blog-with-kinza.vercel.app</span>
              </span>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>

            <a
              href={BLOG.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-between gap-3 rounded-2xl border border-crimson-400/25 bg-navy/60 px-6 py-4 transition-all duration-300 hover:border-crimson-400/35 hover:bg-crimson-400/[0.06]"
            >
              <span className="text-left">
                <span className="block text-sm font-semibold text-chalk">Source on GitHub</span>
                <span className="block text-xs text-muted">Sanity CMS setup</span>
              </span>
              <Github
                size={18}
                aria-hidden="true"
                className="shrink-0 text-crimson-400 transition-colors group-hover/btn:text-crimson-300"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}