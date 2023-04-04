// This is the template for the index page
module.exports = (data) => {
  const { templates } = data.paramater;
  const filteredTemplates = templates.filter((template) => template !== "index");

  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>11ty JavaScript Template Example</title>
    </head>
    <body>
      <ul>
        ${filteredTemplates.map(template => `<li><a href="./${template}/index.html">${template}</a></li>`).join('')}
      </ul>
      <a href="./attachment/test.csv" download="./attachment/test.csv">test.csv</a>
    </body>
    </html>
  `;
}
