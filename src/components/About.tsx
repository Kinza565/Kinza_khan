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
    <section id="about" className="relative py-28 sm:py-36 bg-dark overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="section-label">01 / About</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual identity card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-border to-accent/20">
              <div className="relative rounded-3xl bg-card p-8 sm:p-10">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
                  <Image
                    src="/images/Kinza developer.png"
                    alt="Kinza"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent rounded-2xl" />
                </div>
                
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text tracking-tight">Kinza</h3>
                    <p className="text-sm text-text-muted mt-1 font-light tracking-wide">Web Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-primary/60 tracking-wider uppercase">
                      Portfolio
                    </p>
                    <p className="text-[10px] font-mono text-text-muted/40 tracking-wider mt-0.5">
                      2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border border-accent/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="section-label mb-6">About Me</div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text tracking-tight leading-[1.15]">
              Crafting Digital Experiences That{" "}
              <span className="gradient-text">Matter</span>
            </h2>
            
            <div className="mt-8 space-y-5 text-text-muted leading-[1.8] text-[15px]">
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

            <div className="mt-10">
              <a
                href="/Kinza Khan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Kinza Khan CV.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[13px] font-semibold text-white rounded-full btn-accent hover:shadow-soft btn-sweep transition-all duration-400"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Download CV
                  <FiDownload size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </a>
            </div>

            <div ref={statsRef} className="mt-14 grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-text-muted mt-2 tracking-wide uppercase font-medium">
                    {stat.label}
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 -right-4 w-[1px] h-8 bg-border -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
