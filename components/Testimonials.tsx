"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Section from "@/components/Section";

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatarUrl: string;
  rating: number;
}

/**
 * PLACEHOLDER CONTENT — sample copy written to demonstrate the layout.
 * Swap every entry for a real, attributable quote before this section goes live.
 */
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Raza",
    role: "Founder, B2B Export Co.",
    feedback:
      "Kinza rebuilt our export site and had it live in days, not weeks. The AI-assisted content pipeline she wired in cut our product updates from an afternoon to a few minutes, and she handled every follow-up without me chasing her.",
    avatarUrl: "https://i.pravatar.cc/160?img=12",
    rating: 5,
  },
  {
    name: "Sana Iqbal",
    role: "Lead Educator",
    feedback:
      "I expected a static page and got a real platform. She built the school management system end to end — enrollment, attendance, results, parent communication — and explained every part of it so my team could actually maintain it.",
    avatarUrl: "https://i.pravatar.cc/160?img=47",
    rating: 5,
  },
  {
    name: "Daniel Koh",
    role: "Product Manager",
    feedback:
      "Fast, decisive, and genuinely full-stack. Kinza shipped our rental booking flow with Stripe wired in properly, then iterated on the UX the same week based on our internal feedback. The rare contractor who treats a deadline as a starting line.",
    avatarUrl: "https://i.pravatar.cc/160?img=68",
    rating: 5,
  },
];

function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-navy sm:h-14 sm:w-14">
      <span
        aria-hidden="true"
        className="absolute text-sm font-semibold tracking-wide text-crimson-300"
      >
        {initialsOf(testimonial.name)}
      </span>
      <Image
        src={testimonial.avatarUrl}
        alt=""
        width={56}
        height={56}
        unoptimized
        className="relative h-full w-full object-cover"
      />
    </span>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={14}
          aria-hidden="true"
          className={
            index < rating ? "text-crimson-400" : "text-white/15"
          }
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      badge="Testimonials"
      title="Client & Collaborator Feedback"
      intro="What people say about working with me."
    >
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.li
            key={testimonial.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-navy/60 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-crimson-400/30 hover:bg-navy/85 hover:shadow-[0_24px_50px_-32px_rgba(216,30,54,0.45),0_18px_40px_-30px_rgba(0,0,0,0.9)] sm:p-7"
          >
            {/* Crimson edge wash revealed on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-crimson-400/70 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            />

            <div className="flex items-start justify-between gap-4">
              <RatingStars rating={testimonial.rating} />
              <Quote
                size={22}
                aria-hidden="true"
                className="shrink-0 text-crimson-400/25 transition-colors duration-300 group-hover:text-crimson-400/50"
              />
            </div>

            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-mist sm:text-[15px]">
              <p>{testimonial.feedback}</p>
            </blockquote>

            <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
              <Avatar testimonial={testimonial} />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-chalk">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-mist">{testimonial.role}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}