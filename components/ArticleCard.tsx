import Link from "next/link";
import { ArticleTagList } from "@/components/ArticleTagList";
import { CategoryBadge } from "@/components/CategoryBadge";
import { ReadingTime } from "@/components/ReadingTime";

type ArticleCardProps = {
  href: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  tags: string[];
  gameTitle?: string;
  publishedAt?: string;
};

export function ArticleCard({
  href,
  title,
  description,
  category,
  readingTime,
  tags,
  gameTitle,
  publishedAt,
}: ArticleCardProps) {
  return (
    <article className="pixel-frame bg-paper p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <CategoryBadge category={category} />
        <ReadingTime readingTime={readingTime} />
      </div>
      {gameTitle || publishedAt ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs font-black text-school-blue">
          {gameTitle ? <span>対象：{gameTitle}</span> : null}
          {publishedAt ? <span>公開日：{publishedAt}</span> : null}
        </div>
      ) : null}
      <h2 className="mt-3 text-2xl font-black leading-tight">{title}</h2>
      <p className="mt-3 text-base leading-8 text-ink/80">{description}</p>
      <div className="mt-5">
        <ArticleTagList tags={tags} />
      </div>
      <Link className="pixel-button mt-6 w-full sm:w-auto" href={href}>
        詳しく読む
      </Link>
    </article>
  );
}
