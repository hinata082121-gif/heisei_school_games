import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { blogCategories, blogPosts } from "@/data/blogPosts";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "開発ログ・ブログ｜平成学校ゲームズ",
  description:
    "平成学校ゲームズの制作記録、平成学校あるある、スマホブラウザゲーム制作の工夫を紹介するブログです。",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
        <div className="chalkboard pixel-frame mx-auto max-w-6xl p-5 sm:p-8">
          <p className="font-mono text-sm font-black text-school-yellow">
            学級新聞 / 開発ノート
          </p>
          <h1 className="chalk-text mt-2 text-4xl font-black leading-tight sm:text-5xl">
            開発ログ・ブログ
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-chalk/90 sm:text-lg">
            平成学校ゲームズの制作記録、平成学校あるある、スマホブラウザゲーム制作の工夫をまとめています。
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="bulletin-board pixel-frame mx-auto max-w-6xl p-5 sm:p-7">
          <SectionHeading eyebrow="Categories" title="カテゴリ案内" />
          <ul className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <li key={category}>
                <CategoryBadge category={category} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Posts"
            title="記事一覧"
            description="開発ログ、制作メモ、学校あるあるを掲示物のように並べています。"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="mx-auto max-w-6xl">
          <InternalLinkPanel
            title="記事のあとに行く場所"
            description="開発ログから、ゲーム本体や攻略ノートへ自然に移動できます。"
            links={[
              {
                label: "ゲーム一覧を見る",
                href: "/games",
                description: "公開中のブラウザゲームを選べます。",
              },
              {
                label: "攻略・遊び方を見る",
                href: "/guides",
                description: "初めて遊ぶ人向けの記事をまとめています。",
              },
              {
                label: "SNSで見る",
                href: "/social",
                description: "ショート動画や制作状況の発信予定を確認できます。",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
