const subTemplate = require("./templates/sub.js");

/*
 * サブページ1のコンテンツ表示クラス
 * subの汎用テンプレートに専用のパラメータを渡して画面を生成する  
*/
class sub1 {
  data() {
    return {
      heading: "sub1",
      content: "../assets/sub1.png"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub1;
