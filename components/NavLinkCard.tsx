import Link from "next/link";

type NavLinkCardProps = {
  href: string;
  title: string;
  description: string;
};

export function NavLinkCard({ href, title, description }: NavLinkCardProps) {
  return (
    <Link
      className="pixel-frame-sm block bg-paper p-4 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow"
      href={href}
    >
      <span className="text-lg font-black">{title}</span>
      <span className="mt-2 block text-sm leading-6 text-ink/75">{description}</span>
    </Link>
  );
}
