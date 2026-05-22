import type { Game } from "@/data/games";
import { AdSlot } from "@/components/AdSlot";
import { FeatureCard } from "@/components/FeatureCard";
import { HowToPlayCard } from "@/components/HowToPlayCard";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { PlayCtaPanel } from "@/components/PlayCtaPanel";
import { RelatedLinkCard } from "@/components/RelatedLinkCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SharePanel } from "@/components/SharePanel";

type RelatedLink = {
  href: string;
  title: string;
  description: string;
  external?: boolean;
};

type GameDetailContentProps = {
  game: Game;
  relatedLinks: RelatedLink[];
};

export function GameDetailContent({
  game,
  relatedLinks,
}: GameDetailContentProps) {
  return (
    <div className="px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <section className="notebook-panel pixel-frame p-5 sm:p-7">
          <SectionHeading eyebrow="Overview" title="どんなゲーム？" />
          <p className="whitespace-pre-line text-base leading-8 sm:text-lg">
            {game.overview}
          </p>
        </section>

        <section className="pixel-frame bg-paper p-5 sm:p-7">
          <SectionHeading eyebrow="How To Play" title="遊び方" />
          <ol className="grid gap-3 sm:grid-cols-2">
            {game.howToPlay.map((item, index) => (
              <HowToPlayCard
                key={item}
                step={index + 1}
                text={item}
              />
            ))}
          </ol>
        </section>

        <section className="pixel-frame bg-paper p-5 sm:p-7">
          <SectionHeading
            eyebrow="Feature"
            title={`${game.title}の特徴`}
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {game.features.map((feature, index) => (
              <FeatureCard
                index={index + 1}
                key={feature}
                text={feature}
              />
            ))}
          </ul>
        </section>

        <section className="chalkboard pixel-frame p-5 sm:p-7">
          <SectionHeading eyebrow="Production Note" inverted title="制作メモ" />
          <p className="whitespace-pre-line text-base leading-8 text-chalk/90 sm:text-lg">
            {game.productionNote}
          </p>
        </section>

        <AdSlot position="article-bottom" />

        <SharePanel
          hashtags={["平成学校ゲームズ", game.title]}
          text={getGameShareText(game)}
          title={`${game.title}｜平成学校ゲームズ`}
        />

        <section className="bulletin-board pixel-frame p-5 sm:p-7">
          <SectionHeading eyebrow="Links" title="関連リンク" />
          <div className="grid gap-3 sm:grid-cols-3">
            {relatedLinks.map((link) => (
              <RelatedLinkCard
                description={link.description}
                external={link.external}
                href={link.href}
                key={link.href}
                title={link.title}
              />
            ))}
          </div>
        </section>

        <PlayCtaPanel
          description="紹介を読んだら、実際にゲームで平成学校あるあるを遊んでみよう。"
          gameSlug={game.slug}
          gameTitle={game.title}
          gameUrl={game.url}
        />

        <InternalLinkPanel
          links={[
            {
              href: "/games",
              label: "ゲーム一覧を見る",
              description: "ほかの教室も見てみる",
            },
            {
              href: "/guides",
              label: "攻略・遊び方を見る",
              description: "遊び方とコツを確認する",
            },
            {
              href: "/blog",
              label: "開発ログ・ブログを見る",
              description: "制作背景や学校あるあるを読む",
            },
            {
              href: "/social",
              label: "SNSで見る",
              description: "ショート動画やお知らせの導線へ",
            },
          ]}
        />
      </div>
    </div>
  );
}

function getGameShareText(game: Game) {
  if (game.slug === "chime-dash") {
    return "平成の学校あるある「チャイムまでに教室へ戻る」を16bit風ゲームにしたチャイムダッシュを遊んでみた。";
  }

  if (game.slug === "kyusyoku-okawari") {
    return "平成の給食あるある「最後の一個をめぐるおかわり勝負」を16bit風ゲームにした給食おかわり戦争を遊んでみた。";
  }

  return "平成の休み時間あるある「机の上の消しゴム落とし」を16bit風ゲームにした机上決戦！消しゴム落としを遊んでみた。";
}
