export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  tags: string[];
  readingMinutes: number;
  excerpt: string;
};

export const POSTS: Post[] = [
  {
    slug: 'inp',
    title: '요금제 비교 페이지의 INP를 개선하며 배운 것',
    publishedAt: '2026-10-04',
    tags: ['성능', 'React'],
    readingMinutes: 8,
    excerpt:
      '필터를 누를 때마다 느껴지던 버벅임의 원인을 찾고, 렌더링을 쪼개 입력 반응성을 되찾은 과정을 정리했습니다.',
  },
  {
    slug: 'content',
    title: '블로그를 옮기며 정리한 콘텐츠 구조',
    publishedAt: '2026-09-21',
    tags: ['Next.js', 'TypeScript'],
    readingMinutes: 6,
    excerpt: '글과 TIL을 나누고, 타입 안전한 frontmatter 스키마를 잡은 방법.',
  },
  {
    slug: 'form',
    title: '폼 상태를 서버 상태와 분리해야 했던 이유',
    publishedAt: '2026-09-02',
    tags: ['상태 관리', '설계'],
    readingMinutes: 7,
    excerpt: '가입 신청 폼에서 겪은 동기화 문제와, 상태의 출처를 명확히 나누고 나서 달라진 점.',
  },
  {
    slug: 'a11y',
    title: '디자인 시스템 컴포넌트에 접근성 테스트 붙이기',
    publishedAt: '2026-08-15',
    tags: ['접근성', '테스트'],
    readingMinutes: 9,
    excerpt: '스토리북과 자동화된 a11y 검사로 놓치기 쉬운 포커스·레이블 문제를 잡아낸 기록.',
  },
  {
    slug: 'review',
    title: '리뷰 코멘트를 질문으로 바꿨더니',
    publishedAt: '2026-07-20',
    tags: ['회고'],
    readingMinutes: 4,
    excerpt:
      '"이건 틀렸어요" 대신 "이 경우엔 어떻게 될까요?" 작은 말투 변화가 리뷰 속도에 준 영향.',
  },
];
