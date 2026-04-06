"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative perspective-1000"
    >
      <div
        className={`relative rounded-3xl border border-border bg-white overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 ${
          isEven ? "lg:flex" : "lg:flex lg:flex-row-reverse"
        }`}
      >
        <div className="relative h-64 sm:h-72 lg:h-auto lg:w-[45%] overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${project.accent}08 0%, ${project.accent}18 100%)`,
            }}
          />
          <div className="relative h-full flex items-center justify-center p-10">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
              style={{
                background: project.accent,
                boxShadow: `0 20px 60px ${project.accent}30`,
              }}
            >
              {project.number}
            </motion.div>
          </div>
        </div>

        <div className="lg:w-[55%] p-8 sm:p-10 flex flex-col justify-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: project.accent }}
          >
            <span className="w-5 h-px" style={{ background: project.accent }} />
            {project.category}
          </span>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-text group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-text-muted leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-surface text-text-muted border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all btn-accent"
              style={{
                background: `linear-gradient(135deg, ${project.accent}, ${project.accent}dd)`,
              }}
            >
              <FiArrowUpRight size={14} />
              Live Demo
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full border-2 border-border/60 text-text-muted hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
            >
              <FiGithub size={14} />
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-text">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            A selection of projects that showcase my skills in building modern
            web applications with attention to detail and performance.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}