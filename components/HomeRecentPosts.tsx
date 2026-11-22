import Link from 'next/link';
import { POSTS } from '@/lib/posts';

export function HomeRecentPosts() {
  const [latestPost, ...olderPosts] = POSTS;

  return (
    <section aria-labelledby="recent-posts-title" className="min-w-0 flex-[999_1_560px]">
      <div className="mb-1 flex items-center justify-between gap-3">
        <h2 id="recent-posts-title" className="text-[15px] font-semibold text-muted">
          최근 글
        </h2>
        <span className={POST_META_CLASS_NAME}>{POSTS.length}편</span>
      </div>
      <Link
        href={`/blog/${latestPost.slug}`}
        className="group mt-3 mb-2 grid gap-3 rounded-xl bg-surface p-7 [transition:background-color_var(--dur)_var(--ease),translate_240ms_var(--ease)] hover:-translate-y-0.5 hover:bg-accent-soft"
      >
        <span className="text-[12px] font-semibold text-accent">새 글</span>
        <h3
          className={`text-[clamp(22px,18px+1vw,26px)] leading-[1.4] font-bold tracking-[-0.01em] ${TITLE_ARROW_CLASS_NAME}`}
        >
          {latestPost.title}
        </h3>
        <p className="text-muted">{latestPost.excerpt}</p>
        <div className={POST_META_CLASS_NAME}>
          <time dateTime={latestPost.publishedAt}>{toDotDate(latestPost.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{latestPost.readingMinutes}분</span>
        </div>
      </Link>
      <ul>
        {olderPosts.map((post, index) => (
          <li
            key={post.slug}
            className="animate-rise-item border-border not-first:border-t"
            style={{ animationDelay: `${index * 50 + 80}ms` }}
          >
            <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-2.5 py-7">
              <time dateTime={post.publishedAt} className={POST_META_CLASS_NAME}>
                {toDotDate(post.publishedAt)}
              </time>
              <h3
                className={`text-[22px] leading-[1.4] font-semibold tracking-[-0.01em] transition-[color] duration-(--dur) ease-(--ease) group-hover:text-accent ${TITLE_ARROW_CLASS_NAME}`}
              >
                {post.title}
              </h3>
              <p className="text-muted">{post.excerpt}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-chip-bg px-2.5 py-[3px] text-[13px] text-chip-fg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const toDotDate = (isoDate: string) => isoDate.replaceAll('-', '.');

const POST_META_CLASS_NAME =
  'flex flex-wrap items-center gap-2 text-[13px] text-subtle tabular-nums';

const TITLE_ARROW_CLASS_NAME =
  "after:ml-2 after:inline-block after:-translate-x-1.5 after:text-accent after:opacity-0 after:[transition:opacity_var(--dur)_var(--ease),translate_240ms_var(--ease)] after:content-['→'_/_''] group-hover:after:translate-x-0 group-hover:after:opacity-100 group-focus-visible:after:translate-x-0 group-focus-visible:after:opacity-100";
