"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the drawer on Escape and collapse it when the desktop nav takes over.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-4xl items-center justify-between rounded-[22px] border transition-all duration-500 ease-out ${
          scrolled || open
            ? "h-14 border-white/10 bg-navy/85 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_40px_-28px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:px-5"
            : "h-16 border-white/[0.06] bg-navy/45 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md sm:px-6"
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <a href="#top" className="group flex shrink-0 items-center gap-2.5">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-crimson-500" />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-chalk transition-colors duration-300 group-hover:text-crimson-200">
            Dev.Kinza
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-crimson-500/12 text-crimson-200"
                      : "text-mist hover:bg-white/[0.04] hover:text-chalk"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Call to Action Button */}
        <Magnetic className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-crimson-400/40 bg-crimson-500 px-4 py-2 text-[12px] font-bold text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-400"
          >
            <span>Let&rsquo;s Talk</span>
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Magnetic>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="-mr-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-chalk transition-colors duration-300 hover:border-crimson-400/40 hover:text-crimson-200 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-4xl origin-top overflow-hidden rounded-[20px] border border-white/10 bg-navy/95 p-2 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl lg:hidden"
            id="mobile-nav"
          >
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.href ? "true" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      active === l.href
                        ? "bg-crimson-500/12 text-crimson-200"
                        : "text-mist hover:bg-white/[0.04] hover:text-chalk"
                    }`}
                  >
                    {l.label}
                    {active === l.href && (
                      <span className="h-1 w-1 rounded-full bg-crimson-400" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-crimson-500 py-3 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-crimson-400"
                >
                  <span>Let&rsquo;s Talk</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
