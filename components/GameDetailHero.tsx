import Link from "next/link";
import type { Game, RoomTheme } from "@/data/games";
import { StatusBadge } from "@/components/StatusBadge";
import { TagList } from "@/components/TagList";

type GameDetailHeroProps = {
  game: Game;
};

const heroVisuals: Record<RoomTheme, { className: string; label: string }> = {
  hallway: {
    className: "hallway-floor",
    label: "廊下と教室前をイメージしたヒーローエリア",
  },
  lunchroom: {
    className: "lunch-counter",
    label: "給食室と配膳台をイメージしたヒーローエリア",
  },
  desk: {
    className: "desk-top",
    label: "学校机と消しゴム落としをイメージしたヒーローエリア",
  },
};

export function GameDetailHero({ game }: GameDetailHeroProps) {
  const visual = heroVisuals[game.roomTheme];

  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="chalkboard pixel-frame p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm font-black text-school-yellow">
              第{game.order}弾 / {game.areaName}
            </p>
            <StatusBadge status={game.status} />
          </div>
          <h1 className="chalk-text mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {game.title}
          </h1>
          <p className="mt-2 font-mono text-base font-black text-chalk/75">
            {game.subtitle}
          </p>
          <p className="chalk-text mt-4 text-xl font-bold leading-9 sm:text-2xl">
            {game.catchphrase}
          </p>
          <p className="mt-4 whitespace-pre-line text-base leading-8 text-chalk/90 sm:text-lg">
            {detailLead(game)}
          </p>
          <div className="mt-6">
            <TagList tags={game.tags} />
          </div>
          <dl className="mt-6 grid gap-2 text-sm font-bold text-ink sm:grid-cols-3">
            <div className="pixel-frame-sm bg-paper px-3 py-2">
              <dt className="font-mono text-xs text-school-blue">Play Time</dt>
              <dd>{game.playTime}</dd>
            </div>
            <div className="pixel-frame-sm bg-paper px-3 py-2">
              <dt className="font-mono text-xs text-school-blue">Control</dt>
              <dd>{game.controls}</dd>
            </div>
            <div className="pixel-frame-sm bg-paper px-3 py-2">
              <dt className="font-mono text-xs text-school-blue">Theme</dt>
              <dd>{game.theme}</dd>
            </div>
          </dl>
          <div className="mt-7 grid gap-3 sm:flex">
            <a
              aria-label={`${game.title}を今すぐ遊ぶ。外部ゲームサイトへ移動します。`}
              className="pixel-button"
              href={game.url}
            >
              今すぐ遊ぶ
            </a>
            <Link className="pixel-button pixel-button-secondary" href="/games">
              ゲーム一覧に戻る
            </Link>
          </div>
        </div>

        <div
          aria-label={visual.label}
          className={`pixel-frame ${visual.className} p-4`}
          role="img"
        >
          <div className="grid min-h-80 grid-rows-[auto_1fr_auto] gap-4">
            <div className="flex items-center justify-between gap-3">
              <span className="pixel-frame-sm bg-paper px-3 py-2 text-sm font-black">
                {game.areaName}
              </span>
              <span className="border-2 border-ink bg-board px-2 py-1 font-mono text-xs font-bold text-chalk">
                GAME GUIDE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <span className="border-2 border-ink bg-board/95 p-3 text-sm font-black text-chalk">
                目的
              </span>
              <span className="border-2 border-ink bg-paper/95 p-3 text-sm font-black">
                操作
              </span>
              <span className="border-2 border-ink bg-school-blue p-3 text-sm font-black text-white">
                緊張感
              </span>
              <span className="border-2 border-ink bg-school-yellow p-3 text-sm font-black">
                結果
              </span>
            </div>
            <div className="h-9 border-2 border-ink bg-school-red" />
          </div>
        </div>
      </div>
    </section>
  );
}

function detailLead(game: Game) {
  if (game.slug === "chime-dash") {
    return "チャイムダッシュは、先生に見つからないように廊下を走り、チャイムまでに教室へ戻る平成学校あるあるブラウザゲームです。\nスマホで手軽に遊べる、16bit風の廊下ダッシュゲームです。";
  }

  if (game.slug === "kyusyoku-okawari") {
    return "給食おかわり戦争は、人気給食メニューのおかわりをめぐってクラスメイトと争う、平成学校あるあるブラウザゲームです。\nカレー、揚げパン、プリンなど、懐かしい給食メニューをテーマにしたスマホ向けミニゲームです。";
  }

  return "机上決戦！消しゴム落としは、机の上で消しゴムを弾き、相手を机外へ落とす平成学校あるあるブラウザゲームです。\nスワイプだけで遊べる、スマホ向けの短時間物理アクションです。";
}
