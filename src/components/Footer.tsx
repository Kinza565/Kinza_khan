"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-20 pb-20 border-b border-white/[0.06]">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white mb-6">
            Have a project
            <br />
            <span className="gradient-text-subtle">in mind?</span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-md mx-auto mb-8">
            I turn ideas into modern, high-performing websites.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-9 py-4 text-[14px] font-body font-semibold tracking-wide uppercase text-white rounded-full btn-accent hover:shadow-soft-lg transition-shadow duration-300"
          >
            Start a Project
            <span className="text-lg">→</span>
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-heading font-bold gradient-text-subtle">
              Kinza<span className="text-gray-500">.</span>
            </span>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-xl bg-secondary border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-body tracking-wide text-gray-500">
            &copy; {currentYear} Kinza. All rights reserved.
          </p>
          <p className="text-[11px] font-body tracking-wide text-gray-500">
            Designed & built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}