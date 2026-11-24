import type { ReactNode } from 'react';
import Info from '../Icons/Info';

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3.5 rounded-xl bg-accent-soft px-6 py-5 text-[16px] leading-[1.7] text-callout-fg">
      <span className="mt-1 flex flex-none text-accent">
        <Info />
      </span>
      <div>{children}</div>
    </div>
  );
}
