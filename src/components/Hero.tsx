"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { socialLinks } from "@/lib/data";
import { LuExternalLink } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-float" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/60 border border-primary/20 shadow-soft text-sm font-medium text-secondary"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-tight"
        >
          Hi, I&apos;m <span className="gradient-text">Kinza</span>
          <br />
          <span className="text-text-muted font-light">Web Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto"
        >
          I build modern, fast & scalable websites using Next.js & Tailwind CSS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-4 text-base font-semibold text-white rounded-full btn-accent hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              View My Work
              <LuExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-base font-semibold text-secondary rounded-full border-2 border-secondary/20 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
          <a
            href="/Kinza Khan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 text-base font-semibold text-white rounded-full btn-accent hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              View CV
              <LuExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="/Kinza Khan.pdf"
            download="Kinza Khan.pdf"
            className="px-8 py-4 text-base font-semibold text-secondary rounded-full border-2 border-secondary/20 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}