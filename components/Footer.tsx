import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const footerLinks = [
  { href: "/games", label: "Games" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/social", label: "SNS" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-board-deep px-4 py-8 text-chalk sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-7 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="text-xl font-black">平成学校ゲームズ</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-chalk/80">
            平成の学校あるあるを、スマホで遊べる16bit風ブラウザゲームとして届ける個人開発シリーズです。
          </p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
        <nav aria-label="フッターナビゲーション">
          <ul className="grid grid-cols-2 gap-2 text-sm font-bold sm:flex sm:flex-wrap sm:justify-end sm:gap-x-4 sm:gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="block min-h-11 rounded-sm border border-chalk/20 px-3 py-2.5 underline-offset-4 hover:bg-chalk/10 hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow sm:min-h-0 sm:border-0 sm:px-0 sm:py-0"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-chalk/70 sm:col-span-2">
          © 2026 平成学校ゲームズ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
