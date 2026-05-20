import Link from "next/link";

type SchoolNoticeBannerProps = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  variant?: "notice" | "update" | "game" | "sns";
};

const variantClass = {
  notice: "bg-paper",
  update: "notebook-panel",
  game: "hallway-floor",
  sns: "bulletin-board",
};

export function SchoolNoticeBanner({
  title,
  description,
  href,
  linkLabel,
  variant = "notice",
}: SchoolNoticeBannerProps) {
  return (
    <aside className={`pixel-frame ${variantClass[variant]} p-5 sm:p-6`}>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-mono text-xs font-black uppercase text-school-blue">
            School Notice
          </p>
          <h2 className="mt-1 text-2xl font-black leading-tight">{title}</h2>
          <p className="mt-2 text-base leading-7 text-ink/80">{description}</p>
        </div>
        {href && linkLabel ? (
          <Link className="pixel-button" href={href}>
            {linkLabel}
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
