type TagListProps = {
  tags: string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="ゲームのタグ">
      {tags.map((tag) => (
        <li
          className="border-2 border-ink bg-paper px-2.5 py-1 text-xs font-bold text-ink shadow-pixel-sm sm:text-sm"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
