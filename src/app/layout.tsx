import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "집짓는프렌디 — 디벨로퍼가 직접 짓는 집",
    template: "%s | 집짓는프렌디",
  },
  description:
    "3대째 건축을 해온 부동산 디벨로퍼. 풀빌라·펜션 등 수익형 공간을 직접 시공·운영합니다.",
  keywords: [
    "집짓는프렌디",
    "디벨로퍼",
    "시공사",
    "풀빌라",
    "펜션",
    "수익형 부동산",
    "건축",
    "리모델링",
    "신축",
    "경주",
    "울산",
    "석덕구",
  ],
  authors: [{ name: "집짓는프렌디" }],
  openGraph: {
    title: "집짓는프렌디 — 디벨로퍼가 직접 짓는 집",
    description:
      "3대째 이어온 경주 건축, 디벨로퍼·시공사·강사·운영자의 네 가지 전문성",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full bg-cream text-charcoal-900">
        {children}
      </body>
    </html>
  );
}
