import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ｜平成学校ゲームズ",
  description: "平成学校ゲームズへのお問い合わせに関する案内ページです。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer eyebrow="Contact" title="お問い合わせ">
      <p>
        現在、お問い合わせフォームは準備中です。ゲームの不具合報告、感想、取材・掲載相談などを受け付ける窓口を今後設置予定です。
      </p>
      <p>
        公式SNSや今後設置予定のフォームから連絡できるようにする予定です。個人情報の取り扱いについては、プライバシーポリシーをご確認ください。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link className="pixel-button pixel-button-secondary" href="/privacy">
          Privacy Policy
        </Link>
        <Link className="pixel-button pixel-button-secondary" href="/terms">
          Terms
        </Link>
      </div>
    </PageContainer>
  );
}
