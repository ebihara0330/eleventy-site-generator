const subTemplate = require("./templates/sub.js");

class sub1 {
  data() {
    return {
      heading: "sub1",
      content: "../layout/sub1.jfif"
    };
  }

  render(data) {
    return subTemplate(data);
  }
}

module.exports = sub1;
