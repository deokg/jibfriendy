"use client";

import { motion } from "motion/react";
import { processSection, processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5"
          >
            {processSection.preHeadline}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight"
          >
            {processSection.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-muted leading-relaxed"
          >
            {processSection.subheading}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line (decorative, desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white rounded-2xl p-8 md:p-10 border border-charcoal-200"
            >
              <div className="size-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm mb-6 shadow-lg shadow-gold-500/30">
                {step.step}
              </div>
              <div className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                {step.role}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-charcoal-900 mb-4">
                {step.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
