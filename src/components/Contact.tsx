"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks, testimonials } from "@/lib/data";
import { FiSend } from "react-icons/fi";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputClasses = (field: string) =>
    `w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b-2 text-text font-body text-[15px] placeholder-transparent focus:outline-none focus:ring-0 transition-colors duration-300 ${
      activeField === field
        ? "border-primary"
        : "border-border/50 hover:border-border"
    }`;

  const labelClasses = (field: string, value: string) =>
    `absolute left-0 transition-all duration-300 font-body pointer-events-none ${
      activeField === field || value
        ? "top-0 text-[11px] font-semibold tracking-wide uppercase"
        : "top-6 text-[15px] text-text-muted"
    } ${activeField === field ? "text-accent" : "text-text-muted"}`;

  return (
    <section id="contact" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="inline-block text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-accent mb-5">
              Get in Touch
            </span>
          </ScrollReveal>

          <TextReveal
            text="Let's Work Together"
            className="block text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold tracking-[-0.02em] text-text mb-5"
            delay={0.15}
          />

          <ScrollReveal delay={0.3}>
            <p className="text-text-muted font-body text-[15px] max-w-[520px] mx-auto leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              create something extraordinary together.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      required
                      placeholder="Your Name"
                      className={inputClasses("name")}
                    />
                    <label htmlFor="name" className={labelClasses("name", formState.name)}>
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      required
                      placeholder="Email Address"
                      className={inputClasses("email")}
                    />
                    <label htmlFor="email" className={labelClasses("email", formState.email)}>
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className={`${inputClasses("message")} resize-none`}
                  />
                  <label htmlFor="message" className={labelClasses("message", formState.message)}>
                    Your Message
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className="group relative flex items-center justify-center gap-3 px-10 py-5 text-[14px] font-body font-semibold tracking-wide uppercase text-white rounded-full btn-accent hover:shadow-soft-lg transition-shadow duration-500 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto mx-auto"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-lg">✓</span>
                        Message Sent
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2.5"
                      >
                        Send Message
                        <FiSend
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <p className="text-[15px] font-body text-text-muted leading-[1.8]">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. I typically respond
                  within 24 hours.
                </p>

                <div className="p-6 rounded-2xl card">
                  <p className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-text-muted mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:kinzasardar545@gmail.com"
                    className="text-lg font-heading font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    kinzasardar545@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-text-muted mb-4">
                    Connect
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-2xl card flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                        aria-label={link.name}
                      >
                        <link.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[14px] font-body text-text-muted italic leading-relaxed">
                    &ldquo;{testimonials[0].quote}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-[13px] font-body font-semibold text-text">
                      {testimonials[0].author}
                    </p>
                    <p className="text-[11px] font-body text-text-muted">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}