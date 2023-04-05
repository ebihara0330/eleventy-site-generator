const subTemplate = require("./templates/sub.js");

/*
 * サブページ2のコンテンツ表示クラス
 * subの汎用テンプレートに専用のパラメータを渡して画面を生成する  
*/
class sub2 {
  data() {
    return {
      heading: "sub2",
      content: "../assets/sub2.png"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub2;
