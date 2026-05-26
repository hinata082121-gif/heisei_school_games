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
  desk: {
    base: "desk-top",
    label: "学校机と消しゴム落としをイメージしたエリア",
  },
  blackboard: {
    base: "blackboard-cleaner",
    label: "黒板前と黒板消しをイメージしたエリア",
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
              第{game.order}弾
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
          第{game.order}弾 / {game.areaName}
        </p>
        <h2 className="text-2xl font-black leading-tight sm:text-3xl">
          {game.title}
        </h2>
        <p className="mt-1 font-mono text-sm font-black text-ink/70">
          {game.subtitle}
        </p>
        <p className="mt-4 whitespace-pre-line text-base leading-8 sm:text-lg">
          {game.description}
        </p>
        <dl className="mt-5 grid gap-2 text-sm font-bold sm:grid-cols-3">
          <div className="pixel-frame-sm bg-white/70 px-3 py-2">
            <dt className="font-mono text-xs text-school-blue">時間</dt>
            <dd>{game.playTime}</dd>
          </div>
          <div className="pixel-frame-sm bg-white/70 px-3 py-2">
            <dt className="font-mono text-xs text-school-blue">操作</dt>
            <dd>{game.controls}</dd>
          </div>
          <div className="pixel-frame-sm bg-white/70 px-3 py-2">
            <dt className="font-mono text-xs text-school-blue">テーマ</dt>
            <dd>{game.theme}</dd>
          </div>
        </dl>
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
            プレイする
          </a>
        </div>
      </div>
    </article>
  );
}
