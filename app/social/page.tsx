import type { Metadata } from "next";
import { InternalLinkPanel } from "@/components/InternalLinkPanel";
import { SocialLinks } from "@/components/SocialLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "SNSで見る｜平成学校ゲームズ",
  description:
    "平成学校ゲームズのTikTok、YouTube、XなどSNS導線をまとめたページです。ゲーム紹介、制作ログ、平成学校あるあるネタを発信予定です。",
  path: "/social",
});

const plannedContents = [
  "ゲーム紹介ショート",
  "先生に怒られる失敗シーン",
  "給食おかわりの勝利・敗北リザルト",
  "平成学校あるあるネタ",
  "制作中のアップデート",
  "新作ゲームのお知らせ",
];

export default function SocialPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
        <div className="bulletin-board pixel-frame mx-auto max-w-6xl p-5 sm:p-8">
          <p className="font-mono text-sm font-black text-school-blue">
            校内放送 / 部活勧誘ポスター
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-5xl">
            SNSで見る平成学校ゲームズ
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">
            平成学校ゲームズの制作状況、ゲーム紹介、失敗シーン、平成学校あるあるネタをショート動画でも発信していく予定です。
          </p>
          <div className="mt-6">
            <SocialLinks showUnavailable />
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="notebook-panel pixel-frame p-5 sm:p-7">
            <p className="font-mono text-xs font-black uppercase text-school-blue">
              Contents
            </p>
            <h2 className="mt-1 text-2xl font-black leading-tight">
              SNSで発信予定の内容
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {plannedContents.map((content) => (
                <li
                  className="pixel-frame-sm bg-paper px-4 py-4 font-bold leading-7"
                  key={content}
                >
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <InternalLinkPanel
            links={[
              {
                href: "/games",
                label: "ゲーム一覧",
                description: "公開中のゲームを選ぶ",
              },
              {
                href: "/guides",
                label: "攻略・遊び方",
                description: "遊び方と攻略のコツを見る",
              },
              {
                href: "/blog",
                label: "開発ログ・ブログ",
                description: "制作背景や学校あるあるを読む",
              },
            ]}
            title="SNSから来たら次はこちら"
          />
        </div>
      </section>
    </>
  );
}
