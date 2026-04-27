"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { mediaSection, mediaQuotes } from "@/data/media";

export function Media() {
  return (
    <section className="bg-charcoal-900 py-20 md:py-28 text-white">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.3em] text-gold-400 mb-5"
          >
            {mediaSection.preHeadline}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            {mediaSection.heading}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {mediaQuotes.map((q, i) => (
            <motion.a
              key={q.publication}
              href={q.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-8 md:p-10 rounded-2xl border border-white/10 hover:border-gold-500/50 bg-charcoal-800/50 hover:bg-charcoal-800 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-lg md:text-xl font-bold text-gold-400">
                    {q.publication}
                  </div>
                  <div className="text-xs text-white/50 mt-1">{q.sub} · {q.year}</div>
                </div>
                <ExternalLink className="size-5 text-white/30 group-hover:text-gold-400 transition-colors" />
              </div>

              <blockquote className="text-lg md:text-xl text-white/95 leading-relaxed font-medium">
                <span className="text-gold-500 text-3xl leading-none">"</span>
                {q.quote}
                <span className="text-gold-500 text-3xl leading-none">"</span>
              </blockquote>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
