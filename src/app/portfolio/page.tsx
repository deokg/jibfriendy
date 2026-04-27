import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "포트폴리오 — 11동의 시행·시공·운영 사례",
  description:
    "풀빌라·펜션부터 다가구주택, 상가/상가주택까지. 3대째 경주 디벨로퍼가 직접 진행한 11동의 프로젝트 포트폴리오.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        preHeadline="PORTFOLIO"
        heading="11동의 시행·시공·운영 사례"
        description="풀빌라·펜션부터 다가구주택, 상가/상가주택까지. 디벨로퍼가 직접 짓고 운영한 모든 프로젝트를 카테고리별로 보실 수 있습니다."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-narrow">
          <PortfolioGrid />
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
