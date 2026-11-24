<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Pull requests

PR을 만들거나 PR 본문을 고칠 때는 먼저 `docs/pull-request-guide.md`를 읽고 그대로 따른다.

## Commits

커밋 제목과 본문은 한국어로 쓴다. 제목은 `type(scope): 한국어 요약` 형식이고, type과 scope는 PR 제목 규칙(`docs/pull-request-guide.md`)과 같다. `Co-Authored-By` 같은 trailer는 원래 형식 그대로 둔다.

```
refactor(header): 내비게이션 목록 이름 정리
fix: 다크 모드 새로고침 시 깜빡임 수정
```
