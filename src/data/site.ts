/**
 * 집짓는프렌디 사이트 콘텐츠 데이터
 * 카피·통계·메뉴·연락처 등 사이트 전반의 콘텐츠를 한 곳에서 관리합니다.
 * 텍스트 수정은 이 파일만 편집하면 사이트 전체에 반영됩니다.
 */

export const siteConfig = {
  /** 짧은 브랜드명 (SEO 메타 / 카피 등) */
  name: "집짓는프렌디",
  /** 법인 표기 (네비바/푸터 로고 등 공식 영역) */
  legalName: "(주)집짓는프렌디",
  tagline: "디벨로퍼가 직접 짓는 집",
  description:
    "3대째 건축을 해온 부동산 디벨로퍼. 풀빌라·펜션 등 수익형 공간을 직접 시공·운영합니다.",
  url: "https://jipfrendy.com",
};

export const contact = {
  email: "b_friendy@naver.com",
  phone: "010-7437-0440",
  address: "울산광역시 남구 번영로 189, 3층",
};

export const navigation = [
  { label: "홈", href: "/" },
  { label: "회사 소개", href: "/about" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "강의", href: "/lecture" },
  { label: "문의", href: "/contact" },
];

export const cta = {
  primary: { label: "무료 상담 신청", href: "/contact" },
  topNav: { label: "상담 문의", href: "/contact" },
};
