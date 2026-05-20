"use client";

import { useMemo, useState } from "react";

type ShareButtonProps = {
  title: string;
  text: string;
  url?: string;
  hashtags?: string[];
  variant?: "primary" | "secondary" | "compact";
};

const variantClasses = {
  primary: "pixel-button",
  secondary: "pixel-button pixel-button-secondary",
  compact:
    "inline-flex min-h-10 items-center justify-center border-2 border-ink bg-paper px-3 py-2 text-sm font-black text-ink shadow-pixel-sm transition hover:bg-school-yellow focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow",
};

export function ShareButton({
  title,
  text,
  url,
  hashtags = ["平成学校ゲームズ"],
  variant = "primary",
}: ShareButtonProps) {
  const [message, setMessage] = useState("");

  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const hashtagText = useMemo(
    () =>
      hashtags
        .map((hashtag) => hashtag.replace(/^#/, "").trim())
        .filter(Boolean)
        .map((hashtag) => `#${hashtag}`)
        .join(" "),
    [hashtags],
  );
  const shareText = `${text}\n${hashtagText}\n${shareUrl}`.trim();

  async function handleShare() {
    const nav =
      typeof window !== "undefined"
        ? (window.navigator as Navigator & {
            share?: (data: ShareData) => Promise<void>;
            clipboard?: Clipboard;
          })
        : undefined;

    try {
      if (nav?.share) {
        await nav.share({
          title,
          text: `${text}\n${hashtagText}`.trim(),
          url: shareUrl,
        });
        setMessage("共有メニューを開きました");
        return;
      }

      if (nav?.clipboard?.writeText) {
        await nav.clipboard.writeText(shareText);
        setMessage("共有文をコピーしました");
        return;
      }

      const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText,
      )}`;
      window.open(xShareUrl, "_blank", "noopener,noreferrer");
      setMessage("共有ページを開きました");
    } catch {
      setMessage("共有できませんでした。時間をおいて再度お試しください。");
    }
  }

  return (
    <div>
      <button className={variantClasses[variant]} onClick={handleShare} type="button">
        このページを共有する
      </button>
      {message ? (
        <p className="mt-2 text-sm font-bold leading-6 text-ink/75" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
