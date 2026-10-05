"use client";

import { motion } from "framer-motion";
import { CalendarClock, MessageCircle, SearchCheck } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { WHATSAPP_NUMBER } from "@/lib/data";

const AUDIT_PREFILL =
  "I'd like to claim a free UI/Performance audit.\n\nWebsite URL: \nPages or features you'd like reviewed: ";

const WHATSAPP_AUDIT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Kinza, I'd like to claim a free UI/Performance audit for my website. Website URL: "
)}`;

/**
 * Pre-fills the uncontrolled #message textarea in Contact.tsx and scrolls the
 * contact section into view. #message has no value binding, so writing to the
 * DOM node here is safe and survives React re-renders.
 */
function claimFreeAudit() {
  const section = document.getElementById("contact");
  const message = document.getElementById("message");

  if (message instanceof HTMLTextAreaElement && !message.value.trim()) {
    message.value = AUDIT_PREFILL;
  }

  message?.focus({ preventScroll: true });
  section?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}

export default function LeadMagnet() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      aria-labelledby="lead-magnet-heading"
      className="group relative mb-8 overflow-hidden rounded-3xl border border-white/8 bg-navy/70 p-6 backdrop-blur-2xl sm:p-8"
    >
      {/* Emerald / indigo dual glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-[110px]"
      />
      {/* Hairline top edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
            <SearchCheck size={12} aria-hidden="true" />
            Free Consultation
          </span>

          <h2
            id="lead-magnet-heading"
            className="mt-5 text-xl font-bold leading-snug tracking-[-0.02em] text-chalk sm:text-2xl"
          >
            Not sure where to start with your project or AI integration?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
            Book a free 15-minute project discovery call or get a free
            UI/Performance audit for your existing website.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
          <Magnetic className="w-full">
            <button
              type="button"
              onClick={claimFreeAudit}
              className="group/audit inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-400"
            >
              <CalendarClock
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/audit:scale-110"
              />
              <span>Claim Free Audit</span>
            </button>
          </Magnetic>

          <Magnetic className="w-full" intensity={0.2}>
            <a
              href={WHATSAPP_AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-navy/70 px-5 py-3 text-sm font-semibold text-chalk transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/[0.07] hover:text-emerald-300"
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.aside>
  );
}