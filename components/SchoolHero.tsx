import Link from "next/link";

export function SchoolHero() {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="chalkboard pixel-frame p-5 sm:p-8">
          <p className="font-mono text-sm font-black text-school-yellow">
            校門前 / 公式ポータル
          </p>
          <h1 className="chalk-text mt-3 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            平成学校ゲームズ
          </h1>
          <p className="chalk-text mt-5 text-xl font-bold leading-9 sm:text-2xl">
            平成の学校あるあるを、16bitブラウザゲームに。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-chalk/90 sm:text-lg">
            チャイム、給食、廊下、消しゴム落とし。
            <br />
            あの頃の小さな事件を、スマホで遊べるミニゲームにしました。
          </p>
          <div className="mt-7 grid gap-3 sm:flex">
            <Link className="pixel-button" href="/games">
              ゲームを選ぶ
            </Link>
            <Link className="pixel-button pixel-button-secondary" href="/about">
              平成学校ゲームズとは
            </Link>
          </div>
        </div>

        <div
          aria-label="校門と教室をイメージしたドット風の装飾"
          className="pixel-frame bg-paper p-4"
          role="img"
        >
          <div className="grid min-h-72 grid-rows-[auto_1fr_auto] gap-4">
            <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
              <span className="h-24 border-2 border-ink bg-stone-400" />
              <span className="border-2 border-ink bg-school-red px-4 py-3 text-center font-black">
                校門
              </span>
              <span className="h-24 border-2 border-ink bg-stone-400" />
            </div>
            <div className="notebook-panel border-2 border-ink p-4">
              <div className="grid h-full grid-cols-2 gap-3">
                <div className="border-2 border-ink bg-board p-3 text-chalk">
                  <span className="font-mono text-xs font-black">1-A</span>
                </div>
                <div className="border-2 border-ink bg-school-blue p-3 text-white">
                  <span className="font-mono text-xs font-black">廊下</span>
                </div>
                <div className="border-2 border-ink bg-school-yellow p-3">
                  <span className="font-mono text-xs font-black">給食</span>
                </div>
                <div className="border-2 border-ink bg-paper p-3">
                  <span className="font-mono text-xs font-black">机上決戦</span>
                </div>
              </div>
            </div>
            <div className="h-8 border-2 border-ink bg-school-blue" />
          </div>
        </div>
      </div>
    </section>
  );
}
