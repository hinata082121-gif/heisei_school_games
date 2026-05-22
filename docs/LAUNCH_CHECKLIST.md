# 公開前チェックリスト

## 基本動作

- [ ] npm install が成功する
- [ ] npm run dev が成功する
- [ ] npm run build が成功する
- [ ] 主要ページが表示される
- [ ] 404ページが表示される

## ページ確認

- [ ] /
- [ ] /games
- [ ] /games/chime-dash
- [ ] /games/kyusyoku-okawari
- [ ] /games/eraser-battle
- [ ] /guides
- [ ] /blog
- [ ] /social
- [ ] /about
- [ ] /contact
- [ ] /privacy
- [ ] /terms

## スマホ表示

- [ ] 320px幅で横スクロールがない
- [ ] 375px幅で読みやすい
- [ ] 390px幅でCTAが押しやすい
- [ ] Headerが崩れていない
- [ ] Footerが崩れていない
- [ ] カードが詰まりすぎていない

## 導線

- [ ] トップページからゲーム一覧へ行ける
- [ ] トップページから各ゲームへ行ける
- [ ] ゲーム一覧から各ゲーム詳細へ行ける
- [ ] ゲーム詳細から外部ゲームサイトへ行ける
- [ ] ゲーム詳細から攻略記事へ行ける
- [ ] 攻略記事から外部ゲームサイトへ行ける
- [ ] ブログ記事からゲーム一覧・攻略へ行ける
- [ ] SNSページへ行ける

## 外部リンク

- [ ] https://chimedash.vercel.app/ に遷移できる
- [ ] https://kyusyoku-okawari.vercel.app/ に遷移できる
- [ ] https://keshigomu-battle.vercel.app/ に遷移できる
- [ ] SNS URL未設定時に空リンクが出ない
- [ ] 外部リンクに適切な aria-label がある

## SEO

- [ ] 各ページに title がある
- [ ] 各ページに description がある
- [ ] /sitemap.xml が生成される
- [ ] /robots.txt が生成される
- [ ] /social が sitemap に含まれている
- [ ] metadataBase が設定されている

## AdSense申請前

- [ ] 本番AdSenseコードが入っていない
- [ ] ダミーpublisher IDが入っていない
- [ ] /privacy に広告・Cookieの説明がある
- [ ] /terms が整備されている
- [ ] /contact が存在する
- [ ] /privacy /terms /contact /404 に広告枠が表示されない
- [ ] /play/* に広告が出ない設計になっている
- [ ] 操作ボタン直下に広告枠がない
- [ ] 記事ページに十分な本文がある

## Vercel公開

- [ ] GitHubにpush済み
- [ ] Vercelでプロジェクトを作成済み
- [ ] Framework Preset が Next.js になっている
- [ ] Build Command が適切
- [ ] Output Directory が適切
- [ ] NEXT_PUBLIC_SITE_URL を設定した
- [ ] 必要に応じてSNS URLを設定した
- [ ] Production Deploy が成功した
- [ ] 公開URLで主要ページを確認した
