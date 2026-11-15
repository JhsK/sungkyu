'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Search from './Icons/Search';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { href: '/', label: '글', activeOn: /^\/(blog(\/|$)|$)/ },
  { href: '/til', label: 'TIL', activeOn: /^\/til(\/|$)/ },
  { href: '/about', label: '소개', activeOn: /^\/about(\/|$)/ },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[8px]">
      <div className="mx-auto flex min-h-16 max-w-[1080px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-2.5 max-xs:px-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-[17px] font-semibold tracking-[-0.01em]"
        >
          sungkyu<span className="text-accent">.dev</span>
        </Link>
        <nav aria-label="주요 메뉴" className="flex items-center gap-1">
          {NAV.map(({ href, label, activeOn }) => (
            <Link
              key={href}
              href={href}
              aria-current={activeOn.test(pathname) ? 'page' : undefined}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] text-muted transition-[color,background-color] duration-(--dur) ease-(--ease) hover:bg-surface hover:text-fg aria-[current=page]:font-semibold aria-[current=page]:text-fg"
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="검색"
            className="inline-grid size-11 place-items-center rounded-lg border-0 bg-transparent text-muted transition-[color,background-color,border-color,transform] duration-(--dur) ease-(--ease) hover:bg-surface hover:text-fg active:scale-[0.97]"
          >
            <Search />
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
