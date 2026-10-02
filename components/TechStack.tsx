"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { SKILLS } from "@/lib/data";

export default function TechStack() {
  return (
    <Section 
      id="stack" 
      badge="Expertise"
      title="Technologies & Tools" 
      intro="A comprehensive toolkit for building modern, high-performance web applications and AI-driven solutions."
    >
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {SKILLS.map(({ title, icon: Icon, items }, index) => (
          <motion.div 
            key={title} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -3 }}
            className="glass glow-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/8 p-6 backdrop-blur-xl sm:p-7"
          >
            {/* Ambient Corner Light */}
            <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-crimson-500/[0.05] blur-2xl" />

            <div>
              {/* Header: Icon & Category Title */}
              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-xl border border-crimson-400/25 bg-navy/80 p-3 text-crimson-300 transition-colors duration-300 group-hover:border-crimson-400/35 group-hover:text-crimson-200">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-chalk transition-colors group-hover:text-crimson-200 sm:text-xl">
                  {title}
                </h3>
              </div>

              {/* Skill Pills */}
              <ul className="mt-7 flex flex-wrap gap-2">
                {items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-white/8 bg-navy/70 px-3.5 py-1.5 text-sm font-medium text-mist transition-colors hover:border-crimson-400/30 hover:text-crimson-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
