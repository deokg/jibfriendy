"use client";

import { motion } from "motion/react";

const photos = [
  {
    src: "/images/lecture/classroom-1.jpg",
    caption: "부스페이스 강의장 — '상권별 토지매입 전략' 세미나",
  },
  {
    src: "/images/lecture/field-trip-1.jpg",
    caption: "수강생 현장 견학 — 뷰레스트풀빌라 운영 사례",
  },
  {
    src: "/images/lecture/classroom-2.jpg",
    caption: "건축 디벨로퍼 강의 — 강사 소개 슬라이드",
  },
  {
    src: "/images/lecture/classroom-3.jpg",
    caption: "꼬마빌딩 신축 강의 — 대규모 강의장",
  },
  {
    src: "/images/lecture/classroom-4.jpg",
    caption: "수강생 워크숍 — 사업성 분석 실습",
  },
];

export function LectureGallery() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5">
            FIELD MOMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
            강의·견학 현장 스냅
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
            슬라이드 강의에서 끝나지 않습니다. 운영 중인 풀빌라·펜션 현장을
            함께 둘러보며 디벨로퍼의 시각을 직접 체험합니다.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid mb-4 md:mb-6 rounded-2xl overflow-hidden bg-charcoal-100 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="p-4 md:p-5 bg-white text-sm text-charcoal-800 leading-relaxed border-t border-charcoal-200">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
