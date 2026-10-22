# first-project

React と TypeScript の基本を学ぶために作った練習用アプリです。
よく使う UI 部品を1つずつコンポーネントとして作り、1つの画面に並べています。

## 何を作ったか

| コンポーネント | 内容 |
| --- | --- |
| `BreadCrumbs` | パンくずリスト。項目の数を表示し、項目が0件のときは赤字でお知らせを出す。クリックした項目はリンクではなく文字で表示する |
| `UserDetail` | ボタンを押すとログイン回数が増える |
| `UserList` | ユーザーの一覧表。行ごとのボタンでログイン状態を切り替える |
| `PrimaryButton` | 中身（`children`）を外から渡せる共通ボタン |
| `Like` | ハートのアイコンをクリックして、いいねのオン・オフを切り替える |
| `Form` | 名前・メールアドレス・パスワード・メルマガ希望を入力するフォーム |
| `PostList` | 外部 API から投稿を取得し、入力したユーザー ID の投稿だけを表に表示する |

## 使った技術

- React 19 / TypeScript
- Vite（開発環境とビルド）
- Bootstrap 5（見た目の作成）
- styled-components / CSS Modules（コンポーネントごとのスタイル）
- axios（API からのデータ取得）
- react-icons（アイコン）
- ESLint（コードのチェック）
- 投稿データの取得先: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 工夫した点

- **データ取得をカスタムフックに分けた**
  投稿の取得、エラー処理、ユーザー ID の管理を `usePostList` にまとめました。`PostList` は表示に専念できるので、コンポーネントが読みやすくなっています。
- **フォームの入力処理を1つの関数にまとめた**
  `name` 属性を使って、どの項目が変わったかを判断しています。テキストとチェックボックスを同じ `onChange` で扱えるので、項目が増えても関数を追加する必要がありません。
- **TypeScript で型を付けた**
  `User` や `Post` などのデータの形を型で決めました。props やイベントにも型を付けているので、間違った値を渡すと書いている時点で気づけます。
- **スタイルの書き方を使い分けた**
  Bootstrap のクラス、CSS Modules、styled-components の3つを試しました。styled-components では props を受け取って文字色を切り替えています（項目が0件のときは赤字）。
- **API エラーを画面に表示した**
  データの取得に失敗したときは、Bootstrap のアラートでエラーメッセージを表示します。

## 動かし方

```bash
npm install
npm run dev
```
