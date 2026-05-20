import Link from "next/link";

export type InternalLinkItem = {
  label: string;
  href: string;
  description?: string;
};

type InternalLinkPanelProps = {
  title?: string;
  description?: string;
  links: InternalLinkItem[];
};

export function InternalLinkPanel({
  title = "校内をまわる",
  description = "他の教室や掲示物も見ていってください。",
  links,
}: InternalLinkPanelProps) {
  return (
    <section className="pixel-frame bg-paper p-5 sm:p-7">
      <p className="font-mono text-xs font-black uppercase text-school-blue">
        School Map
      </p>
      <h2 className="mt-1 text-2xl font-black leading-tight">{title}</h2>
      <p className="mt-3 text-base leading-8 text-ink/80">{description}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            className="pixel-frame-sm block bg-paper p-4 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow"
            href={link.href}
            key={link.href}
          >
            <span className="text-lg font-black">{link.label}</span>
            {link.description ? (
              <span className="mt-2 block text-sm leading-6 text-ink/75">
                {link.description}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
