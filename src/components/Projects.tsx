"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-slate-900/70 hover:border-cyan-500/40 hover:shadow-[0_10px_32px_rgba(34,211,238,0.12)]"
    >
      {/* Project Image / Preview */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-accent/5 z-10 group-hover:opacity-0 transition-opacity duration-500" />

        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-alt to-surface">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
              style={{
                background: project.accent,
                boxShadow: `0 24px 80px ${project.accent}30`,
              }}
            >
              {project.number}
            </div>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-[0.15em] uppercase text-text">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-text tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-text-muted leading-relaxed font-light line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
          >
            Live Demo
            <FiArrowUpRight size={14} />
          </motion.a>

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full border border-white/10 text-text-muted hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
            >
              <FiGithub size={14} />
              GitHub
              <FiArrowUpRight size={14} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-[#0d0f17] overflow-hidden">
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
              My Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text">
            Featured <span className="gradient-text">Works</span>
          </h2>

          <p className="mt-5 text-text-muted max-w-2xl mx-auto text-[15px] leading-relaxed font-light">
            A selection of projects featuring interactive 3D, modern web apps, and clean UI.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
