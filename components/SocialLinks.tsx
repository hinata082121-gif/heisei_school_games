import type { SocialLink } from "@/data/site";
import { socialLinks } from "@/data/site";

type SocialLinksProps = {
  showUnavailable?: boolean;
  className?: string;
};

const platforms: SocialLink["platform"][] = ["TikTok", "YouTube", "X"];

export function SocialLinks({
  showUnavailable = false,
  className = "",
}: SocialLinksProps) {
  const availableLinks = socialLinks.filter((link) => link.url.length > 0);

  if (availableLinks.length === 0 && !showUnavailable) {
    return (
      <p className={`pixel-frame-sm bg-paper px-4 py-3 font-bold text-ink ${className}`}>
        公式SNSは準備中です
      </p>
    );
  }

  if (showUnavailable) {
    return (
      <ul className={`grid gap-3 sm:grid-cols-3 ${className}`} aria-label="SNSリンク">
        {platforms.map((platform) => {
          const link = socialLinks.find((item) => item.platform === platform);

          if (link?.url) {
            return (
              <li key={platform}>
                <a
                  aria-label={`平成学校ゲームズの${platform}を開く。外部サイトへ移動します。`}
                  className="pixel-button w-full bg-paper"
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {platform}
                </a>
              </li>
            );
          }

          return (
            <li
              className="pixel-frame-sm flex min-h-12 items-center justify-center bg-paper/80 px-4 py-3 text-center font-bold text-ink/65"
              key={platform}
            >
              {platform}：準備中
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`} aria-label="SNSリンク">
      {availableLinks.map((link) => (
        <li key={link.platform}>
          <a
            aria-label={`平成学校ゲームズの${link.platform}を開く。外部サイトへ移動します。`}
            className="pixel-button pixel-button-secondary"
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
