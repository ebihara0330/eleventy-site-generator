const subTemplate = require("./templates/sub.js");

class sub3 {
  data() {
    return {
      heading: "sub3",
      content: "../layout/sub3.jfif"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub3;
