export type Til = {
  publishedAt: string;
  title: string;
  tag: string;
  body: string;
};

export const TILS: Til[] = [
  {
    publishedAt: '2026-10-22',
    title: 'Intl.RelativeTimeFormat으로 "3일 전" 만들기',
    tag: 'JavaScript',
    body: '날짜 차이를 직접 계산해 문자열을 붙이던 코드를 지웠다. new Intl.RelativeTimeFormat("ko", { numeric: "auto" })로 "어제", "3일 전"까지 알아서 나온다.',
  },
  {
    publishedAt: '2026-10-20',
    title: 'inert 속성으로 열린 시트 뒤 포커스 막기',
    tag: 'HTML',
    body: '바텀시트가 열렸을 때 뒤쪽 본문에 inert를 주면 탭 이동과 클릭이 모두 막힌다. aria-hidden만 주면 포커스는 그대로 들어간다.',
  },
  {
    publishedAt: '2026-10-16',
    title: 'text-wrap: balance는 짧은 제목에만 쓴다',
    tag: 'CSS',
    body: '여러 줄 제목의 줄 길이를 고르게 맞춰 준다. 계산 비용 때문에 긴 본문에는 적용되지 않으니 제목에만 건다.',
  },
  {
    publishedAt: '2026-10-14',
    title: 'TanStack Query의 select는 결과를 메모이즈한다',
    tag: 'React',
    body: 'select에 넘긴 함수 결과는 데이터가 바뀔 때만 다시 계산된다. 단, 인라인 함수로 넘기면 매 렌더마다 새 함수라 useCallback으로 고정하는 편이 낫다.',
  },
  {
    publishedAt: '2026-10-10',
    title: 'CSS :has()로 부모 요소 상태 스타일링하기',
    tag: 'CSS',
    body: '체크박스가 체크된 카드 전체에 테두리를 주고 싶을 때 .card:has(input:checked)면 JS 없이 된다. 성능이 걱정됐는데 단순한 선택자는 충분히 빠르다.',
  },
  {
    publishedAt: '2026-10-10',
    title: 'dialog의 ::backdrop은 상속되지 않는다',
    tag: 'CSS',
    body: '::backdrop에서는 :root의 CSS 변수를 못 읽는 브라우저가 있었다. 지금은 대부분 고쳐졌지만, 색은 변수 대신 직접 적어 두는 쪽이 안전하다.',
  },
  {
    publishedAt: '2026-10-08',
    title: 'structuredClone과 JSON 복사의 차이',
    tag: 'JavaScript',
    body: 'JSON.parse(JSON.stringify())는 Date를 문자열로, Map과 Set은 빈 객체로 바꾼다. structuredClone은 둘 다 그대로 복사하고 순환 참조도 처리한다. 함수는 둘 다 못 옮긴다.',
  },
  {
    publishedAt: '2026-10-05',
    title: 'satisfies로 추론을 살리면서 타입 검사하기',
    tag: 'TypeScript',
    body: '객체에 타입을 직접 달면 키가 string으로 넓어진다. satisfies Record<Key, Value>로 쓰면 검사는 받고 리터럴 키 추론은 남는다.',
  },
  {
    publishedAt: '2026-10-02',
    title: 'scrollbar-gutter: stable로 모달 열 때 흔들림 막기',
    tag: 'CSS',
    body: '모달을 열면서 body 스크롤을 막으면 스크롤바가 사라져 레이아웃이 옆으로 밀린다. html에 scrollbar-gutter: stable을 주면 자리를 미리 잡아 둔다.',
  },
  {
    publishedAt: '2026-09-30',
    title: 'useId는 서버와 클라이언트에서 같은 값을 준다',
    tag: 'React',
    body: 'label과 input을 잇는 id를 Math.random으로 만들면 하이드레이션 경고가 난다. useId는 렌더 위치 기준이라 양쪽 값이 같다.',
  },
  {
    publishedAt: '2026-09-27',
    title: 'useDeferredValue와 debounce는 목적이 다르다',
    tag: 'React',
    body: 'debounce는 일을 늦게 시작하고, useDeferredValue는 급한 렌더링을 먼저 끝낸 뒤 덜 급한 렌더링을 한다. 입력 반응성이 문제라면 후자가 맞다.',
  },
  {
    publishedAt: '2026-09-23',
    title: 'toSorted로 원본을 바꾸지 않고 정렬하기',
    tag: 'JavaScript',
    body: 'sort()는 배열을 그 자리에서 바꿔서 상태로 들고 있는 배열에 쓰면 사고가 난다. toSorted()는 새 배열을 돌려준다. toReversed, toSpliced도 있다.',
  },
  {
    publishedAt: '2026-09-19',
    title: 'Object.groupBy로 reduce 없이 묶기',
    tag: 'JavaScript',
    body: 'Object.groupBy(items, (x) => x.status)면 상태별로 바로 묶인다. 반환값은 프로토타입이 없는 객체라 hasOwnProperty를 직접 부를 수 없다.',
  },
  {
    publishedAt: '2026-09-15',
    title: 'content-visibility: auto로 긴 목록 첫 렌더 줄이기',
    tag: 'CSS',
    body: '화면 밖 항목의 렌더링을 미룬다. contain-intrinsic-size로 대략의 높이를 같이 주지 않으면 스크롤바가 튄다.',
  },
  {
    publishedAt: '2026-09-11',
    title: 'NoInfer로 제네릭 추론 위치 고정하기',
    tag: 'TypeScript',
    body: '기본값 인자에서 제네릭이 추론되면 의도와 다르게 넓어진다. 그 인자 타입을 NoInfer<T>로 감싸면 다른 인자에서만 T를 추론한다.',
  },
  {
    publishedAt: '2026-09-03',
    title: 'next/font는 빌드할 때 폰트를 내려받는다',
    tag: 'Next.js',
    body: '구글 폰트를 써도 런타임에 구글 서버로 요청이 가지 않는다. 빌드 시점에 받아서 같은 도메인에서 제공하니 레이아웃 이동도 줄어든다.',
  },
  {
    publishedAt: '2026-08-28',
    title: 'Playwright의 toHaveURL은 알아서 다시 시도한다',
    tag: 'Testing',
    body: '페이지 이동 뒤 waitForTimeout을 넣을 필요가 없다. 웹 우선 단언(expect(page).toHaveURL)은 조건이 맞을 때까지 기다린다.',
  },
  {
    publishedAt: '2026-08-05',
    title: 'AbortSignal.timeout으로 fetch 타임아웃 한 줄 처리',
    tag: 'JavaScript',
    body: 'AbortController와 setTimeout을 같이 쓰던 코드를 fetch(url, { signal: AbortSignal.timeout(5000) })로 바꿨다. 시간이 지나면 TimeoutError로 끝난다.',
  },
];
