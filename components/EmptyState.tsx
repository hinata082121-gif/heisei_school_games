type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="pixel-frame bg-paper p-6 text-center">
      <p className="text-xl font-black">{title}</p>
      <p className="mt-2 text-base leading-7 text-ink/75">{description}</p>
    </div>
  );
}
