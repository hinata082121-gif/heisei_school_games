import Link from "next/link";

type RelatedLinkCardProps = {
  href: string;
  title: string;
  description: string;
  external?: boolean;
};

export function RelatedLinkCard({
  href,
  title,
  description,
  external = false,
}: RelatedLinkCardProps) {
  const className =
    "pixel-frame-sm block bg-paper p-4 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow";

  if (external) {
    return (
      <a
        aria-label={`${title}。外部ゲームサイトへ移動します。`}
        className={className}
        href={href}
      >
        <span className="text-lg font-black">{title}</span>
        <span className="mt-2 block text-sm leading-6 text-ink/75">
          {description}
        </span>
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      <span className="text-lg font-black">{title}</span>
      <span className="mt-2 block text-sm leading-6 text-ink/75">
        {description}
      </span>
    </Link>
  );
}
