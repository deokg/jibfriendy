import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[currentIndex + 1] ?? projects[0];
  const prev =
    projects[currentIndex - 1] ?? projects[projects.length - 1];

  return (
    <>
      <Navbar />

      {/* Hero with project image */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-charcoal-900 text-white">
        <div className="container-narrow">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors mb-8"
          >
            <ArrowLeft className="size-4" />
            전체 포트폴리오로
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 border border-gold-500/30 px-4 py-2 mb-6">
            <span className="size-1.5 rounded-full bg-gold-400" />
            <span className="text-sm font-medium text-gold-300">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] max-w-4xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative h-[60vh] md:h-[70vh] bg-charcoal-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Project Info */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-gold-600 tracking-widest mb-3">
                <MapPin className="size-3.5" />
                LOCATION
              </div>
              <div className="text-base md:text-lg font-semibold text-charcoal-900">
                {project.location}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-gold-600 tracking-widest mb-3">
                <Calendar className="size-3.5" />
                YEAR
              </div>
              <div className="text-base md:text-lg font-semibold text-charcoal-900">
                {project.year}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-gold-600 tracking-widest mb-3">
                <Ruler className="size-3.5" />
                SCALE
              </div>
              <div className="text-base md:text-lg font-semibold text-charcoal-900">
                {project.scale}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      {project.body && (
        <section className="bg-cream pb-16 md:pb-24">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-charcoal-900 leading-relaxed">
              {project.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.isCategory && (
        <section className="bg-cream pb-16 md:pb-24">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto p-8 md:p-10 bg-charcoal-900 text-white rounded-2xl">
              <div className="text-sm font-mono tracking-widest text-gold-400 mb-3">
                NOTE
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                상세 자료는 상담 시 공유드립니다
              </h3>
              <p className="text-base text-white/85 leading-relaxed">
                개별 프로젝트의 임대 수익 데이터·평면도·견적 등 구체적인 자료는
                상담 시 1:1로 공유드립니다. 비슷한 프로젝트를 검토 중이시면
                편하게 문의 주세요.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white hover:bg-gold-600 transition"
              >
                상담 신청하기
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Gallery — Masonry layout (각 사진의 원본 비율 유지) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-cream pb-16 md:pb-24">
          <div className="container-narrow">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-6">
              GALLERY
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
              {project.gallery.map((src, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-4 md:mb-6 rounded-2xl overflow-hidden bg-charcoal-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.title} 갤러리 ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next nav */}
      <section className="bg-charcoal-900 text-white py-12 md:py-16 border-t border-white/10">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {prev && (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group flex items-center gap-4 p-6 rounded-2xl border border-white/10 hover:border-gold-500/50 transition-all"
              >
                <ArrowLeft className="size-5 text-gold-400 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                    이전 프로젝트
                  </div>
                  <div className="text-base md:text-lg font-semibold group-hover:text-gold-300">
                    {prev.title}
                  </div>
                </div>
              </Link>
            )}
            {next && (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group flex items-center gap-4 p-6 rounded-2xl border border-white/10 hover:border-gold-500/50 transition-all md:text-right md:justify-end"
              >
                <div className="md:order-first md:flex-1">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                    다음 프로젝트
                  </div>
                  <div className="text-base md:text-lg font-semibold group-hover:text-gold-300">
                    {next.title}
                  </div>
                </div>
                <ArrowRight className="size-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
