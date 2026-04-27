export const featuredSection = {
  preHeadline: "주요 프로젝트",
  heading: "현장에서 검증된 수익형 숙박 공간",
  subheading: "3대째 디벨로퍼가 직접 짓고 운영하는 풀빌라·펜션 사례입니다.",
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
  body?: string[]; // 상세 페이지 본문
  image: string;
  gallery?: string[]; // 추가 이미지
  featured?: boolean;
  placeholder?: boolean; // 데이터 채울 예정
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
      "원래 2011년 준공된 건물을 2025년 디벨로퍼·시공사가 직접 전면 리모델링했습니다. 단순한 인테리어 교체가 아닌, 운영 효율과 게스트 동선까지 재설계한 프로젝트입니다.",
      "총 3개 동, 10개 객실 규모로 가족 단위 / 단체 / 커플 등 다양한 타입을 갖췄습니다. 토지 약 560평에 연면적 약 310평이라는 여유로운 비율로 마당과 외부 공간을 풍부하게 활용했습니다.",
      "디벨로퍼가 직접 운영 중이라, 청소 동선·예약 시스템·게스트 응대까지 모든 단계가 검증된 노하우로 작동합니다. 같은 콘셉트의 신축·리모델링 의뢰가 가장 많이 들어오는 사례입니다.",
    ],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
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
      "디벨로퍼·시공·운영을 같은 회사가 일관되게 진행한 사례입니다. 입지 선정 단계에서 운영 시 게스트가 어떤 풍경을 보길 원할지부터 역산해서 설계했습니다.",
      "1박 단가 + 점유율 데이터까지 공개 가능한 케이스라 강의에서도 자주 사례로 활용됩니다.",
    ],
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  // 다가구주택 신축 4채 (정확한 데이터는 추후 업데이트)
  {
    slug: "multifamily-1",
    category: "다가구주택 신축",
    group: "residential",
    title: "다가구주택 신축 #1",
    location: "울산광역시",
    year: "2023",
    scale: "다가구주택 / 임대 운영",
    description:
      "디벨로퍼 관점의 입지 분석으로 임대 수익을 극대화한 다가구주택 신축 프로젝트.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
  {
    slug: "multifamily-2",
    category: "다가구주택 신축",
    group: "residential",
    title: "다가구주택 신축 #2",
    location: "경상북도 경주시",
    year: "2021",
    scale: "다가구주택 / 임대 운영",
    description:
      "경주 주요 입지에 신축한 다가구주택. 시공·운영 노하우가 반영된 사례.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
  {
    slug: "multifamily-3",
    category: "다가구주택 신축",
    group: "residential",
    title: "다가구주택 신축 #3",
    location: "울산광역시",
    year: "2020",
    scale: "다가구주택 / 임대 운영",
    description:
      "임대 수익률을 최우선으로 설계·시공한 다가구주택 신축 사례.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
  {
    slug: "multifamily-4",
    category: "다가구주택 신축",
    group: "residential",
    title: "다가구주택 신축 #4",
    location: "경상북도 경주시",
    year: "2019",
    scale: "다가구주택 / 임대 운영",
    description:
      "지역 분석에 기반한 안정적 임대 수익형 다가구주택 신축 프로젝트.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
  // 상가/상가주택 3채
  {
    slug: "commercial-1",
    category: "상가/상가주택",
    group: "commercial",
    title: "상가주택 신축 #1",
    location: "울산광역시",
    year: "2022",
    scale: "1층 상가 + 상부 주거",
    description:
      "1층 상가 임대와 상부 주거 운영을 결합한 수익형 상가주택 신축.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
  {
    slug: "commercial-2",
    category: "상가/상가주택",
    group: "commercial",
    title: "상가 신축 #2",
    location: "경상북도 경주시",
    year: "2020",
    scale: "근린생활시설",
    description:
      "유동 인구 분석을 거쳐 진행한 근린생활시설 상가 신축 프로젝트.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
  {
    slug: "commercial-3",
    category: "상가/상가주택",
    group: "commercial",
    title: "상가주택 신축 #3",
    location: "울산광역시",
    year: "2018",
    scale: "1층 상가 + 상부 주거",
    description:
      "디벨로퍼 시각으로 임대·운영을 동시에 고려한 상가주택 신축 사례.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    placeholder: true,
  },
];

export const projectGroups = {
  all: { label: "전체", group: null },
  lodging: { label: "숙박업 (풀빌라·펜션)", group: "lodging" as const },
  residential: { label: "주거 (다가구주택)", group: "residential" as const },
  commercial: { label: "상업 (상가·상가주택)", group: "commercial" as const },
};
