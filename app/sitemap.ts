import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { games } from "@/data/games";
import { guides } from "@/data/guides";
import { getSiteUrl } from "@/lib/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: SitemapEntry[] = [
    createEntry(siteUrl, "/", "2026-05-20", "weekly", 1),
    createEntry(siteUrl, "/about", "2026-05-20", "monthly", 0.7),
    createEntry(siteUrl, "/contact", "2026-05-20", "yearly", 0.4),
    createEntry(siteUrl, "/privacy", "2026-05-20", "yearly", 0.3),
    createEntry(siteUrl, "/terms", "2026-05-20", "yearly", 0.3),
    createEntry(siteUrl, "/games", "2026-05-20", "weekly", 0.9),
    createEntry(siteUrl, "/guides", "2026-05-20", "weekly", 0.8),
    createEntry(siteUrl, "/blog", "2026-05-20", "weekly", 0.8),
    createEntry(siteUrl, "/social", "2026-05-20", "monthly", 0.6),
    createEntry(siteUrl, "/faq", "2026-05-20", "monthly", 0.6),
    createEntry(siteUrl, "/updates", "2026-05-20", "monthly", 0.6),
  ];

  const gameRoutes = games.map((game) =>
    createEntry(siteUrl, `/games/${game.slug}`, "2026-05-20", "weekly", 0.8),
  );

  const guideRoutes = guides.map((guide) =>
    createEntry(
      siteUrl,
      `/guides/${guide.slug}`,
      guide.updatedAt || guide.publishedAt,
      "monthly",
      0.7,
    ),
  );

  const blogRoutes = blogPosts.map((post) =>
    createEntry(
      siteUrl,
      `/blog/${post.slug}`,
      post.updatedAt || post.publishedAt,
      "monthly",
      0.7,
    ),
  );

  return [...staticRoutes, ...gameRoutes, ...guideRoutes, ...blogRoutes];
}

function createEntry(
  siteUrl: string,
  path: string,
  lastModified: string,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
): SitemapEntry {
  return {
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}
