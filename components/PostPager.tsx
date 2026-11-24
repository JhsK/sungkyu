import Link from 'next/link';
import type { ReactNode } from 'react';
import { getPosts, type Post } from '@/lib/posts';

type PagerDirection = 'older' | 'newer';

export function PostPager({ slug }: { slug: string }) {
  const posts = getPosts();
  const postIndex = posts.findIndex((post) => post.slug === slug);

  return (
    <nav
      aria-label="이전·다음 글"
      className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-8 max-xs:grid-cols-1"
    >
      <PostPagerItem direction="older" post={posts[postIndex + 1]} />
      <PostPagerItem direction="newer" post={posts[postIndex - 1]} />
    </nav>
  );
}

function PostPagerItem({ direction, post }: { direction: PagerDirection; post?: Post }) {
  const { label, emptyMessage, alignClassName } = PAGER_DIRECTIONS[direction];
  const labelElement = <small className="text-[13px] text-subtle">{label}</small>;

  if (!post) {
    return (
      <span className={`${PAGER_ITEM_CLASS_NAME} border-dashed text-subtle ${alignClassName}`}>
        {labelElement}
        <strong className={PAGER_TITLE_CLASS_NAME}>{emptyMessage}</strong>
      </span>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`${PAGER_ITEM_CLASS_NAME} transition-[border-color] duration-(--dur) ease-(--ease) hover:border-accent active:scale-[0.97] ${alignClassName}`}
    >
      {labelElement}
      <strong className={PAGER_TITLE_CLASS_NAME}>{post.title}</strong>
    </Link>
  );
}

const PAGER_DIRECTIONS: Record<
  PagerDirection,
  { label: ReactNode; emptyMessage: string; alignClassName: string }
> = {
  older: {
    label: (
      <>
        <span aria-hidden="true">←</span> 이전 글
      </>
    ),
    emptyMessage: '첫 글이에요',
    alignClassName: '',
  },
  newer: {
    label: (
      <>
        다음 글 <span aria-hidden="true">→</span>
      </>
    ),
    emptyMessage: '아직 다음 글이 없어요',
    alignClassName: 'text-right max-xs:text-left',
  },
};

const PAGER_ITEM_CLASS_NAME = 'flex flex-col gap-1 rounded-xl border border-border p-5';

const PAGER_TITLE_CLASS_NAME = 'text-[16px] leading-[1.5] font-semibold';
