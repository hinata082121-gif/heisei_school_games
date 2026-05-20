import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { NavLinkCard } from "@/components/NavLinkCard";
import { SectionHeading } from "@/components/SectionHeading";
import { guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "攻略・遊び方｜平成学校ゲームズ",
  description:
    "平成学校ゲームズの遊び方や攻略のコツをまとめたページです。チャイムダッシュ、給食おかわり戦争など、スマホ向け16bit風ブラウザゲームの遊び方を紹介します。",
  path: "/guides",
});

const gameLinks = [
  {
    href: "/games/chime-dash",
    title: "チャイムダッシュ紹介ページ",
    description: "2階廊下のダッシュゲームを見る",
  },
  {
    href: "/games/kyusyoku-okawari",
    title: "給食おかわり戦争紹介ページ",
    description: "給食室のおかわりバトルを見る",
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
        <div className="notebook-panel pixel-frame mx-auto max-w-6xl p-5 sm:p-8">
          <p className="font-mono text-sm font-black text-school-blue">
            攻略ノート / 学習プリント
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-5xl">
            攻略・遊び方
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">
            平成学校ゲームズの遊び方や攻略のコツをまとめたページです。
            初めて遊ぶ人でも迷わないように、操作方法やクリアのポイントを紹介しています。
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Guide List"
            title="攻略記事一覧"
            description="ゲームごとの基本ルール、操作の考え方、クリアのコツをプリントのようにまとめています。"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {guides.map((guide) => (
              <GuideCard guide={guide} key={guide.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="chalkboard pixel-frame mx-auto max-w-6xl p-5 sm:p-7">
          <SectionHeading
            eyebrow="Game Rooms"
            inverted
            title="ゲーム別リンク"
            description="攻略を読む前に、ゲームの概要や制作背景を確認できます。"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {gameLinks.map((link) => (
              <NavLinkCard
                description={link.description}
                href={link.href}
                key={link.href}
                title={link.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
