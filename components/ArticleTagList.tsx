type ArticleTagListProps = {
  tags: string[];
};

export function ArticleTagList({ tags }: ArticleTagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="記事タグ">
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
