import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ArticleSection } from "@/components/ArticleSection";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { PlayCtaPanel } from "@/components/PlayCtaPanel";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SharePanel } from "@/components/SharePanel";
import { getGameBySlug } from "@/data/games";
import { getGuideBySlug, guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/metadata";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createPageMetadata({
    title: `${guide.title}｜平成学校ゲームズ`,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const game = getGameBySlug(guide.gameSlug);

  if (!game) {
    notFound();
  }

  return (
    <ArticleLayout>
      <ArticleHeader
        category={guide.category}
        description={guide.description}
        gameTitle={guide.gameTitle}
        publishedAt={guide.publishedAt}
        readingTime={guide.readingTime}
        tags={guide.tags}
        title={guide.title}
        updatedAt={guide.updatedAt}
      />

      {guide.sections.map((section) => (
        <ArticleSection key={section.heading} section={section} />
      ))}

      <AdSlot position="article-bottom" />

      <PlayCtaPanel
        gameSlug={game.slug}
        gameTitle={game.title}
        gameUrl={game.url}
      />

      <SharePanel
        hashtags={["平成学校ゲームズ", guide.gameTitle]}
        text={`「${guide.title}」を読んだ。\n平成学校ゲームズの攻略記事はこちら。`}
        title={`${guide.title}｜平成学校ゲームズ`}
      />

      <InternalLinkPanel
        links={[
          {
            href: `/games/${game.slug}`,
            label: "ゲーム紹介を見る",
            description: `${game.title}の概要を確認する`,
          },
          {
            href: "/guides",
            label: "攻略・遊び方を見る",
            description: "ほかの記事も読む",
          },
          {
            href: "/blog",
            label: "開発ログ・ブログを見る",
            description: "制作背景や学校あるあるを読む",
          },
          {
            href: "/social",
            label: "SNSで見る",
            description: "ショート動画やお知らせの導線へ",
          },
        ]}
      />

      <RelatedLinks links={guide.relatedLinks} />
    </ArticleLayout>
  );
}
