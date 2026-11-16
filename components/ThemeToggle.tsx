'use client';

import { useLayoutEffect, useSyncExternalStore } from 'react';
import Moon from './Icons/Moon';
import Sun from './Icons/Sun';
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // React가 <html> 속성을 JSX 값으로 되돌리는 경우(개발 모드 Strict Mode 재마운트, 하이드레이션 실패)에 저장된 테마를 다시 적용한다.
  // https://nextjs.org/docs/app/guides/preventing-flash-before-hydration#re-applying-attributes-in-development
  useLayoutEffect(() => {
    try {
      if (localStorage.getItem(THEME_STORAGE_KEY) === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch {}
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label="다크 모드"
      aria-pressed={theme === 'dark'}
      onClick={toggle}
      className="inline-grid size-11 place-items-center rounded-lg border-0 bg-transparent text-muted transition-[color,background-color,border-color,transform] duration-(--dur) ease-(--ease) hover:bg-surface hover:text-fg active:scale-[0.97]"
    >
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </button>
  );
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function getServerSnapshot(): Theme {
  return 'light';
}
