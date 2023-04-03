// This is the template for the index page
module.exports = (data) => {
    const { excludes } = data.metaData;

    if (excludes) {
      return `
      <p>Top</p>
      <a href="./attachment/test.csv" download="./attachment/test.csv">test.csv</a>
            `;
    } else {
      return `
      <p>Top</p>
      <nav>
        <ul>
          <li><a href="./sub1/index.html">Sub1</a></li>
        </ul>
      </nav>
      <a href="./attachment/test.csv" download="./attachment/test.csv">test.csv</a>
      `;
    }
  };
