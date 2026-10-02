"use client";

import { motion } from "framer-motion";
import { whyChooseMe } from "@/lib/data";

const LuxuryIcon = ({ icon, index }: { icon: string; index: number }) => {
  const colors = ["from-primary to-primary-dark", "from-accent to-accent-dark", "from-primary-light to-primary", "from-accent-light to-accent"];
  
  return (
    <div className="relative">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center shadow-lg`}>
        <span className="text-2xl filter drop-shadow-sm">{icon}</span>
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/20 rounded-full blur-sm" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary/20 rounded-full blur-sm" />
    </div>
  );
};

export default function WhyChooseMe() {
  return (
    <section className="relative py-28 sm:py-36 bg-dark overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label justify-center mb-6">04 / Why Me</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text tracking-tight">
            Why Choose <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-5 text-text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-light">
            I don&apos;t just build websites — I craft digital experiences that drive results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl glass hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-primary/30 rounded-tr-3xl" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <LuxuryIcon icon={item.icon} index={index} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-text tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Animated bottom line */}
                <div className="mt-6 h-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-border shadow-soft">
            <span className="text-accent text-sm">✦</span>
            <span className="text-sm text-text-muted font-medium">
              Ready to start your project?
            </span>
            <a 
              href="#contact" 
              className="text-sm font-semibold text-accent hover:text-accent-light transition-colors"
            >
              Let&apos;s talk →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
