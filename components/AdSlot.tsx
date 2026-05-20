"use client";

import {
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
  className?: string;
};

export function AdSlot({ position, label, className = "" }: AdSlotProps) {
  const pathname = usePathname();

  if (isAdDeniedPath(pathname) || !isAdAllowedPath(pathname)) {
    return null;
  }

  const positionConfig = adPositions[position];

  if (isAdsEnabled()) {
    return (
      <aside
        aria-label={label ?? `広告枠 ${positionConfig.label}`}
        className={`pixel-frame-sm ${positionConfig.minHeight} flex items-center justify-center bg-paper/80 p-4 text-center ${className}`}
      >
        {/* TODO: AdSense審査通過後、公式の広告ユニットとscript読み込みを安全なページに限定して実装する。 */}
        <span className="font-mono text-xs font-black text-ink/60">
          広告枠
        </span>
      </aside>
    );
  }

  return (
    <aside
      aria-hidden="true"
      className={`border-2 border-dashed border-ink/35 bg-paper/45 p-4 text-center ${positionConfig.minHeight} flex items-center justify-center ${className}`}
    >
      <span className="font-mono text-xs font-black text-ink/45">
        広告枠予定
      </span>
    </aside>
  );
}
