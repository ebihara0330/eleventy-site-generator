# eleventy-site-generator
<br>

## overview
* 設定に応じて表示画面・添付内容を切り替える静的サイトジェネレーター(11ty：テンプレート言語 JavaScript)
<br><br>


## usage
* data配下に表示画面と添付内容を設定してビルドする

 1. /data/attachment配下にtop.csv、sub1.csv、sub2.csv、sub3.csv、sub4.csvのどれかを格納する

  格納したものだけ添付される

2. build.bat or shのどちらかを実行

    →dist配下に作成されたindex.htmlを起動するとビルドした画面が表示される

```
参考）eleventy-site-generatorの処理構成

root
└data
｜└attachment：添付ファイル格納ディレクトリ
｜└paramater.js：表示画面の設定ファイル
└src
｜└assets：
｜└template
｜｜└xx.js：汎用的なテンプレートファイル
｜└xx.11ty.js：topとsub画面を構成するjsファイル（subは汎用テンプレートで作成）
└eleventy.config.js：11tyの各種設定ファイル
└package.json：11tyのバージョン情報など
└copyTemplates.js：dataディレクトリとsrcディレクトリを照合してビルドに必要なディレクトリ・ファイルを./buildディレクトリに配置する
└build.sh or bat：copyTemplates.jsの呼び出しとその後のbuild実行
```

