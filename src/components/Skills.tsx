"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            Skills
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-text">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            I use modern tools and frameworks to build fast, reliable, and beautiful web applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl card hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: skill.color }}
                >
                  {skill.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">{skill.name}</h3>
                  <p className="text-xs text-text-muted">{skill.level}%</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-text-muted">{skill.description}</p>
              <div className="mt-4 h-1.5 rounded-full bg-border/40 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}