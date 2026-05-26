import type { Metadata } from "next";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { PageContainer } from "@/components/PageContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "よくある質問｜平成学校ゲームズ",
  description:
    "平成学校ゲームズの遊び方、対応端末、広告方針、ゲーム追加予定など、よくある質問をまとめたページです。",
  path: "/faq",
});

const faqs = [
  {
    question: "平成学校ゲームズとは何ですか？",
    answer:
      "平成学校ゲームズは、平成時代の学校あるあるをテーマにしたスマホ向け16bit風ブラウザゲームシリーズです。チャイム、給食、廊下、先生、休み時間など、学校生活の中にあった小さな事件をミニゲームとして楽しめるようにしています。",
  },
  {
    question: "無料で遊べますか？",
    answer:
      "公開中のゲームは、基本的にブラウザから無料で遊べます。今後の運営状況により仕様が変わる場合がありますが、公式サイトではゲーム紹介や攻略情報を分かりやすく案内していきます。",
  },
  {
    question: "スマホでも遊べますか？",
    answer:
      "はい。平成学校ゲームズは、TikTokやYouTubeなどからスマホでアクセスするユーザーを想定し、スマホで遊びやすいブラウザゲームとして制作しています。",
  },
  {
    question: "PCでも遊べますか？",
    answer:
      "ゲームやページによって表示の最適化は異なりますが、PCブラウザからもアクセスできます。基本的にはスマホでの閲覧とプレイを重視しています。",
  },
  {
    question: "ゲーム中に広告は表示されますか？",
    answer:
      "現時点では、ゲームプレイ画面やリザルト画面には広告を置かない方針です。広告を導入する場合も、ゲーム紹介ページ、攻略記事、ブログ記事などの読み物ページを中心に検討します。",
  },
  {
    question: "チャイムダッシュはどんなゲームですか？",
    answer:
      "チャイムダッシュは、チャイムが鳴る前に教室へ戻ることを目指す、平成学校あるある廊下ダッシュゲームです。先生の視線を意識しながら進む、短時間で遊べるブラウザゲームです。",
  },
  {
    question: "給食おかわり戦争はどんなゲームですか？",
    answer:
      "給食おかわり戦争は、人気給食メニューのおかわりをめぐってクラスメイトと勝負するミニゲームです。カレー、揚げパン、プリンなど、懐かしい給食の記憶をテーマにしています。",
  },
  {
    question: "今後ゲームは増えますか？",
    answer:
      "今後も、休み時間、掃除当番、席替え、放課後など、平成の学校あるあるをテーマにした新作ゲームを追加していく予定です。",
  },
  {
    question: "公式SNSはありますか？",
    answer:
      "TikTokとYouTubeで、ゲーム紹介、制作状況、平成学校あるあるネタなどを発信していく予定です。公式サイトのSNSページから確認できます。",
  },
  {
    question: "問い合わせはどこからできますか？",
    answer:
      "現在、お問い合わせフォームは準備中です。不具合報告、感想、掲載相談などについては、今後公式SNSや問い合わせフォームから受け付けられるようにする予定です。",
  },
];

export default function FaqPage() {
  return (
    <PageContainer eyebrow="FAQ Print" title="よくある質問">
      <p>
        平成学校ゲームズについて、遊び方や対応端末、広告方針、今後の更新予定などをまとめました。
      </p>
      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <section className="pixel-frame-sm bg-paper p-4" key={faq.question}>
            <p className="font-mono text-xs font-black text-school-blue">
              Q{index + 1}
            </p>
            <h2 className="mt-1 text-xl font-black leading-tight">
              {faq.question}
            </h2>
            <p className="mt-3 text-base leading-8 text-ink/80">{faq.answer}</p>
          </section>
        ))}
      </div>
      <InternalLinkPanel
        title="次に見るページ"
        description="質問を確認したら、ゲームや記事もあわせて見てください。"
        links={[
          { label: "ゲーム一覧を見る", href: "/games" },
          { label: "攻略・遊び方を見る", href: "/guides" },
          { label: "ブログを見る", href: "/blog" },
          { label: "SNSを見る", href: "/social" },
        ]}
      />
    </PageContainer>
  );
}
