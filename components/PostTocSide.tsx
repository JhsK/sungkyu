'use client';

import { useSyncExternalStore } from 'react';
import type { PostToc } from '@/lib/posts';

export function PostTocSide({ tocItems }: { tocItems: PostToc }) {
  const currentHeadingId = useSyncExternalStore(
    subscribeToScroll,
    () => findCurrentHeadingId(tocItems),
    () => tocItems[0].id,
  );

  return (
    <aside
      aria-labelledby="post-toc-side-title"
      className="min-w-0 flex-[1_1_200px] pt-15 max-toc:hidden"
    >
      <div className="sticky top-24">
        <p id="post-toc-side-title" className="text-[13px] font-semibold text-muted">
          이 글의 목차
        </p>
        <ol className="mt-3 flex flex-col gap-0.5 border-l border-border text-[14px]">
          {tocItems.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={id === currentHeadingId}
                className="-ml-px block border-l-2 border-transparent py-1.5 pl-3.5 text-muted transition-[color] duration-(--dur) ease-(--ease) hover:text-fg aria-[current=true]:border-accent aria-[current=true]:font-medium aria-[current=true]:text-fg"
              >
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

const subscribeToScroll = (onScroll: () => void) => {
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
};

const findCurrentHeadingId = (tocItems: PostToc) => {
  const passedHeading = tocItems.findLast(({ id }) => {
    const heading = document.getElementById(id);
    return heading !== null && heading.getBoundingClientRect().top < 120;
  });
  return passedHeading?.id ?? tocItems[0].id;
};
