"use client";

import {
  ADSENSE_CLIENT_ID,
  adPositions,
  isAdAllowedPath,
  isAdDeniedPath,
  isAdsEnabled,
  type AdPosition,
} from "@/lib/ads";
import { usePathname } from "next/navigation";

type AdSlotProps = {
  position: AdPosition;
  label?: string;
  slot?: string;
  format?: string;
  layout?: string;
  className?: string;
};

export function AdSlot({
  position,
  label,
  slot,
  format = "auto",
  layout,
  className = "",
}: AdSlotProps) {
  const pathname = usePathname();

  if (isAdDeniedPath(pathname) || !isAdAllowedPath(pathname)) {
    return null;
  }

  const positionConfig = adPositions[position];

  if (isAdsEnabled() && slot) {
    return (
      <aside
        aria-label={label ?? `広告枠 ${positionConfig.label}`}
        className={`pixel-frame-sm ${positionConfig.minHeight} bg-paper/80 p-4 text-center ${className}`}
      >
        <p className="mb-2 font-mono text-[11px] font-black text-ink/55">
          スポンサーリンク
        </p>
        <ins
          className="adsbygoogle block"
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-format={format}
          data-ad-layout={layout}
          data-ad-slot={slot}
          data-full-width-responsive="true"
          style={{ display: "block" }}
        />
      </aside>
    );
  }

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <aside
      aria-hidden="true"
      className={`border-2 border-dashed border-ink/35 bg-paper/45 p-4 text-center ${positionConfig.minHeight} flex items-center justify-center ${className}`}
    >
      <span className="font-mono text-xs font-black text-ink/45">
        広告枠予定（開発表示）
      </span>
    </aside>
  );
}
