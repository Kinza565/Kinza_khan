"use client";

import { motion } from "framer-motion";
import { socialLinks, freelanceLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 sm:py-28 overflow-hidden bg-[#0d0f17]">
      {/* Top glossy rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text mb-6"
          >
            Have a project
            <br />
            <span className="gradient-text-subtle">in mind?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-muted font-body text-base max-w-md mx-auto mb-10 font-light"
          >
            I turn ideas into modern, high-performing websites.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2.5 px-9 py-4 text-[14px] font-body font-semibold tracking-wide uppercase text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </motion.a>
        </div>

        {/* Glossy rule */}
        <div className="border-t border-white/10 mt-20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left - Brand */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-heading font-bold gradient-text-subtle">
                Kinza<span className="text-text-muted">.</span>
              </span>
              
              {/* Available badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-emerald-400">
                  Available for Work
                </span>
              </div>
            </div>

            {/* Center/Right - Social & Freelance */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={14} />
                  {link.name}
                </motion.a>
              ))}
              
              <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
              
              {freelanceLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={14} />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-body tracking-wide text-text-muted">
              &copy; {currentYear} Kinza. All rights reserved.
            </p>
            <p className="text-[11px] font-body tracking-wide text-text-muted">
              Designed & built with Next.js, Three.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
