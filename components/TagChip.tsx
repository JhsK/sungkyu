export function TagChip({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-chip-bg px-2.5 py-[3px] text-[13px] text-chip-fg">
      {tag}
    </span>
  );
}
