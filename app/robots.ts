import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 将来 /admin や /api/private を追加する場合は、ここに disallow を追加する。
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
