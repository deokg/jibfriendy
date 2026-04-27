"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { featuredSection, projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-narrow">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-gold-100 border border-gold-200 px-4 py-2 mb-6"
            >
              <span className="size-1.5 rounded-full bg-gold-500" />
              <span className="text-sm font-medium text-gold-700">
                {featuredSection.preHeadline}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight"
            >
              {featuredSection.heading}
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted leading-relaxed"
            >
              {featuredSection.subheading}
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-charcoal-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-charcoal-900">
                    {project.category}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs text-muted uppercase tracking-wider mb-4">
                  <div>
                    <div className="text-charcoal-400 mb-1">위치</div>
                    <div className="text-charcoal-900 font-medium normal-case">
                      {project.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-charcoal-400 mb-1">연도</div>
                    <div className="text-charcoal-900 font-medium">
                      {project.year}
                    </div>
                  </div>
                  <div>
                    <div className="text-charcoal-400 mb-1">규모</div>
                    <div className="text-charcoal-900 font-medium normal-case text-[11px]">
                      {project.scale.split(" / ")[0]}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all">
                  프로젝트 보기
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* All projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-base font-semibold text-charcoal-900 border-b-2 border-charcoal-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
          >
            전체 포트폴리오 보기
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
