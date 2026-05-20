import Link from "next/link";
import type { ArticleRelatedLink } from "@/data/guides";
import { SectionHeading } from "@/components/SectionHeading";

type RelatedLinksProps = {
  links: ArticleRelatedLink[];
};

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <section className="bulletin-board pixel-frame p-5 sm:p-7">
      <SectionHeading eyebrow="Related" title="関連リンク" />
      <div className="grid gap-3 sm:grid-cols-3">
        {links.map((link) => (
          <Link
            className="pixel-frame-sm block bg-paper p-4 text-base font-black leading-7 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
