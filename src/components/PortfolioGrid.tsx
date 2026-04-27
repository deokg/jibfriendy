"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { projects, projectGroups, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterKey = keyof typeof projectGroups;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered: Project[] =
    filter === "all"
      ? projects
      : projects.filter((p) => p.group === projectGroups[filter].group);

  const counts: Record<FilterKey, number> = {
    all: projects.length,
    lodging: projects.filter((p) => p.group === "lodging").length,
    residential: projects.filter((p) => p.group === "residential").length,
    commercial: projects.filter((p) => p.group === "commercial").length,
  };

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {(Object.keys(projectGroups) as FilterKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
              filter === key
                ? "bg-charcoal-900 text-white shadow-lg"
                : "bg-white text-charcoal-900 border border-charcoal-200 hover:border-gold-500"
            )}
          >
            {projectGroups[key].label}
            <span
              className={cn(
                "ml-2 text-xs",
                filter === key ? "text-gold-300" : "text-muted"
              )}
            >
              {counts[key]}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="block relative overflow-hidden rounded-2xl bg-white border border-charcoal-200 hover:border-gold-500 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  {project.isCategory && (
                    <div className="absolute top-4 right-4 bg-charcoal-900/80 backdrop-blur text-xs text-white/90 px-3 py-1.5 rounded-full">
                      사례 시리즈
                    </div>
                  )}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-charcoal-900">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span>{project.location.split(" ").slice(0, 2).join(" ")}</span>
                    <span className="text-gold-500">·</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold-600 group-hover:gap-3 transition-all">
                    상세 보기
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          해당 카테고리의 프로젝트가 곧 추가됩니다.
        </div>
      )}
    </div>
  );
}
