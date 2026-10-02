"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#0d0f17] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 via-primary/5 to-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Glowing pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cyan-400">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text">
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span> Together
          </h2>

          <p className="mt-5 text-text-muted max-w-2xl mx-auto text-[15px] leading-relaxed font-light">
            Available for freelance projects, 3D web experiences, and full-stack development.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
              className="w-full py-3.5 text-[14px] font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>✓</span> Message Sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Send Message
                    <FiSend size={15} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
