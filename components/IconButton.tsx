import type { ComponentProps } from 'react';
import Moon from './Icons/Moon';
import Search from './Icons/Search';
import Sun from './Icons/Sun';

type IconName = keyof typeof ICONS;

type IconButtonProps = Omit<ComponentProps<'button'>, 'type' | 'className' | 'children'> & {
  icon: IconName;
};

export function IconButton({ icon, ...buttonProps }: IconButtonProps) {
  const Icon = ICONS[icon];

  return (
    <button
      {...buttonProps}
      type="button"
      className="inline-grid size-11 place-items-center rounded-lg text-muted transition-[color,background-color,transform] duration-(--dur) ease-(--ease) hover:bg-surface hover:text-fg active:scale-[0.97]"
    >
      <Icon />
    </button>
  );
}

const ICONS = { search: Search, moon: Moon, sun: Sun };
