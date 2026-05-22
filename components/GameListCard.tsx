import Link from "next/link";
import type { Game, RoomTheme } from "@/data/games";
import { StatusBadge } from "@/components/StatusBadge";
import { TagList } from "@/components/TagList";

type GameListCardProps = {
  game: Game;
};

const roomClasses: Record<RoomTheme, string> = {
  hallway: "hallway-floor",
  lunchroom: "lunch-counter",
  desk: "desk-top",
};

export function GameListCard({ game }: GameListCardProps) {
  return (
    <article className="pixel-frame grid overflow-hidden bg-paper lg:grid-cols-[0.42fr_0.58fr]">
      <div className={`${roomClasses[game.roomTheme]} min-h-44 p-4`}>
        <div className="flex h-full min-h-44 flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <span className="pixel-frame-sm bg-paper px-3 py-2 text-sm font-black">
              {game.areaName}
            </span>
            <span className="border-2 border-ink bg-board px-2 py-1 font-mono text-xs font-bold text-chalk shadow-pixel-sm">
              第{game.order}弾
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2" aria-hidden="true">
            <span className="h-10 border-2 border-ink bg-board" />
            <span className="h-10 border-2 border-ink bg-school-blue" />
            <span className="h-10 border-2 border-ink bg-school-yellow" />
            <span className="h-10 border-2 border-ink bg-school-red" />
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-sm font-black text-school-blue">
            第{game.order}弾 / {game.areaName}
          </p>
          <StatusBadge status={game.status} />
        </div>
        <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
          {game.title}
        </h2>
        <p className="mt-1 font-mono text-sm font-black text-ink/70">
          {game.subtitle}
        </p>
        <p className="mt-4 whitespace-pre-line text-base leading-8">
          {game.description}
        </p>
        <dl className="mt-5 grid gap-2 text-sm font-bold sm:grid-cols-3">
          <div className="pixel-frame-sm bg-white/70 px-3 py-2">
            <dt className="font-mono text-xs text-school-blue">Play Time</dt>
            <dd>プレイ時間：{game.playTime}</dd>
          </div>
          <div className="pixel-frame-sm bg-white/70 px-3 py-2">
            <dt className="font-mono text-xs text-school-blue">Control</dt>
            <dd>操作：{game.controls}</dd>
          </div>
          <div className="pixel-frame-sm bg-white/70 px-3 py-2">
            <dt className="font-mono text-xs text-school-blue">Theme</dt>
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
            aria-label={`${game.title}を今すぐ遊ぶ。外部ゲームサイトへ移動します。`}
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
