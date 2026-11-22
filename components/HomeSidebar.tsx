import Link from 'next/link';
import { TILS } from '@/lib/tils';

export function HomeSidebar() {
  const recentTils = TILS.slice(0, 4);
  const tilCountByTag = countTilsByTag();

  return (
    <aside aria-label="사이드" className="flex min-w-0 flex-[1_1_260px] flex-col gap-12">
      <section aria-labelledby="recent-tils-title">
        <div className="mb-1 flex items-center justify-between gap-3">
          <h2 id="recent-tils-title" className="text-[15px] font-semibold text-muted">
            최근 TIL
          </h2>
          <Link
            href="/til"
            className="inline-flex min-h-11 items-center text-[14px] text-muted hover:text-accent"
          >
            <span>
              더 보기 <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
        <ul>
          {recentTils.map((til, index) => (
            <li
              key={til.title}
              className="animate-rise-item border-b border-border-soft last:border-b-0"
              style={{ animationDelay: `${index * 50 + 80}ms` }}
            >
              <Link href="/til" className="group flex flex-col gap-0.5 py-3">
                <time dateTime={til.publishedAt} className="text-[12px] text-subtle tabular-nums">
                  {toMonthDayDate(til.publishedAt)}
                </time>
                <span className="text-[15px] leading-[1.5] transition-[color] duration-(--dur) ease-(--ease) group-hover:text-accent">
                  {til.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="til-tags-title">
        <h2 id="til-tags-title" className="text-[15px] font-semibold text-muted">
          TIL 태그
        </h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {[...tilCountByTag].map(([tag, tilCount]) => (
            <Link
              key={tag}
              href={{ pathname: '/til', query: { tag } }}
              aria-label={`${tag} ${tilCount}개`}
              className="rounded-full border border-border px-3 py-1.5 text-[13px] text-chip-fg transition-[border-color,color] duration-(--dur) ease-(--ease) hover:border-accent hover:text-accent"
            >
              {tag}
              <small className="ml-1 text-[length:smaller] text-subtle tabular-nums">
                {tilCount}
              </small>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}

const countTilsByTag = () => {
  const tilCountByTag = new Map<string, number>();
  for (const til of TILS) {
    tilCountByTag.set(til.tag, (tilCountByTag.get(til.tag) ?? 0) + 1);
  }
  return tilCountByTag;
};

const toMonthDayDate = (isoDate: string) => isoDate.slice(5).replace('-', '.');
