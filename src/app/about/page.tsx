import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { lectureInstitutions } from "@/data/lectureCredentials";
import { mediaQuotes } from "@/data/media";
import { values } from "@/data/values";

export const metadata: Metadata = {
  title: "회사 소개 — 3대째 이어온 건축 가문",
  description:
    "할아버지부터 아버지, 그리고 본인까지 — 3대째 건축업을 이어온 부동산 디벨로퍼. 대기업 10년 후 가업을 받아 시행·시공·운영을 직접 해온 트리플 전문가.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        preHeadline="ABOUT"
        heading="3대째 이어온 건축 가문, 디벨로퍼가 직접 짓습니다"
        description="할아버지부터 아버지, 그리고 본인까지 — 3대째 건축을 이어온 가문의 노하우가 모든 프로젝트에 녹아 있습니다."
      />

      {/* Career Story */}
      <section className="bg-cream py-20 md:py-32">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5">
                CAREER STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
                대기업에서 디벨로퍼로,
                <br />
                가업을 잇기까지
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-lg text-charcoal-900 leading-relaxed">
              <p>
                할아버지와 아버지에 이어 <strong className="text-gold-600">3대째 건축업</strong>을 이어가는 가문입니다.
                어릴 때부터 현장에서 자랐고, 자연스럽게 건축의 ABC를 몸으로 익혔습니다.
              </p>
              <p>
                대학 졸업 후 <strong>대기업(H사)에서 약 10년간 기술직</strong>으로 근무하며 안정적인 커리어를 쌓았지만,
                <strong className="text-charcoal-900"> 경제적 자유와 가족과의 시간</strong>을 더 중요하게 생각해
                결국 가업을 잇기로 결심했습니다.
              </p>
              <p>
                이후 <strong className="text-gold-600">10여 년 동안 부동산 디벨로퍼·시공사</strong>로 활동하며
                다가구주택 4채, 상가·상가주택 3채, 풀빌라 1채, 펜션 리모델링 3동 등 11동의 프로젝트를 직접 진행했습니다.
                실전에서 검증된 노하우는 강의로도 전달하고 있습니다.
              </p>
              <p className="text-base text-muted italic pt-4 border-l-2 border-gold-500 pl-5">
                "단순히 짓는 것이 아니라, 머물고 싶은 공간이자 수익을 내는 자산을 만드는 것."
                <br />
                — 디벨로퍼 출신 시공사의 차별화는 이 한 문장에서 시작됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Authority + 운영자 = 4 정체성 */}
      <section className="bg-charcoal-900 text-white py-20 md:py-32">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-400 mb-5">
              FOUR ROLES IN ONE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              한 사람이 네 가지 일을 하면
              <br />
              결정이 빠르고 책임이 명확합니다
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value) => (
              <div
                key={value.label}
                className="bg-charcoal-800/60 border border-white/10 rounded-2xl p-8 md:p-10 hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <span className="text-sm font-mono text-gold-400 tracking-widest pt-2">
                    {value.label}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gold-300">
                      {value.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/75 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lecture Credentials */}
      <section className="bg-cream py-20 md:py-32">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-5">
                LECTURER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 leading-tight">
                강의로 다듬은 체계, 현장에서 증명합니다
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
                10년간 부동산 디벨로퍼 강의를 진행해 왔습니다. 이론을 가르치려면 직접 부딪혀야 하고,
                강의 중 받는 날카로운 질문은 다시 현장 결정에 반영됩니다.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-charcoal-200">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">10+</div>
                  <div className="text-xs text-muted">강의 경력 연차</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">50+</div>
                  <div className="text-xs text-muted">누적 출강 횟수</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">1,500+</div>
                  <div className="text-xs text-muted">누적 수강생</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
                출강처 (가나다순)
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {lectureInstitutions.map((institution) => (
                  <li
                    key={institution}
                    className="flex items-center gap-3 px-4 py-3 bg-white border border-charcoal-200 rounded-lg text-sm md:text-base font-medium text-charcoal-900"
                  >
                    <span className="size-1.5 rounded-full bg-gold-500" />
                    {institution}
                  </li>
                ))}
              </ul>
              <Link
                href="/lecture"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 border-b-2 border-charcoal-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
              >
                강의 프로그램 자세히 보기
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-charcoal-900 text-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-mono tracking-[0.3em] text-gold-400 mb-5">
              MEDIA COVERAGE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              미디어가 먼저 알아본
              <br />
              "재야의 고수"
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
              "집 짓는 프렌디"라는 회사명도 사실 2020년 아주경제 기사에서 처음 등장한 별명입니다.
              미디어가 먼저 알아본 디벨로퍼·시공사·강사를 만나보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {mediaQuotes.map((q) => (
              <a
                key={q.publication}
                href={q.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 md:p-10 rounded-2xl border border-white/10 hover:border-gold-500/50 bg-charcoal-800/50 hover:bg-charcoal-800 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-lg md:text-xl font-bold text-gold-400">
                      {q.publication}
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                      {q.sub} · {q.year}
                    </div>
                  </div>
                </div>
                <blockquote className="text-base md:text-lg text-white/95 leading-relaxed font-medium">
                  "{q.quote}"
                </blockquote>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-gold-400 group-hover:gap-3 transition-all">
                  기사 원문 보기
                  <ArrowRight className="size-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
