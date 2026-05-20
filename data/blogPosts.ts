import type {
  ArticleRelatedLink,
  ArticleSectionData,
} from "@/data/guides";

export type BlogPost = {
  slug:
    | "what-is-heisei-school-games"
    | "chime-dash-development-note"
    | "kyusyoku-okawari-development-start"
    | "heisei-school-aruaru-game"
    | "mobile-browser-game-design";
  title: string;
  description: string;
  category:
    | "ブランド紹介"
    | "開発ログ"
    | "ゲーム紹介"
    | "平成学校あるある"
    | "制作メモ"
    | "お知らせ";
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  sections: ArticleSectionData[];
  relatedLinks: ArticleRelatedLink[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-heisei-school-games",
    title: "平成学校ゲームズとは？",
    description:
      "平成学校ゲームズのコンセプト、制作方針、シリーズとして目指している世界観を紹介します。",
    category: "ブランド紹介",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "4分",
    tags: ["ブランド紹介", "平成学校ゲームズ", "16bit風", "スマホゲーム"],
    sections: [
      {
        heading: "平成の学校あるあるをゲームにする",
        body: "平成学校ゲームズは、平成時代の学校あるあるをテーマにしたスマホ向けブラウザゲームシリーズです。\nチャイム、給食、廊下、先生、休み時間、放課後など、学校生活の中にあった小さな事件を、16bit風のミニゲームとして再構成しています。",
      },
      {
        heading: "なぜ学校をテーマにするのか",
        body: "学校生活には、多くの人が共感できる場面がたくさんあります。\nチャイムが鳴る前に教室へ戻る緊張感、人気給食のおかわりをめぐる空気、先生に見つかったときの気まずさ。\nそうした記憶は、大きな事件ではなくても、ゲームにすると楽しい題材になります。",
      },
      {
        heading: "スマホで手軽に遊べるシリーズへ",
        body: "平成学校ゲームズでは、長時間遊ぶ大型ゲームではなく、スマホで短時間に遊べるミニゲームを中心に展開していきます。\nTikTokやYouTubeで見て気になった人が、そのままスマホで遊べるような導線を目指しています。",
      },
      {
        heading: "今後の展開",
        list: [
          "チャイムダッシュの改善",
          "給食おかわり戦争のアップデート",
          "攻略記事や開発ログの追加",
          "平成学校あるあるをテーマにした新作ゲーム",
          "SNSと連動した企画",
        ],
      },
    ],
    relatedLinks: [
      { label: "ゲーム一覧を見る", href: "/games" },
      { label: "攻略・遊び方を見る", href: "/guides" },
      { label: "Aboutページを見る", href: "/about" },
    ],
  },
  {
    slug: "chime-dash-development-note",
    title: "チャイムダッシュ制作記録",
    description:
      "チャイムダッシュの企画意図、先生の視線、廊下ダッシュの緊張感、リザルト画面の設計について紹介します。",
    category: "開発ログ",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "3分",
    tags: ["開発ログ", "チャイムダッシュ", "廊下", "リザルト画面"],
    sections: [
      {
        heading: "企画のきっかけ",
        body: "チャイムダッシュは、「チャイムが鳴る前に教室へ戻る」という学校あるあるから生まれました。\n休み時間の終わりに、急がなければいけないけれど、廊下を走ると先生に怒られる。\nその小さな矛盾をゲームの中心にしています。",
      },
      {
        heading: "走るだけではない緊張感",
        body: "単にゴールを目指して走るだけでは、ゲームとしての判断が少なくなります。\nそこで、先生の視線や見つかるリスクを入れることで、進むか止まるかを考えるゲームにしています。",
      },
      {
        heading: "リザルト画面を共有したくなる設計",
        body: "平成学校ゲームズでは、ゲームの結果画面も重要な体験として考えています。\nクリアしたときの達成感だけでなく、失敗したときの少し笑えるコメントも含めて、スクショで共有したくなるような画面を目指しています。",
      },
    ],
    relatedLinks: [
      { label: "チャイムダッシュ紹介ページ", href: "/games/chime-dash" },
      { label: "チャイムダッシュ攻略", href: "/guides/chime-dash-strategy" },
      { label: "ブログ一覧に戻る", href: "/blog" },
    ],
  },
  {
    slug: "kyusyoku-okawari-development-start",
    title: "給食おかわり戦争 制作開始",
    description:
      "平成学校ゲームズ第2弾として制作している、給食おかわり戦争の企画背景とゲーム設計について紹介します。",
    category: "開発ログ",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "3分",
    tags: ["開発ログ", "給食おかわり戦争", "給食", "じゃんけん"],
    sections: [
      {
        heading: "第2弾のテーマは給食",
        body: "平成学校ゲームズ第2弾のテーマは、給食のおかわりです。\nカレー、揚げパン、プリンなど、人気メニューが余ったときに教室で起きる小さな盛り上がりをゲームにしています。",
      },
      {
        heading: "最後の一個をめぐる勝負",
        body: "給食のおかわりで特に印象に残るのは、最後の一個を誰が取るかという瞬間です。\n給食おかわり戦争では、その緊張感をタイミングタップとじゃんけん要素で表現しています。",
      },
      {
        heading: "成功しても失敗しても楽しい結果にする",
        body: "おかわりに成功したときのうれしさだけでなく、負けたときの悔しさもこのゲームの魅力です。\n結果画面では、平成の教室らしい空気感が出るように、コメントや称号の見せ方を工夫しています。",
      },
    ],
    relatedLinks: [
      { label: "給食おかわり戦争紹介ページ", href: "/games/kyusyoku-okawari" },
      { label: "給食おかわり戦争攻略", href: "/guides/kyusyoku-okawari-strategy" },
      { label: "ブログ一覧に戻る", href: "/blog" },
    ],
  },
  {
    slug: "heisei-school-aruaru-game",
    title: "平成の学校あるあるがゲームになる理由",
    description:
      "チャイム、給食、廊下、先生など、平成の学校あるあるがなぜミニゲームと相性が良いのかを紹介します。",
    category: "平成学校あるある",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "3分",
    tags: ["平成学校あるある", "ゲーム企画", "SNS", "学校生活"],
    sections: [
      {
        heading: "小さな事件ほど覚えている",
        body: "学校生活の記憶は、大きな出来事だけではありません。\nチャイムが鳴って焦ったこと、給食のおかわりで盛り上がったこと、先生に注意されたこと。\nそうした小さな事件ほど、思い出すと懐かしく感じるものです。",
      },
      {
        heading: "ルールがすぐ伝わる",
        body: "学校あるあるは、多くの人が状況をすぐに理解できます。\n「チャイムまでに戻る」「先生に見つからない」「最後の一個を取る」など、説明が短くてもゲームの目的が伝わりやすいのが特徴です。",
      },
      {
        heading: "SNSとの相性",
        body: "平成学校あるあるは、短い動画やスクショでも共感を生みやすいテーマです。\nゲームの結果画面に少し笑えるコメントや称号を入れることで、SNSで共有したくなる体験につなげることができます。",
      },
    ],
    relatedLinks: [
      { label: "平成学校ゲームズとは？", href: "/blog/what-is-heisei-school-games" },
      { label: "ゲーム一覧を見る", href: "/games" },
      { label: "ブログ一覧に戻る", href: "/blog" },
    ],
  },
  {
    slug: "mobile-browser-game-design",
    title: "スマホブラウザゲームとして遊びやすくする工夫",
    description:
      "平成学校ゲームズで意識している、スマホ表示、短時間プレイ、タップしやすさ、広告を置かないゲーム画面設計について紹介します。",
    category: "制作メモ",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    readingTime: "4分",
    tags: ["制作メモ", "スマホ", "ブラウザゲーム", "UI設計"],
    sections: [
      {
        heading: "まずスマホで遊びやすくする",
        body: "平成学校ゲームズは、TikTokやYouTubeなどからスマホでアクセスするユーザーを想定しています。\nそのため、PCよりもスマホで見たときの分かりやすさ、タップしやすさ、読み込みやすさを重視しています。",
      },
      {
        heading: "短時間で遊べること",
        body: "ブラウザゲームは、気軽に開いてすぐ遊べることが大切です。\n平成学校ゲームズでは、1プレイを短くし、失敗してもすぐにもう一度遊びたくなるテンポを意識しています。",
      },
      {
        heading: "ゲーム画面には広告を置かない",
        body: "現時点では、ゲームプレイ画面やリザルト画面には広告を置かない方針です。\n操作ボタンの近くや、画面切り替え直後に広告があると、プレイ体験を損ねる可能性があります。\n広告を導入する場合も、攻略記事やブログ記事など、読み物ページを中心にする方針です。",
      },
    ],
    relatedLinks: [
      { label: "攻略・遊び方を見る", href: "/guides" },
      { label: "ゲーム一覧を見る", href: "/games" },
      { label: "ブログ一覧に戻る", href: "/blog" },
    ],
  },
];

export const blogCategories: BlogPost["category"][] = [
  "開発ログ",
  "ゲーム紹介",
  "平成学校あるある",
  "制作メモ",
  "お知らせ",
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
