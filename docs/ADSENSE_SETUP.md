# AdSense導入メモ

## 現在の状態

- 本番広告枠の表示は未有効
- AdSenseサイト接続確認用のscriptは、NEXT_PUBLIC_ADSENSE_CLIENT_ID が設定されている場合のみ読み込み
- AdSlotコンポーネントと広告表示制御のみ実装
- NEXT_PUBLIC_ADSENSE_ENABLED=false が初期値
- publisher ID は NEXT_PUBLIC_ADSENSE_CLIENT_ID で管理

## 広告表示許可ページ

- /
- /games
- /games/*
- /guides
- /guides/*
- /blog
- /blog/*
- /about

## 広告表示禁止ページ

- /play/*
- /privacy
- /terms
- /contact
- /404
- /not-found
- /error
- ゲームプレイ画面
- リザルト画面
- 操作ボタン付近

## 本番導入時に必要な作業

- AdSense審査通過後に publisher ID を設定する
- NEXT_PUBLIC_ADSENSE_CLIENT_ID に ca-pub- から始まるIDを設定する
- NEXT_PUBLIC_ADSENSE_ENABLED=true にする
- ads.txt が必要になった場合は、Google AdSense管理画面の指示に従って public/ads.txt を追加する
- privacyページの文面を「導入予定」から「導入中」に変更する
- 実機スマホで広告位置を確認する
- 操作ボタン付近や誤タップしやすい場所に広告が出ていないか確認する

## 注意

- ダミーの publisher ID を本番に入れない
- ゲーム画面やリザルト画面には広告を置かない
- ボタンやナビゲーションと広告が誤認される配置を避ける
- 低品質・未完成ページに広告を出さない
- 404やエラー画面に広告を出さない
