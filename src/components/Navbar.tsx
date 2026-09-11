"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { navLinks } from "@/lib/data";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] z-[60] origin-left"
        style={{ 
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, transparent, var(--color-primary), var(--color-accent), transparent)"
        }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-heading font-bold tracking-tight relative group"
          >
            <span className="gradient-text">Kinza</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full opacity-60" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[13px] font-medium text-text-muted hover:text-text transition-colors duration-300 group py-2"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full opacity-70" />
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative p-2 rounded-full text-text-muted hover:text-text hover:bg-white/5 transition-all duration-300"
            >
              {theme === "light" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <a
              href="/Kinza Khan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kinza Khan CV.pdf"
              className="relative px-5 py-2.5 text-[13px] font-semibold text-text-muted hover:text-text rounded-full border border-border hover:border-primary/30 hover:bg-white/5 transition-all duration-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="relative px-5 py-2.5 text-[13px] font-semibold text-white rounded-full btn-accent hover:shadow-soft btn-sweep transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden glass border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="text-base font-medium text-text-muted hover:text-text transition-colors py-3 border-b border-border/30 last:border-0"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => { toggleTheme(); setMobileOpen(false); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="flex items-center gap-3 text-base font-medium text-text-muted hover:text-text transition-colors py-3"
                >
                  {theme === "light" ? <FiSun size={18} /> : <FiMoon size={18} />}
                  {theme === "light" ? "Light Mode" : "Dark Mode"}
                </motion.button>
                <motion.a
                  href="/Kinza Khan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Kinza Khan CV.pdf"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="px-5 py-3 text-sm font-semibold text-text-muted text-center rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 mt-2"
                >
                  Download CV
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-3 px-5 py-3.5 text-sm font-semibold text-white text-center rounded-full btn-accent"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
