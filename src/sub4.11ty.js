const subTemplate = require("./templates/sub.js");

class sub4 {
  data() {
    return {
      heading: "sub4",
      content: "../layout/sub4.jfif"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub4;
