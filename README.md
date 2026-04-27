# 집짓는프렌디 웹사이트

3대째 이어온 건축, 디벨로퍼·시공사·강사·운영자의 네 가지 전문성을 가진 (주)집짓는프렌디 공식 웹사이트입니다.

## 기술 스택

- **프레임워크**: [Next.js 16](https://nextjs.org) (App Router, React 19, Turbopack)
- **스타일**: [Tailwind CSS v4](https://tailwindcss.com)
- **애니메이션**: [Motion](https://motion.dev)
- **아이콘**: [Lucide](https://lucide.dev)
- **폰트**: [Pretendard](https://github.com/orioncactus/pretendard)
- **호스팅**: [Vercel](https://vercel.com)

## 페이지 구조

- `/` — 홈
- `/about` — 회사 소개
- `/lecture` — 강의 프로그램
- `/portfolio` — 포트폴리오 (카테고리 필터)
- `/portfolio/[slug]` — 프로젝트 상세
- `/contact` — 상담 문의

## 콘텐츠 수정 방법

모든 텍스트는 `src/data/*.ts` 파일에 정리되어 있습니다. 텍스트만 수정하려면 디자인을 건드리지 않고 해당 데이터 파일만 편집하면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `src/data/site.ts` | 사이트명, 메뉴, 연락처 |
| `src/data/hero.ts` | Hero 섹션 |
| `src/data/about.ts` | About + Stats |
| `src/data/services.ts` | 6개 서비스 |
| `src/data/values.ts` | 4가지 정체성 |
| `src/data/projects.ts` | 포트폴리오 프로젝트 |
| `src/data/media.ts` | 미디어 인용 |
| `src/data/process.ts` | Work Process |
| `src/data/lecture.ts` | 강의 페이지 |
| `src/data/lectureCredentials.ts` | 출강 기관 |

## 개발 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## 배포

GitHub의 `main` 브랜치에 푸시하면 Vercel이 자동으로 빌드·배포합니다.

---

© (주)집짓는프렌디 · 3대째 이어온 건축, 디벨로퍼 출신 시공사
