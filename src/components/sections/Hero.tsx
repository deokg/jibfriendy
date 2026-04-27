"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { hero } from "@/data/hero";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image (영상으로 추후 교체 가능) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${hero.backgroundImage}')`,
        }}
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/50 to-charcoal-950/80" />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-4 py-2 mb-8"
        >
          <span className="size-1.5 rounded-full bg-gold-400" />
          <span className="text-sm font-medium text-white">
            {hero.preHeadline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight"
        >
          {hero.heading.line1}
          <br />
          {hero.heading.line2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-12"
        >
          <Link
            href={hero.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 px-8 py-4 text-base md:text-lg font-semibold text-white transition shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-0.5"
          >
            {hero.cta.label}
            <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
