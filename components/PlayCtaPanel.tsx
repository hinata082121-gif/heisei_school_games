import Link from "next/link";

type PlayCtaPanelProps = {
  gameTitle: string;
  gameUrl: string;
  gameSlug: string;
  description?: string;
};

export function PlayCtaPanel({
  gameTitle,
  gameUrl,
  gameSlug,
  description = "攻略を読んだら、実際にゲームで試してみよう。",
}: PlayCtaPanelProps) {
  return (
    <section className="chalkboard pixel-frame p-5 sm:p-7">
      <p className="font-mono text-xs font-black uppercase text-school-yellow">
        Play
      </p>
      <h2 className="chalk-text mt-1 text-2xl font-black leading-tight">
        今すぐ遊ぶ
      </h2>
      <p className="mt-3 text-base leading-8 text-chalk/90">{description}</p>
      <div className="mt-5 grid gap-3 sm:flex">
        <a
          aria-label={`${gameTitle}を遊ぶ。外部ゲームサイトへ移動します。`}
          className="pixel-button"
          href={gameUrl}
        >
          {gameTitle}を遊ぶ
        </a>
        <Link
          className="pixel-button pixel-button-secondary"
          href={`/games/${gameSlug}`}
        >
          ゲーム紹介を見る
        </Link>
      </div>
    </section>
  );
}
