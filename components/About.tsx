"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { ABOUT } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" badge="About" title="Full-Stack & AI Integration Specialist" intro={ABOUT.headline}>
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        {/* Narrative */}
        <div className="space-y-6">
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="text-base leading-relaxed text-mist sm:text-lg"
            >
              {p}
            </motion.p>
          ))}

          {/* Core stack pills */}
          <div className="pt-2">
            <h3 className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-500">
              <span className="h-px w-6 bg-crimson-500/40" aria-hidden="true" />
              Core Stack
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {ABOUT.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-white/10 bg-navy/70 px-3.5 py-1.5 text-sm font-medium text-mist transition-colors hover:border-crimson-400/35 hover:text-crimson-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facts panel */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass glow-card relative h-fit rounded-2xl border border-white/8 p-7 sm:p-8"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-crimson-400/25 to-transparent" aria-hidden="true" />
          {ABOUT.facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-1.5 py-5 ${i > 0 ? "border-t border-white/8" : ""}`}
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-crimson-500">
                {f.label}
              </dt>
              <dd className="text-base font-semibold text-chalk sm:text-lg">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </Section>
  );
}