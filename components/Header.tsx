'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import Search from './Icons/Search';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { href: '/', label: '글', activeOn: /^\/(blog(\/|$)|$)/ },
  { href: '/til', label: 'TIL', activeOn: /^\/til(\/|$)/ },
  { href: '/about', label: '소개', activeOn: /^\/about(\/|$)/ },
];

function subscribeScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

const getScrolled = () => window.scrollY > 8;
const getServerScrolled = () => false;

export function Header() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getServerScrolled);

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-20 border-b border-border bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[8px] after:pointer-events-none after:absolute after:right-0 after:bottom-[-12px] after:left-0 after:h-3 after:bg-[linear-gradient(rgb(0_0_0/0.06),transparent)] after:opacity-0 after:transition-opacity after:duration-200 after:ease-(--ease) after:content-[''] data-[scrolled=true]:after:opacity-100"
    >
      <div className="mx-auto flex min-h-16 max-w-[1080px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-2.5 [@media(max-width:480px)]:px-4">
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
