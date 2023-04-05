module.exports = (data) => {
  const { templates } = data.paramater;
  const filteredTemplates = templates.filter((template) => template !== "index");

  return `
  <!DOCTYPE html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="stylesheet" href="./layout/animate.css">
	<link rel="stylesheet" href="./layout/icomoon.css">
	<link rel="stylesheet" href="./layout/bootstrap.css">
	<link rel="stylesheet" href="./layout/style.css">

	</head>
	<body>

		<header id="fh5co-header" role="banner">
			<div class="container text-center">
				<div id="fh5co-logo">
          <img src="./layout/proxy_form.png" width="630" height="130" alt="画像の説明">
				</div>
			</div>
		</header>

		<div class="container-fluid pt70 pb70">
			<div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">


				${filteredTemplates.map(template => `

					<div class="fh5co-project masonry-brick">
						<a href="./${template}/index.html">
							<h2>${template}'s tire</h2>
							<img src="./layout/${template}.jfif">
						</a>
					</div>
	
				`).join('')}


			</div>

      <div class="page-content">
        <a href="./attachment/top.csv" download="./attachment/top.csv">★タイヤの情報がここからダウンロードできます★</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
      </div>

		</div>

		<footer id="fh5co-footer" role="contentinfo">
			<div class="container-fluid">
				<div class="footer-content">
					<div class="copyright"><small>&copy; 2023 Present. All Rights Reserved. <br>Designed by FreeHTML5.co Images: GraphicBurger</small></div>
				</div>
			</div>
		</footer>

	</body>
</html>
  `;
}
