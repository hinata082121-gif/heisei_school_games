import Link from "next/link";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/games", label: "ゲーム一覧" },
  { href: "/guides", label: "遊び方・攻略" },
  { href: "/about", label: "平成学校ゲームズとは" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <Link
          className="flex min-h-11 max-w-[42vw] shrink-0 items-center truncate text-sm font-black leading-tight text-ink focus-visible:outline focus-visible:outline-4 focus-visible:outline-school-yellow sm:max-w-none sm:text-xl"
          href="/"
        >
          平成学校ゲームズ
        </Link>
        <nav
          aria-label="主要ナビゲーション"
          className="min-w-0 flex-1 overflow-x-auto pb-1"
        >
          <ul className="flex w-max items-center gap-1 text-[13px] font-bold sm:ml-auto sm:gap-2 sm:text-base">
            {navItems.map((item) => (
              <li className="shrink-0" key={item.href}>
                <Link
                  className="block min-h-11 border-2 border-transparent px-2 py-2.5 transition hover:border-ink hover:bg-school-yellow focus-visible:border-ink focus-visible:bg-school-yellow focus-visible:outline-none sm:px-3"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
