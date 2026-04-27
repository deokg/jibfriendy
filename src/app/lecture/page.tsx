import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { LectureGallery } from "@/components/sections/LectureGallery";
import {
  lectureFeatures,
  curriculum,
  lectureFAQ,
} from "@/data/lecture";
import { lectureInstitutions } from "@/data/lectureCredentials";

export const metadata: Metadata = {
  title: "강의 프로그램 — 디벨로퍼가 직접 가르치는 수익형 부동산",
  description:
    "건국대 평생교육원·월천재테크 등에서 출강 50회+, 누적 수강생 1,500명+. 11동의 실전 사례로 가르치는 디벨로퍼·시공·운영 통합 커리큘럼.",
};

export default function LecturePage() {
  return (
    <>
      <Navbar />

      <PageHeader
        preHeadline="LECTURE"
        heading="이론이 아닌 실전, 11동의 데이터로 가르칩니다"
        description="건국대 평생교육원·월천재테크 등에서 출강 50회+, 누적 수강생 1,500명+. 디벨로퍼이자 시공사가 직접 진행하는 통합 커리큘럼."
      />

      {/* Features */}
      <section className="bg-cream py-20 md:py-32">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5">
              WHY THIS LECTURE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 leading-tight">
              왜 이 강의가 다른가
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {lectureFeatures.map((feat) => (
              <div
                key={feat.label}
                className="bg-white p-8 md:p-10 rounded-2xl border border-charcoal-200"
              >
                <div className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                  {feat.label}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal-900 mb-4">
                  {feat.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-charcoal-900 text-white py-20 md:py-32">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-400 mb-5">
              CURRICULUM
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              세 가지 모듈, 한 사람이 가르칩니다
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
              디벨로퍼가 입지를 가르치고, 시공사가 시공을 가르치고, 운영자가 운영을 가르칩니다.
              한 사람이 세 가지 역할을 모두 한 경험에서 가르침의 연결성이 나옵니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {curriculum.map((mod) => (
              <div
                key={mod.module}
                className="bg-charcoal-800/60 border border-white/10 rounded-2xl p-8 md:p-10 hover:border-gold-500/50 transition-colors"
              >
                <div className="text-xs font-mono tracking-[0.2em] text-gold-400 mb-3">
                  {mod.module}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gold-300">
                  {mod.title}
                </h3>
                <div className="text-xs text-white/50 mb-6 uppercase tracking-wider">
                  {mod.duration}
                </div>
                <ul className="space-y-3">
                  {mod.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm md:text-base text-white/85"
                    >
                      <CheckCircle2 className="size-5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5">
              PARTNER INSTITUTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
              검증된 출강처
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              누적 출강 50회+, 수강생 1,500명+. 부동산 교육 분야의 주요 기관에서 강의해 왔습니다.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {lectureInstitutions.map((institution) => (
              <li
                key={institution}
                className="flex items-center gap-3 px-5 py-4 bg-white border border-charcoal-200 rounded-xl text-sm md:text-base font-medium text-charcoal-900"
              >
                <span className="size-2 rounded-full bg-gold-500 shrink-0" />
                {institution}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lecture Gallery — 강의·견학 현장 사진 */}
      <LectureGallery />

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-32 border-t border-charcoal-200">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 leading-tight">
              자주 묻는 질문
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {lectureFAQ.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-charcoal-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none">
                  <span className="text-base md:text-lg font-semibold text-charcoal-900">
                    Q. {item.q}
                  </span>
                  <span className="text-2xl text-gold-500 transition-transform group-open:rotate-45 shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-base text-muted leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal-900 hover:bg-charcoal-950 px-7 py-3.5 text-base font-semibold text-white transition"
            >
              강의 문의하기
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
