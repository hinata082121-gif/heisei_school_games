export type SocialPlatform = "TikTok" | "YouTube" | "X";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
  label: string;
};

export const siteName = "平成学校ゲームズ";

export const siteDescription =
  "平成の学校あるあるをテーマにしたスマホ向けブラウザゲームシリーズ。廊下ダッシュ、給食おかわり争奪戦、消しゴム落とし、黒板消しパタパタなど、短時間で遊べるミニゲームを公開中。";

export const mainCopy = "平成の学校あるあるを、16bitブラウザゲームに。";

export const subCopy =
  "チャイム、給食、廊下、消しゴム落とし、黒板消し。\nあの頃の小さな事件を、スマホで遊べるミニゲームにしました。";

export const siteUrl = getPublicUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://heisei-school-games.vercel.app",
);

export const contactUrl = getPublicUrl(
  process.env.NEXT_PUBLIC_CONTACT_URL,
  "https://github.com/hinata082121-gif/heisei_school_games/issues",
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
  kokubanCleaner: "https://kokuban-cleaner.vercel.app/",
};

export const siteConfig = {
  siteName,
  siteDescription,
  siteUrl,
  socialLinks,
  mainCopy,
  subCopy,
  gameUrls,
  contactUrl,
};

function getPublicUrl(value?: string, fallback = "") {
  return (value?.trim() || fallback).replace(/\/$/, "");
}
