'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconButton } from './IconButton';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/92 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-[1080px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-2.5 max-xs:px-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-[17px] font-semibold tracking-[-0.01em]"
        >
          sungkyu<span className="text-accent">.dev</span>
        </Link>
        <nav aria-label="주요 메뉴" className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, activeOn }) => (
            <Link
              key={href}
              href={href}
              aria-current={activeOn.test(pathname) ? 'page' : undefined}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] text-muted transition-[color,background-color] duration-(--dur) ease-(--ease) hover:bg-surface hover:text-fg aria-[current=page]:font-semibold aria-[current=page]:text-fg"
            >
              {label}
            </Link>
          ))}
          <IconButton icon="search" aria-label="검색" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

const NAV_LINKS = [
  { href: '/', label: '글', activeOn: /^\/(blog(\/|$)|$)/ },
  { href: '/til', label: 'TIL', activeOn: /^\/til(\/|$)/ },
  { href: '/about', label: '소개', activeOn: /^\/about(\/|$)/ },
];
