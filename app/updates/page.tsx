import type { Metadata } from "next";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { PageContainer } from "@/components/PageContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "更新情報｜平成学校ゲームズ",
  description:
    "平成学校ゲームズ公式サイトの公開情報、ゲーム紹介ページ、攻略記事、ブログ、SNS導線などの更新履歴をまとめています。",
  path: "/updates",
});

const updates = [
  {
    date: "2026-05-20",
    category: "公式サイト",
    title: "平成学校ゲームズ公式サイトを公開しました",
    body: "平成の学校あるあるをテーマにしたブラウザゲームシリーズ「平成学校ゲームズ」の公式サイトを公開しました。ゲーム一覧、紹介ページ、攻略記事、ブログ、SNS導線をまとめています。",
  },
  {
    date: "2026-05-20",
    category: "ゲーム紹介",
    title: "チャイムダッシュ紹介ページを公開しました",
    body: "チャイムが鳴る前に教室へ戻る廊下ダッシュゲーム「チャイムダッシュ」の紹介ページを公開しました。ゲーム概要、遊び方、特徴、制作背景を掲載しています。",
  },
  {
    date: "2026-05-20",
    category: "ゲーム紹介",
    title: "給食おかわり戦争紹介ページを公開しました",
    body: "人気給食メニューのおかわりをめぐって勝負する「給食おかわり戦争」の紹介ページを公開しました。給食あるある、タイミングタップ、じゃんけん要素などを紹介しています。",
  },
  {
    date: "2026-05-20",
    category: "攻略",
    title: "攻略・遊び方ページを追加しました",
    body: "チャイムダッシュと給食おかわり戦争の遊び方、攻略のコツをまとめたページを追加しました。初めて遊ぶ人でも分かりやすいように、基本ルールとプレイのポイントを掲載しています。",
  },
  {
    date: "2026-05-20",
    category: "ブログ",
    title: "開発ログ・ブログを追加しました",
    body: "平成学校ゲームズの制作背景、平成学校あるある、スマホブラウザゲーム制作の工夫を紹介するブログページを追加しました。",
  },
  {
    date: "2026-05-20",
    category: "SNS",
    title: "TikTok・YouTube導線を追加しました",
    body: "公式サイトからTikTokとYouTubeへ移動できる導線を追加しました。今後、ゲーム紹介ショート、失敗シーン、平成学校あるあるネタなどを発信していく予定です。",
  },
  {
    date: "2026-05-20",
    category: "サイト運営",
    title: "FAQページと更新情報ページを追加しました",
    body: "よくある質問ページと更新情報ページを追加しました。公式サイトとして、遊び方、広告方針、対応端末、今後の予定を分かりやすく確認できるようにしています。",
  },
];

export default function UpdatesPage() {
  return (
    <PageContainer eyebrow="School News" title="更新情報">
      <p>
        平成学校ゲームズ公式サイトの公開情報、ゲーム紹介ページ、攻略記事、ブログ、SNS導線などの更新履歴をまとめています。
      </p>
      <div className="grid gap-4">
        {updates.map((update) => (
          <article className="pixel-frame-sm bg-paper p-4" key={update.title}>
            <div className="flex flex-wrap items-center gap-2">
              <time
                className="font-mono text-sm font-black text-school-blue"
                dateTime={update.date}
              >
                {update.date}
              </time>
              <span className="border-2 border-ink bg-school-yellow px-2 py-1 text-xs font-black">
                {update.category}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-black leading-tight">
              {update.title}
            </h2>
            <p className="mt-3 text-base leading-8 text-ink/80">{update.body}</p>
          </article>
        ))}
      </div>
      <InternalLinkPanel
        title="校内マップへ戻る"
        description="更新内容から、気になるページへ移動できます。"
        links={[
          { label: "トップページへ戻る", href: "/" },
          { label: "ゲーム一覧を見る", href: "/games" },
          { label: "ブログを見る", href: "/blog" },
        ]}
      />
    </PageContainer>
  );
}
