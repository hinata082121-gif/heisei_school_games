# SNS導線設定メモ

## 現在の状態

- Phase 5ではSNS導線の枠を実装
- TikTok / YouTube / X のURLは環境変数で管理
- URL未設定の場合はリンクを非表示または準備中表示
- 空リンクや # リンクは使わない

## 環境変数

```env
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_X_URL=
```

## Vercelで設定する項目

- Production
- Preview
- Development

それぞれ必要に応じて環境変数を設定する。

## SNS投稿からの導線

推奨導線：

TikTok / YouTube Shorts
↓
公式サイトトップ
↓
ゲーム一覧
↓
ゲーム詳細
↓
外部ゲームサイト
↓
攻略記事 / ブログ / SNSへ回遊

## 注意

- SNSリンクが未設定の状態で壊れたリンクを出さない
- スマホでCTAが押しやすいか確認する
- 共有ボタンがブラウザごとに壊れないか確認する
- Web Share API非対応ブラウザではコピー動作にする
