"use client";

import { motion } from "framer-motion";
import Laptop3D from "./DevScene3D";

const techStack = [
  "Next.js",
  "Tailwind",
  "Three.js",
  "TypeScript",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0f17]">
      {/* Ambient neon glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-primary/5 to-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* 3-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                Available for Projects
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-text leading-[1.1]">
              <span className="gradient-text">KINZA</span>
            </h1>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text/90 leading-[1.1]">
              Creative Web Developer
            </h2>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed font-light max-w-md">
              Building immersive digital experiences with modern technologies and clean, scalable code.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-text rounded-full border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>

          {/* Center Column - 3D Laptop Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <Laptop3D />
          </motion.div>

          {/* Right Column - Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-text-muted hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-3">
                  Specialization
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-sm text-text-muted">3D Web Experiences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm text-text-muted">Interactive UI/UX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-text-muted">Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
