"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { navLinks } from "@/lib/data";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] gradient-bg origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-heading font-bold">
            <span className="gradient-text">Kinza</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-full btn-accent hover:shadow-soft transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-muted hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass border-t border-white/20 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-3 text-sm font-semibold text-white text-center rounded-full btn-accent"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}