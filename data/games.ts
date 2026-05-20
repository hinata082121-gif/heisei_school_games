export type RoomTheme = "hallway" | "lunchroom";

export type Game = {
  id: "chime-dash" | "kyusyoku-okawari";
  slug: "chime-dash" | "kyusyoku-okawari";
  title: string;
  areaName: string;
  status: "公開中";
  catchphrase: string;
  description: string;
  overview: string;
  howToPlay: string[];
  features: string[];
  productionNote: string;
  tags: string[];
  url: string;
  roomTheme: RoomTheme;
};

export const games: Game[] = [
  {
    id: "chime-dash",
    slug: "chime-dash",
    title: "チャイムダッシュ",
    areaName: "2階 廊下",
    status: "公開中",
    catchphrase: "チャイムが鳴る前に、教室へ帰れ。",
    description:
      "チャイムが鳴る前に教室へ戻れ！\n先生の視線をかいくぐる、平成学校あるある廊下ダッシュゲーム。",
    overview:
      "休み時間が終わる直前、チャイムが鳴る前に教室へ戻らなければいけない。\nでも、廊下には先生の視線がある。\n走りたいけど、見つかると怒られる。\nそんな平成の学校で一度は感じた小さな緊張感を、スマホで遊べるミニゲームにしました。",
    howToPlay: [
      "タイミングを見て進む",
      "先生の視線に注意する",
      "チャイムまでに教室を目指す",
      "見つかるとゲームオーバー",
      "クリア画面や失敗画面はスクショ共有しやすい設計",
    ],
    features: [
      "平成学校あるあるの廊下ダッシュ",
      "先生に見つかる緊張感",
      "スマホで遊びやすい短時間プレイ",
      "16bit風のレトロな雰囲気",
      "SNSで共有しやすいリザルト画面",
    ],
    productionNote:
      "チャイムダッシュは、「チャイムが鳴る前に急いで教室へ戻る」という誰でも覚えがある学校あるあるから生まれました。\nただ走るだけではなく、先生に見つかるかもしれない緊張感を加えることで、短いプレイ時間でも判断の面白さが出るように設計しています。",
    tags: ["16bit風", "スマホ対応", "廊下", "先生", "チャイム"],
    url: "https://chimedash.vercel.app/",
    roomTheme: "hallway",
  },
  {
    id: "kyusyoku-okawari",
    slug: "kyusyoku-okawari",
    title: "給食おかわり戦争",
    areaName: "給食室",
    status: "公開中",
    catchphrase: "最後の一個を、勝ち取れ。",
    description:
      "カレー、揚げパン、プリン。\n最後の一個をめぐる、平成給食バトル。",
    overview:
      "給食の時間、人気メニューが余ったときに始まるおかわり争奪戦。\n最後の一個をめぐって、クラスメイトたちと勝負する。\nそんな平成の教室で起きた小さな事件を、タイミングタップとじゃんけん要素のあるミニゲームとして再現しました。",
    howToPlay: [
      "タイミングよくタップする",
      "人気メニューのおかわりを狙う",
      "最後の一個では勝負が発生する",
      "じゃんけんで勝てばおかわり成功",
      "成功・失敗リザルトはSNS共有しやすい設計",
    ],
    features: [
      "カレー、揚げパン、プリンなどの給食あるある",
      "最後の一個をめぐる緊張感",
      "タイミングタップの分かりやすい操作",
      "じゃんけんによる一発逆転",
      "スマホで遊びやすい短時間プレイ",
      "16bit風の平成レトロな雰囲気",
    ],
    productionNote:
      "給食おかわり戦争は、「人気メニューのおかわりに人が集まる」という学校あるあるから生まれました。\nカレーや揚げパン、プリンなど、記憶に残りやすい給食メニューをテーマにすることで、プレイ前から懐かしさが伝わるゲームを目指しています。\n最後の一個をめぐるじゃんけん要素によって、短いゲームの中にも逆転や悔しさが生まれる設計にしています。",
    tags: ["給食", "おかわり", "タイミングタップ", "じゃんけん", "16bit風", "スマホ対応"],
    url: "https://kyusyoku-okawari.vercel.app/",
    roomTheme: "lunchroom",
  },
];

export function getGameBySlug(slug: Game["slug"]) {
  return games.find((game) => game.slug === slug);
}
