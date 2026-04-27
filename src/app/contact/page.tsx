import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "상담 문의 — 디벨로퍼와 직접 상담받으세요",
  description:
    "토지·예산·운영 계획만 알려주시면 디벨로퍼 관점의 분석과 시공 견적을 무료로 드립니다. 풀빌라·펜션부터 다가구·상가까지 모든 프로젝트 상담 가능합니다.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        preHeadline="CONTACT"
        heading="디벨로퍼와 직접 상담하세요"
        description="토지·예산·운영 계획만 알려주시면 디벨로퍼 관점의 분석과 구체적인 시공 견적을 무료로 드립니다."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <div className="text-xs font-mono tracking-[0.3em] text-gold-600 mb-3">
                  GET IN TOUCH
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900 leading-tight mb-4">
                  무엇을 어떻게 지을지,
                  <br />
                  같이 정리해드립니다
                </h2>
                <p className="text-base text-muted leading-relaxed">
                  대지가 있어도, 없어도 괜찮습니다. 운영하고 싶은 사업의 형태와
                  예산만 알려주시면 디벨로퍼 시각으로 가능성을 검토해드립니다.
                </p>
              </div>

              <ul className="space-y-5">
                <ContactItem icon={<Phone className="size-5" />} label="대표 연락처">
                  <a
                    href={`tel:${contact.phone.replace(/-/g, "")}`}
                    className="hover:text-gold-600 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </ContactItem>
                <ContactItem icon={<Mail className="size-5" />} label="이메일">
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-gold-600 transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </ContactItem>
                <ContactItem icon={<MapPin className="size-5" />} label="소재지">
                  <span>{contact.address}</span>
                </ContactItem>
                <ContactItem icon={<Clock className="size-5" />} label="응답 시간">
                  <span>영업일 기준 1~2일 내</span>
                </ContactItem>
              </ul>

              <div className="bg-charcoal-900 text-white rounded-2xl p-6 md:p-8">
                <div className="text-xs font-mono tracking-[0.2em] text-gold-400 mb-3">
                  TIP
                </div>
                <p className="text-sm leading-relaxed text-white/85">
                  처음 상담 시에는 간단한 메모만 있어도 충분합니다.
                  토지가 있다면 주소, 없다면 원하는 지역과 사업 컨셉만 알려주세요.
                </p>
              </div>
            </aside>

            {/* Form */}
            <main className="lg:col-span-8">
              <div className="bg-white rounded-3xl border border-charcoal-200 p-6 md:p-10 lg:p-12 shadow-sm">
                <ContactForm />
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="size-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted uppercase tracking-wider mb-1">
          {label}
        </div>
        <div className="text-base text-charcoal-900 font-medium">{children}</div>
      </div>
    </li>
  );
}
