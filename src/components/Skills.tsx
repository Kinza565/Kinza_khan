"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & 3D",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"],
  },
  {
    title: "Backend & Database",
    items: ["FastAPI", "Node.js", "Neon DB", "PostgreSQL", "REST APIs", "MCP Tools"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git/GitHub", "Vercel", "Figma", "AI Coding CLI Tools"],
  },
  {
    title: "Core Capabilities",
    items: ["3D Landing Pages", "Responsive UI/UX", "Full-Stack Architecture"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[#0d0f17] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 via-primary/5 to-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Glowing pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cyan-400">
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              <h3 className="text-lg font-heading font-bold text-text tracking-tight mb-5 group-hover:text-cyan-400 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-text-muted group-hover:text-text group-hover:border-white/20 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
