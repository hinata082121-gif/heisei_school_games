export type SocialPlatform = "TikTok" | "YouTube" | "X";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
  label: string;
};

export const siteName = "平成学校ゲームズ";

export const siteDescription =
  "平成学校ゲームズは、廊下ダッシュ、給食おかわり争奪戦、消しゴム落としなど平成時代の学校あるあるをテーマにしたスマホ向け16bit風ブラウザゲームシリーズです。";

export const mainCopy = "平成の学校あるあるを、16bitブラウザゲームに。";

export const subCopy =
  "チャイム、給食、廊下、消しゴム落とし。\nあの頃の小さな事件を、スマホで遊べるミニゲームにしました。";

export const siteUrl = getPublicUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  "http://localhost:3000",
);

export const socialLinks: SocialLink[] = [
  {
    platform: "TikTok",
    url: getPublicUrl(process.env.NEXT_PUBLIC_TIKTOK_URL),
    label: "TikTok",
  },
  {
    platform: "YouTube",
    url: getPublicUrl(process.env.NEXT_PUBLIC_YOUTUBE_URL),
    label: "YouTube",
  },
  {
    platform: "X",
    url: getPublicUrl(process.env.NEXT_PUBLIC_X_URL),
    label: "X",
  },
];

export const gameUrls = {
  chimeDash: "https://chimedash.vercel.app/",
  kyusyokuOkawari: "https://kyusyoku-okawari.vercel.app/",
  eraserBattle: "https://keshigomu-battle.vercel.app/",
};

export const siteConfig = {
  siteName,
  siteDescription,
  siteUrl,
  socialLinks,
  mainCopy,
  subCopy,
  gameUrls,
};

function getPublicUrl(value?: string, fallback = "") {
  return (value?.trim() || fallback).replace(/\/$/, "");
}
