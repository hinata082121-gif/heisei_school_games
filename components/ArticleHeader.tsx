import { ArticleTagList } from "@/components/ArticleTagList";
import { CategoryBadge } from "@/components/CategoryBadge";
import { ReadingTime } from "@/components/ReadingTime";

type ArticleHeaderProps = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  gameTitle?: string;
};

export function ArticleHeader({
  title,
  description,
  category,
  publishedAt,
  updatedAt,
  readingTime,
  tags,
  gameTitle,
}: ArticleHeaderProps) {
  return (
    <header className="chalkboard pixel-frame p-5 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <CategoryBadge category={category} />
        <ReadingTime readingTime={readingTime} />
      </div>
      <h1 className="chalk-text mt-5 text-3xl font-black leading-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-8 text-chalk/90 sm:text-lg">
        {description}
      </p>
      <dl className="mt-5 grid gap-2 font-mono text-xs font-black text-chalk/90 sm:grid-cols-3">
        {gameTitle ? (
          <div>
            <dt className="text-school-yellow">対象ゲーム</dt>
            <dd>{gameTitle}</dd>
          </div>
        ) : null}
        <div>
          <dt className="text-school-yellow">公開日</dt>
          <dd>{publishedAt}</dd>
        </div>
        <div>
          <dt className="text-school-yellow">更新日</dt>
          <dd>{updatedAt}</dd>
        </div>
      </dl>
      <div className="mt-5">
        <ArticleTagList tags={tags} />
      </div>
    </header>
  );
}
