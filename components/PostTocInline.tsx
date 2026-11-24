import type { PostToc } from '@/lib/posts';

export function PostTocInline({ tocItems }: { tocItems: PostToc }) {
  return (
    <nav
      aria-labelledby="post-toc-inline-title"
      className="mt-8 rounded-xl bg-surface px-5 py-4 toc:hidden"
    >
      <p id="post-toc-inline-title" className="text-[13px] font-semibold text-muted">
        이 글의 목차
      </p>
      <ol className="mt-1 list-decimal pl-5 text-[15px] text-subtle">
        {tocItems.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`} className="block py-2 text-fg">
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
