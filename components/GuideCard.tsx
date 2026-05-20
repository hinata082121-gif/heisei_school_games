import { ArticleCard } from "@/components/ArticleCard";
import type { Guide } from "@/data/guides";

type GuideCardProps = {
  guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <ArticleCard
      category={guide.category}
      description={guide.description}
      gameTitle={guide.gameTitle}
      href={`/guides/${guide.slug}`}
      readingTime={guide.readingTime}
      tags={guide.tags}
      title={guide.title}
    />
  );
}
