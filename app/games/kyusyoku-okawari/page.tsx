import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetailContent } from "@/components/GameDetailContent";
import { GameDetailHero } from "@/components/GameDetailHero";
import { getGameBySlug } from "@/data/games";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "給食おかわり戦争｜平成学校ゲームズ",
  description:
    "給食おかわり戦争は、人気給食メニューのおかわりをめぐってクラスメイトと争う、平成学校あるあるブラウザゲームです。",
  path: "/games/kyusyoku-okawari",
});

export default function KyusyokuOkawariPage() {
  const game = getGameBySlug("kyusyoku-okawari");

  if (!game) {
    notFound();
  }

  return (
    <>
      <GameDetailHero game={game} />
      <GameDetailContent
        game={game}
        relatedLinks={[
          {
            href: "/guides/kyusyoku-okawari-how-to-play",
            title: "給食おかわり戦争の遊び方",
            description: "基本ルールとリザルトの楽しみ方",
          },
          {
            href: "/guides/kyusyoku-okawari-strategy",
            title: "給食おかわり戦争攻略",
            description: "最後の一個を勝ち取るコツ",
          },
          {
            href: "/games/chime-dash",
            title: "チャイムダッシュを見る",
            description: "2階廊下のダッシュゲームへ",
          },
          {
            href: "/games",
            title: "ゲーム一覧に戻る",
            description: "校内マップから選び直す",
          },
          {
            href: game.url,
            title: "今すぐ遊ぶ",
            description: "外部ゲームサイトへ移動",
            external: true,
          },
        ]}
      />
    </>
  );
}
