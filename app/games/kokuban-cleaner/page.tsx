import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetailContent } from "@/components/GameDetailContent";
import { GameDetailHero } from "@/components/GameDetailHero";
import { getGameBySlug } from "@/data/games";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "黒板消しパタパタ選手権｜平成学校ゲームズ",
  description:
    "黒板消しパタパタ選手権は、日直としてタイミングよくタップしながら黒板消しのチョーク粉を落とす、30秒のスマホ向けブラウザゲームです。",
  path: "/games/kokuban-cleaner",
});

export default function KokubanCleanerPage() {
  const game = getGameBySlug("kokuban-cleaner");

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
            href: "/games/eraser-battle",
            title: "机上決戦！消しゴム落としを見る",
            description: "休み時間の机上バトルへ",
          },
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
