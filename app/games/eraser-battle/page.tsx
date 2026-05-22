import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetailContent } from "@/components/GameDetailContent";
import { GameDetailHero } from "@/components/GameDetailHero";
import { getGameBySlug } from "@/data/games";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "机上決戦！消しゴム落とし｜平成学校ゲームズ",
  description:
    "机上決戦！消しゴム落としは、机の上で消しゴムを弾いて相手を落とす、平成の休み時間あるあるをテーマにしたスマホ向けブラウザゲームです。",
  path: "/games/eraser-battle",
});

export default function EraserBattlePage() {
  const game = getGameBySlug("eraser-battle");

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
            href: "/games/chime-dash",
            title: "チャイムダッシュを見る",
            description: "2階廊下のダッシュゲームへ",
          },
          {
            href: "/games/kyusyoku-okawari",
            title: "給食おかわり戦争を見る",
            description: "給食室のおかわり争奪戦へ",
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
