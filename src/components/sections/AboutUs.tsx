"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { about, stats } from "@/data/about";
import { cn } from "@/lib/utils";

export function AboutUs() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-narrow">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-gold-100 border border-gold-200 px-4 py-2 mb-6"
            >
              <span className="size-1.5 rounded-full bg-gold-500" />
              <span className="text-sm font-medium text-gold-700">
                {about.preHeadline} — {about.subPreHeadline}
              </span>
            </motion.div>

            {about.body.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="text-xl md:text-2xl text-charcoal-900 leading-relaxed mb-5 last:mb-0 font-medium"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href={about.cta.href}
                className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal-900 px-7 py-3.5 text-base font-semibold text-charcoal-900 transition hover:bg-charcoal-900 hover:text-white"
              >
                {about.cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-charcoal-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-left"
            >
              <div className="h-px w-12 bg-gold-500 mb-5" />
              <div
                className={cn(
                  "text-5xl md:text-6xl font-bold tracking-tight mb-3",
                  stat.emphasis ? "text-gold-500" : "text-charcoal-900"
                )}
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
