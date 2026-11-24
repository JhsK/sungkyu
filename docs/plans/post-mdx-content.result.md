# 결과: 글 본문을 MDX 파일로 쓰기

**계획 문서:** [post-mdx-content.md](./post-mdx-content.md) · **최종 상태:** 사람 판단 대기

## 계획 대비 구현

| 계획 항목                                                                                  | 상태       | 비고                                                                                                                                          |
| ------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `package.json`, `pnpm-lock.yaml` 패키지 추가                                               | 구현       | 계획 표의 버전 그대로                                                                                                                         |
| `next.config.ts` `createMDX`와 플러그인                                                    | 구현       | 시안 토큰을 CSS 변수로 쓰는 테마 객체가 Turbopack에서도 넘어갑니다. 언어 없는 펜스도 같은 틀로 그리려고 `defaultLang: plaintext`를 더했습니다 |
| `mdx-components.tsx`                                                                       | 구현       | `figure`(코드 블록일 때)·`pre`·`Callout`·`CodeLineRef`                                                                                        |
| `content/posts/*.mdx` 5개                                                                  | 구현       | `inp`는 시안 본문, 나머지 넷은 요약 한 문단                                                                                                   |
| `lib/posts.ts` `getPosts`·`getPost`                                                        | 구현       | 한 요청 안에서 다시 읽지 않게 `getPosts`를 React `cache()`로 감쌌습니다 (리뷰 수정)                                                           |
| `app/blog/[slug]/page.tsx` 동적 import                                                     | 구현       | `POST_BODIES`·`FULL_BODY_POST_TITLE`·"본문 없음" 안내를 지웠습니다                                                                            |
| `components/mdx/CodeBlock.tsx`                                                             | 구현       | `CodeLine`을 지우고 `CodeBlockPre`를 더했습니다. 줄 번호 규칙은 `globals.css`의 `[data-code-block] [data-line]`으로 옮겼습니다 (리뷰 수정)    |
| `components/mdx/CodeCopyButton.tsx`, `Callout.tsx`, `HomeRecentPosts.tsx`, `PostPager.tsx` | 구현       |                                                                                                                                               |
| `app/globals.css` `--str`                                                                  | 구현       | 쓰지 않게 된 `--color-kw` 연결을 지웠고, 번호 목록(`ol`) 스타일을 더했습니다 (리뷰 수정)                                                      |
| `components/post-bodies/InpPostBody.tsx` 삭제                                              | 구현       |                                                                                                                                               |
| `tsconfig.json`                                                                            | 수정 안 함 | `@types/mdx`만으로 `.mdx` import 타입이 잡혔습니다                                                                                            |

계획 밖 수정은 `.prettierrc` 하나입니다. Prettier가 `.mdx` 안의 코드 펜스까지 다시 포맷해 `useMemo(...)` 여러 줄을 한 줄로 합쳤습니다. 그래서 `*.mdx`에만 `embeddedLanguageFormatting: "off"`를 줬습니다.

미결 사항이던 「구현 중 확인」 세 가지는 모두 확인했습니다.

- CSS 변수 테마 객체는 Turbopack에서 그대로 넘어갑니다.
- `rehype-pretty-code`는 제목을 `<figcaption data-rehype-pretty-code-title>`에, 언어를 `<pre data-language>`에 붙입니다.
- 빈 줄도 `<span data-line>`으로 남습니다.

## 검증 결과

**사이클:** 3/3 · **종료 사유:** 미검증 없음
**최종 확인:** 통과. 아래 차이는 원인을 확인한 것들입니다.

| 단계 | 수정 수 | 검증됨 | 실패 남음 |
| ---- | ------- | ------ | --------- |
| 구현 | 13      | 13     | 0         |
| QA   | 0       | 0      | 0         |
| 리뷰 | 5       | 5      | 0         |

- **디자인:** `/blog/inp`를 시안과 비교했습니다. 1280px·375px, 라이트·다크 네 조합에서 43~45개 요소를 확인했습니다. 위치·크기·색이 1px 안에서 같습니다.
  - 코드 색: 키워드 보라, 함수 accent, 주석 subtle, 나머지 fg로 시안과 같습니다.
  - 375px에서 코드 줄 상자가 가장 긴 줄 폭(452px)까지 늘어납니다. 하이라이터가 `code`에 `display: grid`를 줘서입니다. 지금 화면에는 차이가 없고, 나중에 줄 강조를 넣으면 강조 배경이 스크롤 끝까지 이어집니다.
  - `review` 글은 "본문 없음" 안내 상자가 빠진 만큼 시안보다 짧습니다. 계획대로입니다.
  - 홈 대표 글 카드·글 목록·태그도 시안과 같습니다.
- **기능:** 브라우저에서 36개 시나리오가 통과했습니다. 별도로 임시 글 파일을 만들어 아래 경계 상황을 확인하고 지웠습니다.
  - 새 `.mdx`를 넣으면 홈 글 수(6편)·글 상세·이전·다음 글에 바로 나타납니다.
  - 같은 이름 소제목은 `같은-제목`, `같은-제목-1`로 갈리고 목차 링크도 맞습니다.
  - 코드 안 `## ` 줄은 목차에 들어가지 않습니다.
  - 언어 없는 코드 블록은 머리 줄에 복사 버튼만 있습니다.
  - 여러 문단 `<Callout>`은 `<p>` 안에 `<p>`가 생기지 않습니다. 표와 번호 목록도 나옵니다.
  - 날짜에 따옴표가 없거나 YAML이 깨지면 파일 이름을 담은 에러로 멈춥니다.
- **정적 검사:** `pnpm lint`, `tsc --noEmit`, `prettier --check`를 통과했습니다.

### 검증 중 고친 것

| 단계 | 내용                                                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 구현 | Prettier가 MDX 안 코드를 다시 포맷하지 않게 `.prettierrc`에 `*.mdx` 설정을 더했습니다                                                                |
| 리뷰 | `.post-body`에 `ol` 규칙이 없어 번호 목록이 번호 없이 나왔습니다. `list-style: decimal`을 더했습니다                                                 |
| 리뷰 | 줄 번호를 그리던 Tailwind 임의 변형 열 개를 `globals.css`의 `[data-code-block] [data-line]` 규칙으로 옮겼습니다                                      |
| 리뷰 | YAML 문법 오류에도 파일 이름이 나오게 했고, 파일 읽기 실패는 그 메시지로 감싸지 않게 나눴습니다                                                      |
| 리뷰 | `getPosts`를 `cache()`로 감싸 한 화면에서 같은 파일을 세 번 읽지 않게 했습니다. slug를 떼었다 붙이는 왕복과 `content/posts` 문자열 중복도 없앴습니다 |
| 리뷰 | 쓰지 않는 `--color-kw`를 지우고, 타입 가드 인자를 `rawFrontmatter`로 바꿨습니다                                                                      |

## 빌드 확인

`pnpm build`가 통과했습니다.

- 글 다섯 개가 빌드 때 HTML로 만들어지고, 각 HTML에 제목과 본문이 다 들어 있습니다.
- `/blog/[slug]`의 파일 목록(`page.js.nft.json`)에 `content/posts`의 `.mdx` 다섯 개가 들어 있습니다. `outputFileTracingIncludes` 없이도 들어가서, 한때 더했던 이 설정은 다시 지웠습니다.
- `next start`에서 `/blog/nope`는 404 화면과 `<meta name="robots" content="noindex">`를 보여 주지만 HTTP 상태는 200입니다. `/blog/[slug]`가 정적 틀을 먼저 보내는 부분 프리렌더 라우트라 상태 코드를 먼저 200으로 정한 뒤 `notFound()`가 실행되기 때문입니다. 문서에 적힌 동작입니다(`02-guides/streaming.md:617`, `03-api-reference/04-functions/not-found.md:193`). 개발 서버에서는 404였습니다. 없는 글 주소는 이 동작(404 화면, 상태 200, `noindex`)대로 둡니다. `proxy.ts`로 렌더 전에 404를 내는 방법은 쓰지 않습니다. (사람 결정)

## 사람이 판단할 것

1. **언어 이름 표시 규칙**(`components/mdx/CodeBlock.tsx:23`).
   - `'plaintext'`가 `next.config.ts`의 `defaultLang`과 여기 두 곳에 따로 적혀 있습니다.
   - ` ```text `나 ` ```txt `로 쓰면 머리 줄에 `text`가 나옵니다.

   두 곳을 상수 하나로 묶고 평문 언어 목록으로 판정할지 정해 주세요.

2. **코드 블록의 접근 가능한 이름.** 하이라이터가 만든 `<figcaption>`을 `<span>` 제목으로 바꿔 그려서 `<figure>`에 이름이 없습니다. 머리 줄 전체를 `<figcaption>`으로 하면 이름에 "복사"까지 섞여 읽히고, `aria-label`로 넘기면 제목이 문자열일 때만 됩니다.
3. **`isValidElement<CodeFigurePartProps>`**(`components/mdx/CodeBlock.tsx:11`). 제네릭은 실행 중에 검사되지 않아 props 모양을 믿는 셈입니다. 없는 키는 `undefined`가 될 뿐이라 동작 문제는 없습니다. 작은 타입 가드로 바꿀지 정해 주세요.
4. **[post-detail.result.md](./post-detail.result.md)에서 넘어온 것.** 1~5번(`instant = false`, 페이지 끝 목차, 복사 다시 누르기, 메타 줄 클래스 중복, 오른쪽 목차 `<nav>`)은 그대로 남아 있습니다. 6~8번 중 셋은 이번에 사라졌습니다.
   - 코드 블록 키보드 스크롤: 하이라이터가 `<pre tabindex="0">`을 붙여 해결됐습니다.
   - `POST_BODIES` 이름: 조회 표를 지웠습니다.
   - `FULL_BODY_POST_TITLE`: 지웠습니다.

## 확인하지 않은 것

- 레포에 테스트 러너가 없어 자동 테스트는 없습니다. `lib/posts.ts`의 frontmatter 검사와 목차 뽑기는 임시 글 파일로만 확인했습니다.
- Playwright와 로컬 Chrome으로만 확인했습니다. Safari·Firefox는 확인하지 않았습니다.
- 홈에서 글로 넘어갈 때의 "script tag" 경고는 `app/layout.tsx` 테마 스크립트 때문이고, 이번 범위 밖입니다.

## 사람 수정 요청

**4건**

| #   | 요지                                                                                                                                                                               | 놓친 단계 | 재검증                                            |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------- |
| 1   | 목차를 MDX 문법으로 읽게 바꿈. `micromark-extension-mdxjs`·`mdast-util-mdx`를 더해 `## <abbr>INP</abbr> 측정`, 여러 줄 `<Callout>` 바로 아래 소제목도 목차 링크와 실제 `id`가 같음 | 구현      | QA 통과                                           |
| 2   | `next.config.ts`에 `outputFileTracingIncludes`를 더함. 서버리스·standalone 배포에서 `content/posts`가 빠져 없는 주소가 500이 되는 것을 막으려 함                                   | 리뷰      | 빌드로 확인: 설정 없이도 `.mdx` 5개가 이미 추적됨 |
| 3   | 2번 설정이 결과를 바꾸지 않아 다시 지움. 없는 글 주소의 상태 200 + `noindex`는 그대로 둠                                                                                           | 요구 변경 | 정적 검사 통과                                    |
| 4   | MDX 본문용 컴포넌트(`Callout`, `CodeBlock`, `CodeCopyButton`, `CodeLineRef`)를 `components/mdx/`로 모음                                                                            | 구현      | QA 통과                                           |
