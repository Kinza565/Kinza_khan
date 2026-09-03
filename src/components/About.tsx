"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const stats = [
    { number: "15+", label: "Projects" },
    { number: "10+", label: "Clients" },
    { number: "2+", label: "Years Exp." },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 p-1">
              <div className="w-full h-full rounded-3xl bg-surface flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden gradient-bg flex items-center justify-center shadow-soft-lg">
                    <Image
                      src="/images/Kinza developer.png"
                      alt="Kinza"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="mt-6 text-lg font-semibold text-text">Kinza</p>
                  <p className="text-sm text-text-muted">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              About Me
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-text">
              Crafting Digital Experiences That <span className="gradient-text">Matter</span>
            </h2>
            <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
              <p>
                I&apos;m a passionate web developer specializing in building modern, 
                high-performance web applications. With expertise in <span className="text-text font-medium">Next.js</span>,{" "}
                <span className="text-text font-medium">TypeScript</span>, and{" "}
                <span className="text-text font-medium">Tailwind CSS</span>, 
                I transform ideas into beautiful, functional digital products.
              </p>
              <p>
                My approach focuses on writing clean, scalable code while ensuring 
                every project delivers an exceptional user experience. I believe 
                that great websites should not only look stunning but also perform flawlessly.
              </p>
              <p>
                Whether you need a sleek portfolio, a robust e-commerce platform, 
                or a custom web application — I bring your vision to life with 
                precision and creativity.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/Kinza Khan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Kinza Khan CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full btn-accent hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Download CV</span>
                <FiDownload size={16} />
              </a>
            </div>

            <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}