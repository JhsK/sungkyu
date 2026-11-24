import type { ReactNode } from 'react';

export function CodeLineRef({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="px-0.5 text-accent underline decoration-dotted underline-offset-4 hover:rounded hover:bg-accent-soft hover:decoration-solid focus-visible:bg-accent-soft focus-visible:decoration-solid"
    >
      {children}
    </button>
  );
}
