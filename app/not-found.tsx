import Link from "next/link";

const links = [
  { href: "/", label: "トップへ戻る" },
  { href: "/games", label: "ゲーム一覧を見る" },
  { href: "/guides", label: "攻略を見る" },
  { href: "/blog", label: "ブログを見る" },
];

export default function NotFound() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="bulletin-board pixel-frame mx-auto max-w-4xl p-5 sm:p-8">
        <div className="chalkboard pixel-frame p-5 sm:p-8">
          <p className="font-mono text-sm font-black text-school-yellow">
            404 / 閉まった教室
          </p>
          <h1 className="chalk-text mt-3 text-3xl font-black leading-tight sm:text-5xl">
            この教室はまだ開いていません
          </h1>
          <p className="mt-5 text-base leading-8 text-chalk/90 sm:text-lg">
            指定されたページは見つかりませんでした。
            <br />
            校内マップに戻って、別の教室を探してみてください。
          </p>
        </div>
        <nav aria-label="404ページの移動先" className="mt-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="pixel-button w-full" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
