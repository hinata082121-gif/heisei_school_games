# 平成学校ゲームズ 公式サイト

## 概要

平成学校ゲームズは、平成時代の学校あるあるをテーマにした、スマホ向け16bit風ブラウザゲームシリーズの公式サイトです。

## 主なページ

- `/`
- `/games`
- `/games/chime-dash`
- `/games/kyusyoku-okawari`
- `/guides`
- `/blog`
- `/social`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

## 既存ゲーム

- チャイムダッシュ  
  https://chimedash.vercel.app/

- 給食おかわり戦争  
  https://kyusyoku-okawari.vercel.app/

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Vercel

## 開発コマンド

```bash
npm install
npm run dev
npm run build
npm run start
```

`package.json`には現在 `lint` script は定義していません。

## 環境変数

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ADSENSE_ENABLED`
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
- `NEXT_PUBLIC_TIKTOK_URL`
- `NEXT_PUBLIC_YOUTUBE_URL`
- `NEXT_PUBLIC_X_URL`

## AdSenseについて

現時点では本番AdSenseコードは未導入です。
広告表示制御とAdSlotの土台のみ実装しています。

## SNSについて

SNS URLは環境変数で管理します。
未設定の場合は空リンクを表示しない設計です。

## 公開前チェック

`docs/LAUNCH_CHECKLIST.md` を参照してください。
