import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function SnsEntranceSection() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="bulletin-board pixel-frame mx-auto max-w-6xl p-5 sm:p-7">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-xs font-black uppercase text-school-blue">
              Broadcast
            </p>
            <h2 className="mt-1 text-2xl font-black leading-tight sm:text-3xl">
              ショート動画でも見る
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8">
              制作中の様子、ゲームの失敗シーン、平成学校あるあるネタをTikTokやYouTubeで発信予定です。
            </p>
          </div>
          <div className="grid gap-3">
            <SocialLinks />
            <Link className="pixel-button pixel-button-secondary" href="/social">
              SNSページを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
