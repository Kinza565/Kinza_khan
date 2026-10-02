"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <Section 
      id="services" 
      badge="Capabilities"
      title="Professional Services" 
      intro="Specialized development services tailored to help businesses build robust digital products and leverage modern AI."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {SERVICES.map(({ title, text, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -3 }}
            className="glass glow-card group relative flex gap-5 overflow-hidden rounded-[1.5rem] border border-white/8 p-6 backdrop-blur-xl sm:gap-6 sm:p-7"
          >
            {/* Hairline accent */}
            <span
              aria-hidden="true"
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-crimson-400/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            {/* Hover Ambient Light */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-crimson-500/[0.05] blur-2xl" />

            {/* Icon Box */}
            <span className="h-fit shrink-0 rounded-2xl border border-crimson-400/25 bg-navy/80 p-3.5 text-crimson-300 transition-all duration-300 group-hover:border-crimson-400/35 group-hover:text-crimson-200 sm:p-4">
              <Icon size={24} aria-hidden="true" />
            </span>

            {/* Service Details */}
            <div className="relative z-10 min-w-0">
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-chalk transition-colors group-hover:text-crimson-200 sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
