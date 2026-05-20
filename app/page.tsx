import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { GameRoomCard } from "@/components/GameRoomCard";
import { NavLinkCard } from "@/components/NavLinkCard";
import { SchoolHero } from "@/components/SchoolHero";
import { SchoolSection } from "@/components/SchoolSection";
import { SnsEntranceSection } from "@/components/SnsEntranceSection";
import { games } from "@/data/games";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "平成学校ゲームズ｜平成の学校あるあるを16bitブラウザゲームに",
  description:
    "平成学校ゲームズは、チャイム、給食、廊下、先生など平成時代の学校あるあるをテーマにしたスマホ向け16bit風ブラウザゲームシリーズです。",
  path: "/",
});

const noticeItems = [
  "攻略記事",
  "開発ログ",
  "平成学校あるある記事",
  "新作ゲーム情報",
  "アップデート情報",
];

const staffLinks = [
  {
    href: "/about",
    title: "About",
    description: "シリーズのコンセプトと今後の展開",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "お問い合わせ案内",
  },
  {
    href: "/privacy",
    title: "Privacy Policy",
    description: "プライバシーポリシー",
  },
  {
    href: "/terms",
    title: "Terms",
    description: "利用規約",
  },
];

export default function Home() {
  return (
    <>
      <SchoolHero />

      <div id="games" className="space-y-2">
        {games.map((game) => (
          <SchoolSection
            eyebrow="School Map"
            id={game.id}
            key={game.id}
            title={game.areaName}
          >
            <GameRoomCard game={game} />
          </SchoolSection>
        ))}
      </div>

      <SchoolSection eyebrow="Next Phase" title="学校掲示板" variant="notice">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="grid gap-3 sm:grid-cols-2">
            {noticeItems.map((item) => (
              <li
                className="pixel-frame-sm bg-paper px-4 py-3 font-bold"
                key={item}
              >
                ・{item}
              </li>
            ))}
          </ul>
          <div className="grid gap-3 sm:flex lg:grid lg:min-w-72">
            <Link className="pixel-button" href="/guides">
              攻略・遊び方を見る
            </Link>
            <Link className="pixel-button pixel-button-secondary" href="/blog">
              開発ログ・ブログを見る
            </Link>
          </div>
        </div>
      </SchoolSection>

      <SnsEntranceSection />

      <section className="px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AdSlot position="home-section" />
        </div>
      </section>

      <SchoolSection eyebrow="Information" title="職員室" variant="board">
        <p className="max-w-3xl text-base leading-8 text-chalk/90 sm:text-lg">
          平成学校ゲームズの運営情報、問い合わせ、利用規約、プライバシーポリシーはこちら。
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {staffLinks.map((link) => (
            <NavLinkCard
              description={link.description}
              href={link.href}
              key={link.href}
              title={link.title}
            />
          ))}
        </div>
      </SchoolSection>
    </>
  );
}
