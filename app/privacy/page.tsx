import type { Metadata } from "next";
import { PageContainer } from "@/components/PageContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー｜平成学校ゲームズ",
  description: "平成学校ゲームズのプライバシーポリシーを掲載しています。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageContainer eyebrow="Privacy Policy" title="プライバシーポリシー">
      <section>
        <h2 className="text-2xl font-black">基本方針</h2>
        <p className="mt-3">
          平成学校ゲームズは、ユーザーが安心してサイトおよび関連ゲームを利用できるよう、取得する情報の範囲を必要最小限にとどめ、適切な管理に努めます。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">取得する可能性のある情報</h2>
        <p className="mt-3">
          当サイトでは、サイト改善、表示確認、不具合調査のため、アクセス日時、閲覧ページ、利用端末、ブラウザ情報、参照元などの情報を取得する可能性があります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">お問い合わせ時に取得する情報</h2>
        <p className="mt-3">
          今後お問い合わせフォームを設置した場合、返信や確認のために、名前、メールアドレス、問い合わせ内容などを取得することがあります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">アクセス解析について</h2>
        <p className="mt-3">
          当サイトでは、今後サイト改善のためにアクセス解析ツールを導入する可能性があります。現時点ではGoogle Analytics等のアクセス解析コードは実装していません。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">広告配信について</h2>
        <p className="mt-3">
          当サイトでは、今後第三者配信の広告サービスを利用する可能性があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するためCookieを使用する場合があります。
          Cookieにより個人を直接特定する情報を取得するものではありません。ユーザーはブラウザ設定によりCookieを無効にできます。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">Cookieについて</h2>
        <p className="mt-3">
          Cookieは、ブラウザに保存される小さな情報です。当サイトでは、将来的なアクセス解析や広告配信、表示改善のためにCookieを利用する可能性があります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">第三者配信事業者について</h2>
        <p className="mt-3">
          広告配信サービスやアクセス解析サービスを導入した場合、各事業者が定めるプライバシーポリシーに基づいて情報が取り扱われる場合があります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">個人情報の第三者提供について</h2>
        <p className="mt-3">
          取得した個人情報は、法令に基づく場合または本人の同意がある場合を除き、不正に第三者へ提供しません。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">免責事項</h2>
        <p className="mt-3">
          当サイトの情報は、可能な限り正確な内容を掲載するよう努めますが、内容の正確性、完全性、最新性を保証するものではありません。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">外部リンクについて</h2>
        <p className="mt-3">
          当サイトには外部サイトへのリンクが含まれます。リンク先での個人情報の取り扱いや内容について、当サイトは責任を負いません。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">プライバシーポリシーの変更について</h2>
        <p className="mt-3">
          本ポリシーは、サービス内容の変更、広告配信やアクセス解析の導入、法令改正などに応じて変更される場合があります。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-black">お問い合わせ窓口について</h2>
        <p className="mt-3">
          個人情報の取り扱いに関するお問い合わせは、今後設置予定のお問い合わせフォームまたは公式SNSから受け付ける予定です。
        </p>
      </section>
    </PageContainer>
  );
}
