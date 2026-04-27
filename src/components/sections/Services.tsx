"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { servicesSection, services } from "@/data/services";

export function Services() {
  return (
    <section className="bg-charcoal-900 py-20 md:py-32 text-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 border border-gold-500/30 px-4 py-2 mb-6"
          >
            <span className="size-1.5 rounded-full bg-gold-400" />
            <span className="text-sm font-medium text-gold-300">
              {servicesSection.preHeadline}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            {servicesSection.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/70 leading-relaxed"
          >
            {servicesSection.subheading}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl bg-charcoal-800 border border-white/10 hover:border-gold-500/50 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
                <div className="absolute top-5 left-5 text-xs font-mono text-gold-400 tracking-widest">
                  {service.number}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/65 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
