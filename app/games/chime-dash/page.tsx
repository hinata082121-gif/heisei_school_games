import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetailContent } from "@/components/GameDetailContent";
import { GameDetailHero } from "@/components/GameDetailHero";
import { getGameBySlug } from "@/data/games";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "チャイムダッシュ｜平成学校ゲームズ",
  description:
    "チャイムダッシュは、先生に見つからないように廊下を走り、チャイムまでに教室へ戻る平成学校あるあるブラウザゲームです。",
  path: "/games/chime-dash",
});

export default function ChimeDashPage() {
  const game = getGameBySlug("chime-dash");

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
            href: "/guides/chime-dash-how-to-play",
            title: "チャイムダッシュの遊び方",
            description: "基本ルールと操作の考え方",
          },
          {
            href: "/guides/chime-dash-strategy",
            title: "チャイムダッシュ攻略",
            description: "先生に見つからず戻るコツ",
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
