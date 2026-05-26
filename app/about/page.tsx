import type { Metadata } from "next";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { PageContainer } from "@/components/PageContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "平成学校ゲームズとは｜平成学校ゲームズ",
  description:
    "平成学校ゲームズのコンセプト、制作方針、今後の展開について紹介します。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageContainer eyebrow="About" title="平成学校ゲームズとは？">
      <p>
        平成学校ゲームズは、平成時代の学校あるあるをテーマにした、スマホで遊べる16bit風ブラウザゲームシリーズです。
        チャイム、給食、廊下、先生、休み時間、放課後など、あの頃の小さな事件をミニゲームとして再構成しています。
      </p>
      <p>
        今後、ゲーム紹介、攻略記事、開発ログ、平成学校あるある記事などを追加していく予定です。
      </p>
      <InternalLinkPanel
        title="次に見る教室"
        description="シリーズの雰囲気が分かったら、ゲームや制作ログも見ていってください。"
        links={[
          {
            label: "ゲーム一覧を見る",
            href: "/games",
            description: "公開中の学校あるあるゲームを選べます。",
          },
          {
            label: "開発ログを読む",
            href: "/blog",
            description: "制作メモや平成学校あるあるの記事をまとめています。",
          },
          {
            label: "よくある質問",
            href: "/faq",
            description: "遊び方、対応端末、広告方針を確認できます。",
          },
          {
            label: "更新情報",
            href: "/updates",
            description: "公式サイトの公開情報と更新履歴をまとめています。",
          },
          {
            label: "SNSで見る",
            href: "/social",
            description: "ショート動画や制作状況の発信予定を確認できます。",
          },
        ]}
      />
    </PageContainer>
  );
}
