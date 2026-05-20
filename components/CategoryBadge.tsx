type CategoryBadgeProps = {
  category: string;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-flex min-h-8 items-center border-2 border-ink bg-school-blue px-3 py-1 font-mono text-xs font-black text-white shadow-pixel-sm">
      カテゴリ：{category}
    </span>
  );
}
