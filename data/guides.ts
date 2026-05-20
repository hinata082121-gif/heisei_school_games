import type { Game } from "@/data/games";

export type ArticleSectionData = {
  heading: string;
  body?: string;
  list?: string[];
};

export type ArticleRelatedLink = {
  label: string;
  href: string;
};

export type Guide = {
  slug:
    | "chime-dash-how-to-play"
    | "chime-dash-strategy"
    | "kyusyoku-okawari-how-to-play"
    | "kyusyoku-okawari-strategy";
  title: string;
  description: string;
  category: "遊び方" | "攻略";
  gameSlug: Game["slug"];
  gameTitle: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  sections: ArticleSectionData[];
  relatedLinks: ArticleRelatedLink[];
};

export const guides: Guide[] = [
  {
    slug: "chime-dash-how-to-play",
    title: "チャイムダッシュの遊び方",
    description:
      "チャイムダッシュを初めて遊ぶ人向けに、基本ルール、操作方法、先生の視線、クリア条件を紹介します。",
    category: "遊び方",
    gameSlug: "chime-dash",
    gameTitle: "チャイムダッシュ",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "3分",
    tags: ["チャイムダッシュ", "遊び方", "廊下", "先生", "初心者向け"],
    sections: [
      {
        heading: "チャイムダッシュとは",
        body: "チャイムダッシュは、チャイムが鳴る前に教室へ戻ることを目指す、平成学校あるあるブラウザゲームです。\nただ走るだけではなく、廊下にいる先生の視線を意識しながら進む必要があります。",
      },
      {
        heading: "基本ルール",
        list: [
          "チャイムが鳴る前に教室を目指します",
          "先生に見つかるとゲームオーバーになります",
          "急ぎたい場面と待つ場面を見極めることが大切です",
          "スマホでも短時間で遊べるように設計されています",
        ],
      },
      {
        heading: "操作の考え方",
        body: "チャイムダッシュでは、操作のうまさだけでなく、状況判断が重要です。\n先生の視線が通っているときは無理に進まず、チャンスが来たら一気に進むのが基本です。",
      },
      {
        heading: "初めて遊ぶときのコツ",
        list: [
          "最初は急ぎすぎない",
          "先生の動きや視線を見る",
          "危ないと思ったら止まる",
          "ゴールまでの距離を意識する",
          "失敗してもリザルトを楽しむ",
        ],
      },
    ],
    relatedLinks: [
      { label: "チャイムダッシュ攻略を読む", href: "/guides/chime-dash-strategy" },
      { label: "チャイムダッシュ紹介ページ", href: "/games/chime-dash" },
      { label: "攻略一覧に戻る", href: "/guides" },
    ],
  },
  {
    slug: "chime-dash-strategy",
    title: "チャイムダッシュ攻略：先生に見つからず教室へ戻るコツ",
    description:
      "チャイムダッシュで先生に見つからずクリアするための考え方、進むタイミング、失敗しやすいポイントを紹介します。",
    category: "攻略",
    gameSlug: "chime-dash",
    gameTitle: "チャイムダッシュ",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "4分",
    tags: ["チャイムダッシュ", "攻略", "先生の視線", "クリアのコツ"],
    sections: [
      {
        heading: "攻略の基本は急ぎすぎないこと",
        body: "チャイムダッシュでは、チャイムまでの時間が気になって焦りがちですが、常に走り続けると先生に見つかりやすくなります。\n安全なタイミングを待ち、進めるときにしっかり進むことが大切です。",
      },
      {
        heading: "先生の視線を見る",
        list: [
          "先生の向きに注意する",
          "視線が通っているときは無理をしない",
          "視線が外れた瞬間を狙う",
          "ゴール直前ほど焦らない",
        ],
      },
      {
        heading: "失敗しやすいポイント",
        body: "初心者が失敗しやすいのは、あと少しで教室に着く場面です。\nゴールが見えると一気に進みたくなりますが、最後に先生に見つかると悔しい結果になります。\n最後まで視線を確認しましょう。",
      },
      {
        heading: "クリア後も楽しむ",
        body: "チャイムダッシュは、クリアや失敗のリザルト画面も楽しめるように作られています。\n良い結果や面白い失敗が出たら、スクショを撮って共有する楽しみ方もあります。",
      },
    ],
    relatedLinks: [
      { label: "チャイムダッシュの遊び方", href: "/guides/chime-dash-how-to-play" },
      { label: "チャイムダッシュ紹介ページ", href: "/games/chime-dash" },
      { label: "攻略一覧に戻る", href: "/guides" },
    ],
  },
  {
    slug: "kyusyoku-okawari-how-to-play",
    title: "給食おかわり戦争の遊び方",
    description:
      "給食おかわり戦争を初めて遊ぶ人向けに、基本ルール、タイミングタップ、じゃんけん要素、リザルトの楽しみ方を紹介します。",
    category: "遊び方",
    gameSlug: "kyusyoku-okawari",
    gameTitle: "給食おかわり戦争",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "3分",
    tags: ["給食おかわり戦争", "遊び方", "給食", "じゃんけん", "初心者向け"],
    sections: [
      {
        heading: "給食おかわり戦争とは",
        body: "給食おかわり戦争は、人気メニューのおかわりをめぐってクラスメイトと勝負する、平成学校あるあるブラウザゲームです。\nカレー、揚げパン、プリンなど、思い出に残りやすい給食メニューをテーマにしています。",
      },
      {
        heading: "基本ルール",
        list: [
          "人気メニューのおかわりを狙います",
          "タイミングよくタップしてチャンスをつかみます",
          "最後の一個では勝負が発生します",
          "勝負に勝てばおかわり成功です",
          "結果画面では称号やコメントを楽しめます",
        ],
      },
      {
        heading: "タイミングタップの考え方",
        body: "焦ってタップするよりも、タイミングを見て押すことが大切です。\n短い時間で結果が出るため、何度も遊びながら感覚をつかむことができます。",
      },
      {
        heading: "リザルト画面を楽しむ",
        body: "成功しても失敗しても、給食おかわり戦争ではリザルト画面に平成学校あるあるらしいコメントが表示されます。\nスクショを撮って共有したくなるような、少し悔しくて少し笑える結果を楽しんでください。",
      },
    ],
    relatedLinks: [
      { label: "給食おかわり戦争攻略を読む", href: "/guides/kyusyoku-okawari-strategy" },
      { label: "給食おかわり戦争紹介ページ", href: "/games/kyusyoku-okawari" },
      { label: "攻略一覧に戻る", href: "/guides" },
    ],
  },
  {
    slug: "kyusyoku-okawari-strategy",
    title: "給食おかわり戦争攻略：最後の一個を勝ち取るコツ",
    description:
      "給食おかわり戦争でおかわり成功を目指すためのタイミング、じゃんけん勝負、リザルトの楽しみ方を紹介します。",
    category: "攻略",
    gameSlug: "kyusyoku-okawari",
    gameTitle: "給食おかわり戦争",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "4分",
    tags: ["給食おかわり戦争", "攻略", "おかわり", "じゃんけん", "称号"],
    sections: [
      {
        heading: "勝負はタイミングから始まる",
        body: "給食おかわり戦争では、人気メニューに早く反応するだけでなく、タイミングよく行動することが重要です。\n勢いだけではなく、落ち着いてチャンスを狙いましょう。",
      },
      {
        heading: "最後の一個は油断しない",
        list: [
          "人気メニューほど競争が激しくなります",
          "最後の一個では勝負の流れが変わります",
          "じゃんけんでは最後まで結果を見届けましょう",
          "負けてもリザルト画面を楽しめます",
        ],
      },
      {
        heading: "何度も遊んで称号を狙う",
        body: "給食おかわり戦争は、短時間で何度も遊べる設計です。\n成功パターンだけでなく、失敗パターンにも学校あるあるらしい面白さがあります。\nいろいろな結果や称号を集める感覚で遊んでください。",
      },
    ],
    relatedLinks: [
      { label: "給食おかわり戦争の遊び方", href: "/guides/kyusyoku-okawari-how-to-play" },
      { label: "給食おかわり戦争紹介ページ", href: "/games/kyusyoku-okawari" },
      { label: "攻略一覧に戻る", href: "/guides" },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByGameSlug(gameSlug: Game["slug"]) {
  return guides.filter((guide) => guide.gameSlug === gameSlug);
}
