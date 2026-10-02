"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { JOURNEY } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      badge="Journey"
      title="Learning & Development Journey"
      intro="A self-directed path through modern web development, built by shipping real projects rather than collecting certificates. Each stage below reflects a real shift in what I can build and how I build it."
    >
      <ol className="relative space-y-6">
        {/* Spine */}
        <span
          aria-hidden="true"
          className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-crimson-400/45 via-crimson-500/12 to-transparent md:left-[31px]"
        />

        {JOURNEY.map((stage, index) => (
          <motion.li
            key={stage.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            className="group relative flex gap-5 sm:gap-6"
          >
            {/* Node */}
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-crimson-400/25 bg-navy text-crimson-300 transition-all duration-300 group-hover:border-crimson-400/40 group-hover:text-crimson-200 md:h-16 md:w-16">
              <stage.icon size={22} aria-hidden="true" />
            </span>

            {/* Card */}
            <div className="glass glow-card min-w-0 flex-1 rounded-2xl border border-white/8 p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="rounded-full border border-crimson-400/25 bg-crimson-400/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-crimson-400">
                  {stage.phase}
                </span>
                <h3 className="text-lg font-semibold text-chalk transition-colors group-hover:text-crimson-200 sm:text-xl">
                  {stage.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                {stage.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {stage.topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/8 bg-navy/70 px-2.5 py-1 text-xs font-medium text-mist transition-colors hover:border-crimson-400/30 hover:text-crimson-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}