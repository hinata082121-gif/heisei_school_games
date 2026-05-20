import type { Metadata } from "next";
import { PageContainer } from "@/components/PageContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "利用規約｜平成学校ゲームズ",
  description: "平成学校ゲームズの利用規約を掲載しています。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageContainer eyebrow="Terms" title="利用規約">
      <section>
        <h2 className="text-2xl font-black">本サイトについて</h2>
        <p className="mt-3">
          平成学校ゲームズは、個人開発によるブラウザゲームシリーズおよび関連情報を提供する公式ホームページです。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">ゲーム利用について</h2>
        <p className="mt-3">
          本サイトからリンクするゲームは、各ゲームサイト上で提供されます。ユーザーは、利用環境に応じて自己の責任でゲームを利用するものとします。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">禁止事項</h2>
        <ul className="mt-3 grid gap-3">
          {[
            "不正アクセス",
            "サイトやゲームの改ざん",
            "過度な負荷をかける行為",
            "他者への迷惑行為",
            "法令または公序良俗に反する行為",
            "当サイトの運営を妨害する行為",
          ].map((item) => (
            <li className="pixel-frame-sm bg-paper px-4 py-3 font-bold" key={item}>
              ・{item}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-black">知的財産権</h2>
        <p className="mt-3">
          本サイトに掲載される文章、デザイン、ゲーム名、構成などの権利は、運営者または正当な権利者に帰属します。無断転載や不正利用を禁止します。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">外部リンク</h2>
        <p className="mt-3">
          本サイトには外部サイトへのリンクが含まれます。リンク先の内容、サービス、個人情報の取り扱いについては、各リンク先の方針をご確認ください。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">広告・アクセス解析について</h2>
        <p className="mt-3">
          当サイトでは、今後広告配信サービスやアクセス解析ツールを導入する可能性があります。導入時は、プライバシーポリシーに基づき適切に運用します。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">免責事項</h2>
        <p className="mt-3">
          本サイトおよびゲームの利用により発生した損害について、運営者は可能な範囲で情報の正確性や安定性に努めますが、すべての不具合、損害、動作を保証するものではありません。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">サービス内容の変更・停止</h2>
        <p className="mt-3">
          運営者は、事前の告知なく本サイトや関連コンテンツの内容変更、公開停止、削除を行う場合があります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">利用規約の変更</h2>
        <p className="mt-3">
          本規約は、サイト内容や運営方針の変更に応じて、予告なく変更される場合があります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">お問い合わせ</h2>
        <p className="mt-3">
          本規約に関するお問い合わせは、今後設置予定のお問い合わせフォームまたは公式SNSから受け付ける予定です。
        </p>
      </section>
    </PageContainer>
  );
}
