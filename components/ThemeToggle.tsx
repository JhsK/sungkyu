'use client';

import { useLayoutEffect, useSyncExternalStore } from 'react';
import { IconButton } from './IconButton';
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
    applyThemeWithoutTransition(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  };

  return (
    <IconButton
      icon={theme === 'dark' ? 'sun' : 'moon'}
      aria-label="다크 모드"
      aria-pressed={theme === 'dark'}
      onClick={toggle}
    />
  );
}

// 호버용 color·background-color 트랜지션이 테마 전환에도 걸려 일부 요소만 늦게 바뀌므로, 전환하는 순간에만 트랜지션을 끈다.
function applyThemeWithoutTransition(theme: Theme) {
  const disableTransitionStyle = document.createElement('style');
  disableTransitionStyle.textContent = '*,*::before,*::after{transition:none!important}';
  document.head.appendChild(disableTransitionStyle);
  document.documentElement.setAttribute('data-theme', theme);
  // 값을 읽어 Style 계산을 강제한다. 생략하면 끄기·테마 변경·켜기가 한 번에 계산되어 트랜지션이 그대로 실행된다.
  void getComputedStyle(document.body).transition;
  // 호버 트랜지션은 유지해야 하므로 현재 작업이 끝난 뒤 바로 되돌린다.
  setTimeout(() => disableTransitionStyle.remove(), 1);
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
