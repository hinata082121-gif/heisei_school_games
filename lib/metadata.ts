import type { Metadata } from "next";
import { getSiteUrl, siteName } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      siteName,
      locale: "ja_JP",
      type: "website",
      url,
      // 将来 public/ogp-default.png を追加したら images をここで共通設定する。
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
