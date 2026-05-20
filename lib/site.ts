import { siteConfig } from "@/data/site";

export const siteName = siteConfig.siteName;

export const defaultTitle =
  "平成学校ゲームズ｜平成の学校あるあるを16bitブラウザゲームに";

export const defaultDescription = siteConfig.siteDescription;

export function getSiteUrl() {
  return siteConfig.siteUrl;
}
