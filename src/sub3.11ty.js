const subTemplate = require("./templates/sub.js");

/*
 * サブページ3のコンテンツ表示クラス
 * subの汎用テンプレートに専用のパラメータを渡して画面を生成する  
*/
class sub3 {
  data() {
    return {
      heading: "sub3",
      content: "../assets/sub3.png"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub3;
