export const featuredSection = {
  preHeadline: "주요 프로젝트",
  heading: "현장에서 검증된 수익형 숙박 공간",
  subheading:
    "3대째 디벨로퍼가 직접 짓고 운영하는 풀빌라·펜션 사례입니다.",
};

export type Project = {
  slug: string;
  category: string;
  group: "lodging" | "residential" | "commercial";
  title: string;
  location: string;
  year: string;
  scale: string;
  description: string;
  body?: string[];
  image: string;
  gallery?: string[];
  featured?: boolean;
  /** 카테고리 대표 카드 (개별 프로젝트가 아닌 사례 묶음) */
  isCategory?: boolean;
};

export const projects: Project[] = [
  {
    slug: "smos-gyeongju",
    category: "숙박업 개발",
    group: "lodging",
    title: "스모스경주 펜션",
    location: "경상북도 경주시 북군길 107-21번지 외",
    year: "2025",
    scale: "객실 10개 / 토지 약 560평 / 연면적 약 310평",
    description:
      "3대째 경주 디벨로퍼가 직접 리모델링한 럭셔리 펜션. 운영 노하우가 반영된 수익형 숙박 공간.",
    body: [
      "원래 2011년 준공된 건물을 2025년 디벨로퍼·시공사가 직접 전면 리모델링했습니다. 단순 인테리어 교체가 아닌 운영 효율과 게스트 동선까지 재설계한 프로젝트입니다.",
      "3개 동, 10개 객실 규모로 가족 단위·단체·커플 등 다양한 타입을 갖췄습니다. 토지 약 560평에 연면적 약 310평이라는 여유로운 비율로 마당과 외부 공간을 풍부하게 활용했습니다.",
      "디벨로퍼가 직접 운영 중이라 청소 동선·예약 시스템·게스트 응대까지 모든 단계가 검증된 노하우로 작동합니다. 같은 콘셉트의 신축·리모델링 의뢰가 가장 많이 들어오는 사례입니다.",
    ],
    image: "/images/projects/smos-gyeongju/hero.jpg",
    gallery: [
      "/images/projects/smos-gyeongju/before-1.jpg",
      "/images/projects/smos-gyeongju/before-2.jpg",
      "/images/projects/smos-gyeongju/after-1.jpg",
      "/images/projects/smos-gyeongju/after-2.jpg",
      "/images/projects/smos-gyeongju/after-3.jpg",
      "/images/projects/smos-gyeongju/interior-1.jpg",
      "/images/projects/smos-gyeongju/interior-2.jpg",
      "/images/projects/smos-gyeongju/interior-3.jpg",
    ],
    featured: true,
  },
  {
    slug: "viewrest-villa",
    category: "풀빌라 신축 / 독채",
    group: "lodging",
    title: "뷰레스트풀빌라",
    location: "울산광역시 북구 동해안로 1334",
    year: "2022",
    scale: "독채 1객실 / 토지 54평 / 시공연면적 45평",
    description:
      "동해안 뷰의 프리미엄 독채 풀빌라. 디벨로퍼·시공·운영을 한 회사가 일관되게 진행한 수익형 숙박 사례.",
    body: [
      "2022년 신축한 독채 풀빌라. 토지 54평, 시공연면적 45평이라는 컴팩트한 규모지만, 동해안 뷰를 100% 살리는 배치와 단열·방음 시공으로 1박 평균 단가를 높게 운영하고 있습니다.",
      "디벨로퍼·시공·운영을 같은 회사가 일관되게 진행한 사례입니다. 입지 선정 단계에서 게스트가 어떤 풍경을 보길 원할지부터 역산해서 설계했습니다.",
      "Before → 시공 → After까지 모든 단계의 사진이 남아있어 강의에서도 자주 사례로 활용됩니다.",
    ],
    image: "/images/projects/viewrest-villa/hero.jpg",
    gallery: [
      "/images/projects/viewrest-villa/before-1.jpg",
      "/images/projects/viewrest-villa/before-2.jpg",
      "/images/projects/viewrest-villa/ing-1.jpg",
      "/images/projects/viewrest-villa/ing-2.jpg",
      "/images/projects/viewrest-villa/ing-3.jpg",
      "/images/projects/viewrest-villa/after-1.jpg",
      "/images/projects/viewrest-villa/after-2.jpg",
      "/images/projects/viewrest-villa/after-3.jpg",
    ],
    featured: true,
  },
  {
    slug: "multifamily-cases",
    category: "다가구주택 신축",
    group: "residential",
    title: "경주 다가구주택 시리즈",
    location: "경상북도 경주시 일대",
    year: "2016 ~ 진행 중",
    scale: "다가구주택 4채 (아리채 / 성동리안채 / 황성리안채 / 석장리안채)",
    description:
      "경주 주요 입지에 4채의 다가구주택을 직접 시행·시공한 사례. 임대 수익률을 우선 고려한 디벨로퍼 관점의 신축.",
    body: [
      "경주 시내 입지에 4채의 다가구주택을 신축했습니다. 모든 프로젝트에서 임대 수익률·공실률·관리 편의성을 함께 검토하는 디벨로퍼 시각이 적용됐습니다.",
      "주요 사례는 아리채, 성동리안채, 황성리안채, 석장리안채입니다. 입지마다 임차인 타입이 달라 평면·세대 구성을 다르게 설계했습니다.",
      "본 사이트에는 대표 사진만 노출하며, 구체적인 임대 수익 데이터·평면도는 상담 시 별도로 공유드립니다.",
    ],
    image: "/images/projects/multifamily/hero.jpg",
    gallery: [
      "/images/projects/multifamily/case-1.jpg",
      "/images/projects/multifamily/case-2.jpg",
      "/images/projects/multifamily/case-3.jpg",
      "/images/projects/multifamily/case-4.jpg",
      "/images/projects/multifamily/case-5.jpg",
    ],
    isCategory: true,
  },
  {
    slug: "commercial-cases",
    category: "상가/상가주택",
    group: "commercial",
    title: "울산 상가·상가주택 시리즈",
    location: "울산광역시 일대",
    year: "2017 ~ 진행 중",
    scale: "상가·상가주택 다수 (신정근생 / 상가주택 등)",
    description:
      "유동 인구·임차 수요를 분석해 진행한 상가·상가주택 신축 사례. 1층 임대 수익과 상부 활용을 동시에 고려한 디벨로퍼 시각의 결과물.",
    body: [
      "울산 도심 입지에 상가·상가주택을 신축했습니다. 1층 임대 수익을 극대화하면서 상부를 주거 또는 추가 임대로 활용해 한 건물에서 여러 수익원을 만드는 구조입니다.",
      "대표 사례는 신정근생(근린생활시설)과 상가주택입니다. 디자인 측면에서 큰 통유리 파사드로 상가 가시성을 높였습니다.",
      "본 사이트에는 대표 사진만 노출합니다. 구체적인 임대 수익 데이터·견적 사례는 상담 시 별도 공유드립니다.",
    ],
    image: "/images/projects/commercial/hero.jpg",
    gallery: [
      "/images/projects/commercial/case-1.jpg",
      "/images/projects/commercial/case-2.jpg",
      "/images/projects/commercial/case-3.jpg",
      "/images/projects/commercial/case-4.jpg",
    ],
    isCategory: true,
  },
];

export const projectGroups = {
  all: { label: "전체", group: null },
  lodging: { label: "숙박업 (풀빌라·펜션)", group: "lodging" as const },
  residential: { label: "주거 (다가구주택)", group: "residential" as const },
  commercial: { label: "상업 (상가·상가주택)", group: "commercial" as const },
};
