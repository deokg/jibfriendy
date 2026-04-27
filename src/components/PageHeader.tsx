"use client";

import { motion } from "motion/react";

type PageHeaderProps = {
  preHeadline?: string;
  heading: string;
  description?: string;
};

export function PageHeader({
  preHeadline,
  heading,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-charcoal-900 text-white overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(184,149,106,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 100%, rgba(31,41,55,0.6) 0%, transparent 50%)",
        }}
      />

      <div className="container-narrow relative">
        {preHeadline && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.3em] text-gold-400 mb-5"
          >
            {preHeadline}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] max-w-4xl"
        >
          {heading}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
