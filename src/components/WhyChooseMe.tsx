"use client";

import { motion } from "framer-motion";
import { whyChooseMe } from "@/lib/data";

export default function WhyChooseMe() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            Why Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-text">
            Why Choose <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            I don&apos;t just build websites — I craft digital experiences that drive results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl card hover:border-accent/30 hover:shadow-soft transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="mt-3 text-sm text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}