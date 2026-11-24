import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { MDXContent } from 'mdx/types';
import { PostPager } from '@/components/PostPager';
import { PostTocInline } from '@/components/PostTocInline';
import { PostTocSide } from '@/components/PostTocSide';
import { TagChip } from '@/components/TagChip';
import { toDotDate } from '@/lib/format-date';
import { getPost, getPosts, type PostToc, type PostTocItem } from '@/lib/posts';

export const instant = false;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const post = findPostOrNotFound(slug);

  return { title: `${post.title} — sungkyu.dev` };
}

export default async function PostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = findPostOrNotFound(slug);
  const postModule: { default: MDXContent } = await import(`@/content/posts/${slug}.mdx`);
  const PostBody = postModule.default;

  return (
    <main className="mx-auto max-w-[1080px] animate-rise-view px-6 pt-18 pb-24 max-xs:px-4">
      <div className="flex flex-wrap gap-16">
        <article aria-labelledby="post-title" className="max-w-[720px] min-w-0 flex-[999_1_560px]">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-[14px] text-muted hover:text-accent"
          >
            <span>
              <span aria-hidden="true">←</span> 글 목록
            </span>
          </Link>
          <header className="flex flex-col gap-4 border-b border-border pt-4 pb-10">
            <div className="mt-1 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
            <h1
              id="post-title"
              className="text-[clamp(28px,20px+2.2vw,38px)] leading-[1.35] font-bold tracking-[-0.02em] text-balance"
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[13px] text-subtle tabular-nums">
              <time dateTime={post.publishedAt}>{toDotDate(post.publishedAt)}</time>
            </div>
          </header>
          {hasTocItems(post.tocItems) && <PostTocInline tocItems={post.tocItems} />}
          <div className="post-body">
            <PostBody />
          </div>
          <PostPager slug={slug} />
        </article>
        {hasTocItems(post.tocItems) && <PostTocSide tocItems={post.tocItems} />}
      </div>
    </main>
  );
}

const findPostOrNotFound = (slug: string) => {
  const post = getPost(slug);
  if (!post) notFound();
  return post;
};

const hasTocItems = (tocItems: PostTocItem[]): tocItems is PostToc => tocItems.length > 0;
