"use client";

import { motion } from "motion/react";
import { valuesSection, values } from "@/data/values";

export function CoreValues() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold-100 border border-gold-200 px-4 py-2 mb-6"
          >
            <span className="size-1.5 rounded-full bg-gold-500" />
            <span className="text-sm font-medium text-gold-700">
              {valuesSection.preHeadline}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight"
          >
            {valuesSection.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-muted leading-relaxed"
          >
            {valuesSection.subheading}
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-charcoal-200 rounded-3xl overflow-hidden border border-charcoal-200">
          {values.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-cream p-8 md:p-12 hover:bg-white transition-colors group"
            >
              <div className="flex items-start gap-5">
                <span className="text-sm font-mono text-gold-500 tracking-widest pt-2">
                  {value.label}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4 group-hover:text-gold-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
