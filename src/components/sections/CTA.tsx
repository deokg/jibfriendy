"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-gold-500 relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="container-narrow relative py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.3em] text-white/90 mb-5"
          >
            START YOUR PROJECT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            지금 디벨로퍼와 직접 상담하세요
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/90 leading-relaxed"
          >
            토지·예산·운영 계획만 알려주시면 디벨로퍼 관점의 분석과
            <br className="hidden md:block" /> 구체적인 시공 견적을 무료로 드립니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-900 hover:bg-charcoal-950 px-8 py-4 text-base md:text-lg font-semibold text-white transition shadow-lg"
            >
              무료 상담 신청
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur border border-white/40 px-8 py-4 text-base md:text-lg font-semibold text-white transition"
            >
              포트폴리오 보기
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
