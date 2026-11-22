# 계획: 홈 최근 글·최근 TIL·TIL 태그

홈(`/`) hero 아래에 시안 A의 두 칸 영역(`.home-cols`)을 만듭니다. 왼쪽 넓은 칸에는 최근 글(대표 글 카드 1개와 글 목록)이, 오른쪽 좁은 칸에는 최근 TIL 4개와 TIL 태그 목록이 들어갑니다. 아직 글·TIL을 읽어 올 콘텐츠 시스템이 없으므로 시안의 예시 데이터를 타입이 있는 상수로 옮겨 마크업을 채웁니다. 이번에 시안의 등장 모션도 함께 넣습니다.

**완료 조건**

- 데스크톱(1280px)과 모바일(375px)에서 시안 `.home-cols`와 크기·간격·색이 같습니다. 모바일에서는 오른쪽 칸이 글 목록 아래로 내려갑니다.
- 라이트·다크 테마 모두 시안의 색 토큰을 씁니다.
- 글 카드·목록 항목에 마우스를 올리면 시안처럼 배경·제목 색이 바뀌고 제목 끝에 `→`가 나타납니다.
- 홈에 들어오면 화면 전체가 살짝 떠오르고, 글 목록·최근 TIL 항목이 50ms 간격으로 차례로 나타납니다. 동작 줄이기 설정에서는 모두 꺼집니다.
- `pnpm lint`와 타입 검사를 통과합니다.

## 입력 근거

- 디자인 시안: `design/blog-a.html`
  - 스타일: 77~81행(`.section-label`, `.more`, `.tag`, `.meta`), 98~126행(`.home-cols`부터 `.tag-cloud`까지), 296~307행(등장 모션, 카드 hover)
  - 마크업: 358~374행
  - 예시 데이터와 렌더 방식: 493~519행(`POSTS`, `TILS`), 526~540행
- 사람 요청: "홈 히어로 아래 최근 글, 글 목록 오른쪽 TIL, 태그 마크업"
- 이전 작업: [home-hero.md](./home-hero.md)의 「후속 작업」에서 등장 모션을 이번 작업으로 미뤘습니다.

## 현재 코드 상태

| 위치                                | 상태                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `app/page.tsx:3-9`                  | `<main>`에 본문 폭·여백을 주고 `HomeHero`만 렌더합니다. 새 영역은 hero 바로 아래에 붙입니다                                     |
| `components/HomeHero.tsx:8-11`      | hero가 `pb-14 border-b`로 끝납니다. 시안처럼 새 영역은 `pt-14`로 시작합니다                                                     |
| `components/HomeHero.tsx:53-54`     | 같은 파일에서 여러 번 쓰는 클래스 문자열을 파일 하단 상수로 둔 선례입니다                                                       |
| `components/Header.tsx:16`          | 헤더 "글" 메뉴가 `/`와 `/blog/...`에서 켜집니다. 글 상세 주소는 `/blog/{slug}`로 봅니다                                         |
| `app/globals.css:5-30`              | 색 토큰은 `bg`·`fg`·`muted`·`border`·`surface`·`accent`만 있습니다                                                              |
| `app/globals.css:67-75`             | 동작 줄이기 설정에서 모든 transition·animation을 끕니다. 새 모션도 이 규칙으로 꺼집니다                                         |
| `docs/plans/home-hero.result.md:31` | `text-sm`은 줄 높이 20px을 함께 넣어 시안과 어긋났습니다. 이번에도 글자 크기는 `text-[13px]`처럼 크기만 적어 1.6을 물려받습니다 |

이번 영역에 필요하지만 코드에 없는 토큰입니다.

| 시안 토큰       | 라이트    | 다크      | 쓰는 곳                             |
| --------------- | --------- | --------- | ----------------------------------- |
| `--subtle`      | `#6B7080` | `#8A909C` | 날짜·개수(`.meta`, `time`, `small`) |
| `--border-soft` | `#F0F1F4` | `#1C1F26` | 최근 TIL 항목 사이 줄               |
| `--chip-bg`     | `#F1F3F7` | `#1E2129` | 글 태그 배경                        |
| `--chip-fg`     | `#3F4552` | `#C3C7D0` | 글 태그·TIL 태그 글자               |
| `--accent-soft` | `#EEF2FC` | `#1A2236` | 대표 글 카드 hover 배경             |

모서리는 시안 `--r-lg`(12px)가 Tailwind `rounded-xl`과, `--r-pill`(999px)이 `rounded-full`과 같아 토큰을 새로 만들지 않습니다.

## 설계

### 구조

```text
app/page.tsx                       <main> 등장 모션, hero와 두 칸 영역 조립
├─ components/HomeHero.tsx         (기존)
├─ components/HomeRecentPosts.tsx  왼쪽 칸: 최근 글 (서버 컴포넌트)
└─ components/HomeSidebar.tsx      오른쪽 칸: 최근 TIL, TIL 태그 (서버 컴포넌트)

lib/posts.ts                       글 타입과 예시 글 5개
lib/tils.ts                        TIL 타입과 예시 TIL 18개
```

- 두 칸을 감싸는 `flex` 줄(`.home-cols`)은 `app/page.tsx`에 둡니다. 두 칸의 비율(`flex: 999 1 560px` / `1 1 260px`)은 각 컴포넌트 루트에 둡니다.
- 상태와 이벤트 처리가 없으므로 모두 서버 컴포넌트로 둡니다.
- 예시 데이터는 `lib/`에 둡니다. 지금은 사용처가 하나씩이지만, 글 상세·TIL 페이지·검색이 같은 데이터를 읽게 되고 나중에 실제 콘텐츠(MDX 등)로 바꿀 자리라 화면 파일과 나눕니다.

### 최근 글 (`HomeRecentPosts`)

| 시안 요소          | 마크업                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 제목 줄            | `<h2>최근 글</h2>` + 오른쪽에 글 수 `5편`                                                                                  |
| 대표 글 (첫 글)    | `<Link href="/blog/{slug}">` 카드. "새 글" 표시, `<h3>` 제목, 요약, `<time>` 날짜 · `8분`                                  |
| 글 목록 (나머지 4) | `<ul>` > `<li>` > `<Link>`. 날짜, `<h3>` 제목, 요약, 태그 칩                                                               |
| 등장 모션          | `<li>`마다 `rise` 420ms, 지연 `순서 × 50ms + 80ms`                                                                         |
| hover              | 카드: 배경 `accent-soft`, 위로 2px. 목록: 제목 `accent`. 둘 다 제목 끝 `→`가 오른쪽으로 밀려 나타남(포커스 링이 보일 때도) |

### 최근 TIL과 TIL 태그 (`HomeSidebar`)

| 시안 요소       | 마크업                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| 바깥            | `<aside aria-label="사이드">`, 두 섹션 사이 48px                                                             |
| 최근 TIL 제목줄 | `<h2>최근 TIL</h2>` + 오른쪽 `<Link href="/til">더 보기 →</Link>`                                            |
| 최근 TIL 항목   | 최신 4개. `<ul>` > `<li>` > `<Link href="/til">`. `MM.DD` 날짜와 제목. 등장 모션은 글 목록과 같음            |
| TIL 태그        | `<h2>TIL 태그</h2>` + 태그별 `<Link href="/til?tag={태그}">`. 태그 이름 옆에 개수. 태그는 처음 나온 순서대로 |

시안은 최근 TIL을 `<div>` 안에 `<a>`를 나열합니다. 화면 낭독기가 "목록, 4개 항목"으로 읽도록 글 목록처럼 `<ul>`로 감쌉니다. 항목 사이 줄은 `<li>` 기준으로 그어 겉모습은 같습니다.

시안은 최근 TIL·태그를 누르면 TIL 화면에서 해당 TIL을 펼치거나 태그로 거릅니다. TIL 페이지가 아직 없어 이번에는 `/til`(태그는 `?tag=`)로만 보냅니다. 지금 누르면 404입니다.

### 예시 데이터

```ts
// lib/posts.ts
export type Post = {
  slug: string;
  title: string;
  publishedAt: string; // '2026-10-04'
  tags: string[];
  readingMinutes: number;
  excerpt: string;
};
export const POSTS: Post[] = [/* 시안 493~499행 5개, 최신순 */];

// lib/tils.ts
export type Til = { publishedAt: string; title: string; tag: string; body: string };
export const TILS: Til[] = [/* 시안 500~519행 18개, 최신순 */];
```

- 날짜는 `<time dateTime>`에 넣을 수 있게 `YYYY-MM-DD`로 저장하고, 화면에서 시안 형식(`2026.10.04`, `10.22`)으로 바꿉니다.
- 배열이 이미 최신순이라 정렬하지 않습니다. 순서는 데이터 파일이 책임집니다.
- 태그 개수는 `HomeSidebar`에서 `TILS`로 셉니다(JavaScript 5, HTML 1, CSS 5, React 3, TypeScript 2, Next.js 1, Testing 1).

### 스타일 대응

| 시안                                                                     | Tailwind                                                                                                       |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `.home-cols` 줄바꿈 flex, 간격 64px, 위 56px                             | `flex flex-wrap gap-16 pt-14`                                                                                  |
| `.home-main` / `.home-side`                                              | `min-w-0 flex-[999_1_560px]` / `flex min-w-0 flex-[1_1_260px] flex-col gap-12`                                 |
| `.head-row`                                                              | `mb-1 flex items-center justify-between gap-3`                                                                 |
| `.section-label` 15px·600·muted                                          | `text-[15px] font-semibold text-muted`                                                                         |
| `.meta` 13px·subtle·고정폭 숫자                                          | `flex flex-wrap items-center gap-2 text-[13px] text-subtle tabular-nums`                                       |
| `.more` 14px·muted, 높이 44px, hover accent                              | `inline-flex min-h-11 items-center text-[14px] text-muted hover:text-accent`                                   |
| `.featured` 간격 12px, 안쪽 28px, 위 12px·아래 8px, 12px 모서리, surface | `grid gap-3 p-7 mt-3 mb-2 rounded-xl bg-surface`                                                               |
| `.featured h3` `clamp(22px, 18px + 1vw, 26px)`, 1.4, 700, -0.01em        | `text-[clamp(22px,18px+1vw,26px)] leading-[1.4] font-bold tracking-[-0.01em]`                                  |
| `.featured .new` 12px·600·accent                                         | `text-[12px] font-semibold text-accent`                                                                        |
| `.post` 세로 간격 10px, 위아래 28px, 두 번째 항목부터 위 테두리          | `flex flex-col gap-2.5 py-7` + `<li>`에 `[&+li]:border-t border-border`                                        |
| `.post h3` 22px·1.4·600·-0.01em                                          | `text-[22px] leading-[1.4] font-semibold tracking-[-0.01em]`                                                   |
| `.tag` 13px, 위아래 3px·좌우 10px, chip 색, 둥근 끝                      | `inline-flex items-center rounded-full bg-chip-bg px-2.5 py-[3px] text-[13px] text-chip-fg`                    |
| `.til-mini a` 간격 2px, 위아래 12px, 아래 줄 `border-soft`(마지막 제외)  | `flex flex-col gap-0.5 py-3` + `<li>`에 `border-b border-border-soft last:border-b-0`                          |
| `.til-mini time` 12px / `.t` 15px·1.5                                    | `text-[12px] text-subtle tabular-nums` / `text-[15px] leading-[1.5]`                                           |
| `.tag-cloud a` 13px, 위아래 6px·좌우 12px, 테두리, 둥근 끝, hover accent | `rounded-full border border-border px-3 py-1.5 text-[13px] text-chip-fg hover:border-accent hover:text-accent` |
| `.tag-cloud small` subtle, 왼쪽 4px                                      | `ml-1 text-subtle tabular-nums`                                                                                |

hover 전환은 시안처럼 색 160ms(`--dur`), 카드 이동과 `→`는 240ms입니다. 속성마다 시간이 달라 카드는 `[transition:background-color_var(--dur)_var(--ease),transform_240ms_var(--ease)]`처럼 한 번에 적습니다. `→`는 `group`과 `after:` 변형으로 만듭니다.

### 등장 모션

`globals.css`의 `@theme`에 `rise` 키프레임(아래 10px, 투명 → 제자리)과 애니메이션 두 개를 둡니다.

| 이름                  | 값                            | 적용                                  |
| --------------------- | ----------------------------- | ------------------------------------- |
| `--animate-rise-view` | `rise 320ms var(--ease) both` | `app/page.tsx`의 `<main>` (hero 포함) |
| `--animate-rise-item` | `rise 420ms var(--ease) both` | 글 목록 `<li>`, 최근 TIL `<li>`       |

항목별 지연은 `style={{ animationDelay: ... }}`로 줍니다. 시안처럼 CSS 변수(`--i`)를 쓰면 `style` 타입에 맞추려고 `as` 단언이 필요해서 피합니다.

### 대안과 기각 이유

| 대안                                                    | 기각 이유                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 예시 데이터를 각 컴포넌트 파일 하단에 둔다              | TIL 18개·글 5개로 화면 파일이 데이터에 묻힙니다. TIL 페이지·글 상세가 곧 같은 데이터를 씁니다 |
| 최근 TIL과 TIL 태그를 컴포넌트 둘로 나눈다              | 둘 다 홈 오른쪽 칸에서만 쓰고 각각 20줄 안팎입니다. 칸 단위로 하나면 충분합니다               |
| 글 태그 칩을 `Tag` 컴포넌트로 뺀다                      | 지금 쓰는 곳은 글 목록 하나입니다. 글 상세 머리·TIL 행을 만들 때 공용화합니다                 |
| 최근 TIL·태그 링크를 시안처럼 `/til`로만 보낸다(태그도) | 태그를 누른 의도가 사라집니다. 주소에 `?tag=`를 남겨 TIL 페이지가 읽게 합니다                 |
| 등장 모션을 다음 작업으로 또 미룬다                     | 이전 계획에서 "홈 글 목록을 만들 때" 하기로 했고, 이번에 목록 항목이 생깁니다                 |

### 변경 파일

| 파일                             | 작업                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------- |
| `app/globals.css`                | 색 토큰 5개(라이트·다크)와 `@theme` 연결, `rise` 키프레임과 애니메이션 2개   |
| `app/page.tsx`                   | `<main>`에 등장 모션, hero 아래에 두 칸 줄과 `HomeRecentPosts`·`HomeSidebar` |
| `components/HomeRecentPosts.tsx` | 새 파일. 최근 글 제목줄, 대표 글 카드, 글 목록                               |
| `components/HomeSidebar.tsx`     | 새 파일. 최근 TIL 4개, TIL 태그 목록                                         |
| `lib/posts.ts`                   | 새 파일. `Post` 타입과 예시 글 5개                                           |
| `lib/tils.ts`                    | 새 파일. `Til` 타입과 예시 TIL 18개                                          |

## 정책과 엣지 케이스

| 상황                             | 기대 동작                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| 화면 폭이 넓을 때(1080px 본문)   | 왼쪽 칸이 남는 폭을 거의 다 가져가고 오른쪽 칸은 260px 안팎입니다                               |
| 화면 폭이 좁을 때(본문 < 884px)  | 두 칸 합(560 + 64 + 260)이 안 들어가 오른쪽 칸이 아래로 내려가 전체 폭을 씁니다                 |
| 긴 제목                          | `word-break: keep-all`(body)로 단어 단위로 줄바꿈되고 칸 밖으로 넘치지 않습니다(`min-w-0`)      |
| 글 상세·TIL 페이지 미구현        | 글·TIL·태그·"더 보기"를 누르면 Next.js 기본 404가 뜹니다. hero "더 알아보기"와 같은 상태입니다  |
| 다크 테마                        | 새 토큰 5개도 다크 값으로 바뀝니다                                                              |
| `prefers-reduced-motion: reduce` | `globals.css:67-75` 규칙으로 등장 모션·hover 이동·`→` 전환이 꺼집니다. 화면은 바로 보입니다     |
| 키보드 사용                      | 카드·글·TIL·더 보기·태그 순서로 Tab 이동하고, 카드·글은 포커스 링이 보일 때도 `→`가 나타납니다  |
| 글·TIL이 0개                     | 해당 없음. 이번에는 고정된 예시 데이터라 빈 상태가 생기지 않습니다. 시안에도 빈 상태가 없습니다 |

## 후속 작업

| 항목                                          | 이번에 뺀 이유                    | 할 때                                       | 시안 근거            |
| --------------------------------------------- | --------------------------------- | ------------------------------------------- | -------------------- |
| 실제 콘텐츠(MDX 등)로 `lib/posts`·`tils` 교체 | 콘텐츠 시스템을 정하지 않았습니다 | 글 상세 페이지를 만들 때                    | 474행(예시라는 안내) |
| 최근 TIL을 누르면 TIL 페이지에서 그 항목 펼침 | TIL 페이지가 없습니다             | TIL 페이지 작업 때. `?tag=`도 함께 읽습니다 | 537행, 540행         |
| 태그 칩 공용화                                | 사용처가 하나입니다               | 글 상세 머리·TIL 행을 만들 때               | 382행, 615행         |
| 푸터                                          | 요청 범위 밖입니다                | 레이아웃 작업 때                            | 473~475행            |

## 미결 사항

1. **검증 방법** — 레포에 테스트 러너가 없어 단위 테스트는 쓰지 않습니다. `pnpm lint`·타입 검사와 브라우저에서 시안과 화면을 비교해 확인합니다.

**결정됨**

- 예시 데이터는 시안 그대로 씁니다. 푸터 안내 없이 홈에서 실제 글처럼 보여도 괜찮습니다. (사람 결정)
- 구현 전에 `pnpm install`로 의존성을 설치합니다. (사람 결정)
