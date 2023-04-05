const subTemplate = require("./templates/sub.js");

/*
 * サブページ4のコンテンツ表示クラス
 * subの汎用テンプレートに専用のパラメータを渡して画面を生成する  
*/
class sub4 {
  data() {
    return {
      heading: "sub4",
      content: "../assets/sub4.png"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub4;
