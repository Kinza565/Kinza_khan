"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  badge?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  intro,
  badge,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-24 lg:py-28 ${className}`}
    >
      
      {/* Background Ambient Glow Accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-full max-w-4xl -translate-x-1/2 rounded-full bg-crimson-500/[0.04] blur-[130px]" />

      {/* Header Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="flex flex-col items-start"
      >
        {/* Optional Section Badge */}
        {badge && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-crimson-400/25 bg-crimson-400/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-300">
            <span className="h-1 w-1 rounded-full bg-crimson-400" aria-hidden="true" />
            {badge}
          </span>
        )}

        {/* Title with Premium Polish */}
        <h2
          id={`${id}-heading`}
          className="max-w-4xl text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-chalk sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>

        {/* Intro Subtitle */}
        {intro && (
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
            {intro}
          </p>
        )}
      </motion.div>

      {/* Section Body */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="mt-12 sm:mt-16"
      >
        {children}
      </motion.div>
    </section>
  );
}
