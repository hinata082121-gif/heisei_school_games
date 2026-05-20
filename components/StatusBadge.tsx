type StatusBadgeProps = {
  status: string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex min-h-8 items-center border-2 border-ink bg-school-yellow px-3 py-1 font-mono text-xs font-black text-ink shadow-pixel-sm">
      ステータス：{status}
    </span>
  );
}
