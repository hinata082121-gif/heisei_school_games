import type { Metadata } from "next";
import { GameListCard } from "@/components/GameListCard";
import { SchoolNoticeBanner } from "@/components/SchoolNoticeBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { games } from "@/data/games";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "ゲーム一覧｜平成学校ゲームズ",
  description:
    "平成学校ゲームズで遊べる、平成の学校あるあるをテーマにしたスマホ向け16bit風ブラウザゲームの一覧です。",
  path: "/games",
});

const upcomingThemes = [
  "休み時間バトル",
  "掃除当番ミッション",
  "放課後寄り道ゲーム",
  "席替え運命ルーレット",
  "テスト前あるあるゲーム",
];

export default function GamesPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
        <div className="notebook-panel pixel-frame mx-auto max-w-6xl p-5 sm:p-8">
          <p className="font-mono text-sm font-black text-school-blue">
            校内マップ / 教室案内
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-5xl">
            ゲーム一覧
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">
            平成学校ゲームズで遊べる、学校あるあるミニゲームの一覧です。
            廊下、給食、休み時間、放課後など、あの頃の小さな事件をスマホで遊べる16bit風ゲームにしています。
          </p>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SchoolNoticeBanner
            description="廊下、給食室、これから増える教室。気になる学校あるあるゲームを選んで遊んでください。"
            href="/guides"
            linkLabel="攻略・遊び方を見る"
            title="どの教室から入る？"
            variant="game"
          />
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Timetable"
            title="公開中のゲーム"
            description="時間割から教室を選ぶように、遊びたいゲームを選んでください。"
          />
          <div className="grid gap-6">
            {games.map((game) => (
              <GameListCard game={game} key={game.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="bulletin-board pixel-frame mx-auto max-w-6xl p-5 sm:p-7">
          <SectionHeading
            eyebrow="Next Rooms"
            title="次の教室も準備中"
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {upcomingThemes.map((theme) => (
              <li
                className="pixel-frame-sm bg-paper px-4 py-4 font-bold leading-7"
                key={theme}
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
