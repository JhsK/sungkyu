'use client';

import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';

type CopyStatus = 'idle' | 'copied' | 'failed';

export function CodeCopyButton() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  useEffect(() => {
    if (copyStatus === 'idle') return;
    const resetTimer = setTimeout(() => setCopyStatus('idle'), 1600);
    return () => clearTimeout(resetTimer);
  }, [copyStatus]);

  const copyCodeLines = async (event: MouseEvent<HTMLButtonElement>) => {
    const codeLines =
      event.currentTarget.closest('[data-code-block]')?.querySelectorAll('[data-line]') ?? [];
    const code = Array.from(codeLines, (line) => (line.textContent ?? '').trimEnd()).join('\n');

    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copyCodeLines}
        className={`h-9 min-w-11 rounded-md px-1.5 py-px text-[12px] hover:bg-border-soft ${copyStatus === 'copied' ? 'text-accent' : 'text-muted hover:text-fg'}`}
      >
        {COPY_BUTTON_LABELS[copyStatus]}
      </button>
      <span role="status" className="sr-only">
        {COPY_STATUS_MESSAGES[copyStatus]}
      </span>
    </>
  );
}

const COPY_BUTTON_LABELS: Record<CopyStatus, ReactNode> = {
  idle: '복사',
  copied: (
    <>
      복사됨 <span aria-hidden="true">✓</span>
    </>
  ),
  failed: '복사 실패',
};

const COPY_STATUS_MESSAGES: Record<CopyStatus, string> = {
  idle: '',
  copied: '코드를 복사했습니다',
  failed: '코드를 복사하지 못했습니다',
};
