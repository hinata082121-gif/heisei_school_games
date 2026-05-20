import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ArticleSection } from "@/components/ArticleSection";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SharePanel } from "@/components/SharePanel";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { createPageMetadata } from "@/lib/metadata";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: `${post.title}｜平成学校ゲームズ`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticleLayout>
      <ArticleHeader
        category={post.category}
        description={post.description}
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        tags={post.tags}
        title={post.title}
        updatedAt={post.updatedAt}
      />

      {post.sections.map((section) => (
        <ArticleSection key={section.heading} section={section} />
      ))}

      <AdSlot position="article-bottom" />

      <SharePanel
        hashtags={["平成学校ゲームズ"]}
        text={`「${post.title}」を読んだ。\n平成学校ゲームズのブログ記事はこちら。`}
        title={`${post.title}｜平成学校ゲームズ`}
      />

      <InternalLinkPanel
        links={[
          {
            href: "/games",
            label: "ゲーム一覧を見る",
            description: "公開中のゲームを選ぶ",
          },
          {
            href: "/guides",
            label: "攻略・遊び方を見る",
            description: "遊び方と攻略のコツを見る",
          },
          {
            href: "/blog",
            label: "ブログ一覧に戻る",
            description: "ほかの開発ログを読む",
          },
          {
            href: "/social",
            label: "SNSページを見る",
            description: "ショート動画やお知らせの導線へ",
          },
        ]}
      />

      <RelatedLinks links={post.relatedLinks} />
    </ArticleLayout>
  );
}
