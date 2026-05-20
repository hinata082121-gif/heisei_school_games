import Link from "next/link";
import type { Game, RoomTheme } from "@/data/games";
import { TagList } from "@/components/TagList";

type GameRoomCardProps = {
  game: Game;
};

const roomVisuals: Record<RoomTheme, { base: string; label: string }> = {
  hallway: {
    base: "hallway-floor",
    label: "廊下と教室前をイメージしたエリア",
  },
  lunchroom: {
    base: "lunch-counter",
    label: "給食室と配膳台をイメージしたエリア",
  },
};

export function GameRoomCard({ game }: GameRoomCardProps) {
  const visual = roomVisuals[game.roomTheme];

  return (
    <article className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
      <div
        className={`pixel-frame min-h-56 overflow-hidden ${visual.base}`}
        aria-label={visual.label}
        role="img"
      >
        <div className="flex h-full min-h-56 flex-col justify-between p-4">
          <div className="flex items-start justify-between gap-3">
            <span className="pixel-frame-sm bg-paper px-3 py-2 text-sm font-black">
              {game.areaName}
            </span>
            <span className="border-2 border-ink bg-board px-2 py-1 font-mono text-xs font-bold text-chalk">
              16BIT
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2" aria-hidden="true">
            <span className="h-16 border-2 border-ink bg-school-blue/80" />
            <span className="h-16 border-2 border-ink bg-paper/90" />
            <span className="h-16 border-2 border-ink bg-school-red/80" />
          </div>
        </div>
      </div>

      <div className="pixel-frame bg-paper p-5 sm:p-6">
        <p className="mb-2 font-mono text-sm font-bold text-school-blue">
          {game.areaName}
        </p>
        <h2 className="text-2xl font-black leading-tight sm:text-3xl">
          {game.title}
        </h2>
        <p className="mt-4 whitespace-pre-line text-base leading-8 sm:text-lg">
          {game.description}
        </p>
        <div className="mt-5">
          <TagList tags={game.tags} />
        </div>
        <div className="mt-6 grid gap-3 sm:flex">
          <Link
            className="pixel-button pixel-button-secondary"
            href={`/games/${game.slug}`}
          >
            詳しく見る
          </Link>
          <a
            aria-label={`${game.title}で遊ぶ。外部ゲームサイトへ移動します。`}
            className="pixel-button"
            href={game.url}
          >
            このゲームで遊ぶ
          </a>
        </div>
      </div>
    </article>
  );
}
