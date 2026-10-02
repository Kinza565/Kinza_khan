"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, CheckCircle2, Github } from "lucide-react";
import Section from "@/components/Section";
import { BOOK } from "@/lib/data";

export default function Book() {
  return (
    <Section
      id={BOOK.id}
      badge={BOOK.label}
      title="Technical Writing"
      intro="Long-form technical work published outside the portfolio — written as reference material, structured to be read and returned to."
    >
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass glow-card relative overflow-hidden rounded-[2rem] border border-white/8"
      >
        {/* Ambient light wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-crimson-500/[0.045] blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-crimson-400/30 to-transparent"
        />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Left: masthead */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-crimson-400/25 bg-navy/80 p-2.5 text-crimson-300">
                <BookOpen size={22} aria-hidden="true" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-400">
                {BOOK.label}
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-chalk transition-colors sm:text-4xl">
              {BOOK.title}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-mist">{BOOK.summary}</p>

            <ul className="mt-7 space-y-3">
              {BOOK.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-mist">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-crimson-500" aria-hidden="true" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={BOOK.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full border border-crimson-400/30 bg-crimson-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-300"
              >
                <span>Read the Book</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                />
              </a>
              <a
                href={BOOK.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-crimson-400/25 bg-navy/60 px-6 py-3 text-sm font-semibold text-mist transition-all duration-300 hover:border-crimson-400/35 hover:bg-crimson-400/[0.06] hover:text-crimson-200"
              >
                <Github size={18} aria-hidden="true" />
                <span>Source on GitHub</span>
              </a>
            </div>
          </div>

          {/* Right: editorial body */}
          <div className="flex flex-col justify-center gap-6 lg:border-l lg:border-white/8 lg:pl-12">
            {BOOK.detail.map((para, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-500">
                  {i === 0 ? "Structure" : "Implementation"}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-chalk">{para}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-white/8 bg-navy/50 p-6">
              <p className="text-base italic leading-relaxed text-mist">
                &ldquo;Robotics is no longer a question of whether machines can act in the
                physical world &mdash; it is a question of how deliberately we design what they
                do when they do.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}