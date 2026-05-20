export type AdPosition =
  | "article-top"
  | "article-middle"
  | "article-bottom"
  | "sidebar"
  | "home-section";

export const ADSENSE_ENABLED =
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim() ?? "";

const allowedExactPaths = new Set([
  "/",
  "/about",
  "/games",
  "/games/chime-dash",
  "/games/kyusyoku-okawari",
  "/guides",
  "/blog",
]);

const allowedPathPrefixes = ["/guides/", "/blog/"];

const deniedExactPaths = new Set([
  "/privacy",
  "/terms",
  "/contact",
  "/404",
  "/not-found",
  "/error",
  "/play",
]);

const deniedPathPrefixes = [
  "/play/",
  "/privacy/",
  "/terms/",
  "/contact/",
  "/not-found/",
  "/error/",
];

export const adPositions: Record<AdPosition, { label: string; minHeight: string }> = {
  "article-top": {
    label: "記事上部",
    minHeight: "min-h-24",
  },
  "article-middle": {
    label: "記事中部",
    minHeight: "min-h-28",
  },
  "article-bottom": {
    label: "記事下部",
    minHeight: "min-h-28",
  },
  sidebar: {
    label: "サイドバー",
    minHeight: "min-h-40",
  },
  "home-section": {
    label: "ホームセクション",
    minHeight: "min-h-24",
  },
};

export function isAdsEnabled() {
  return ADSENSE_ENABLED && ADSENSE_CLIENT_ID.length > 0;
}

export function isAdDeniedPath(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  if (deniedExactPaths.has(normalizedPathname)) {
    return true;
  }

  return deniedPathPrefixes.some((prefix) => normalizedPathname.startsWith(prefix));
}

export function isAdAllowedPath(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  if (isAdDeniedPath(normalizedPathname)) {
    return false;
  }

  if (allowedExactPaths.has(normalizedPathname)) {
    return true;
  }

  return allowedPathPrefixes.some((prefix) => normalizedPathname.startsWith(prefix));
}

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withoutQuery = pathname.split("?")[0]?.split("#")[0] ?? "/";
  return withoutQuery.endsWith("/") && withoutQuery.length > 1
    ? withoutQuery.slice(0, -1)
    : withoutQuery;
}
