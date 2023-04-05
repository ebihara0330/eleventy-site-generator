const subTemplate = require("./templates/sub.js");

class sub2 {
  data() {
    return {
      heading: "sub2",
      content: "../layout/sub2.jfif"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub2;
