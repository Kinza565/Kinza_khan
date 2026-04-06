"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const letters = "KINZA".split("");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark grain"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo */}
        <div className="flex items-center gap-1 overflow-hidden">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0, rotateX: -45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl sm:text-6xl font-heading font-bold text-white inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4, ease: "backOut" }}
            className="text-5xl sm:text-6xl font-heading font-bold text-primary inline-block"
          >
            .
          </motion.span>
        </div>

        {/* Animated line */}
        <div className="relative w-48 h-[2px] overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-dark-muted" />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-xs font-body tracking-[0.35em] uppercase text-text-muted"
        >
          Crafting experience
        </motion.p>
      </div>
    </motion.div>
  );
}
