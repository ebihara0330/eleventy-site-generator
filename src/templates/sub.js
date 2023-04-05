function myTemplate(data) {
  return `
<!DOCTYPE html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Present &mdash; 100% Free Fully Responsive HTML5 Template by FREEHTML5.co</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Free HTML5 Template by FREEHTML5.CO" />
	<meta name="keywords" content="free html5, free template, free bootstrap, html5, css3, mobile first, responsive" />
	<meta name="author" content="FREEHTML5.CO" />

	<!-- Animate.css -->
	<link rel="stylesheet" href="../layout/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="../layout/icomoon.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="../layout/bootstrap.css">
	<link rel="stylesheet" href="../layout/style.css">

	</head>
	<body>

		<header id="fh5co-header" role="banner">
			<div class="container text-center">
				<div id="fh5co-logo">
					<img src="../layout/proxy_form.png" width="630" height="130" alt="画像の説明">
				</div>
			</div>
		</header>

		<div class="page-content">
			<p>${data.heading}</p>
			<p class="text-center"><img src=${data.content} alt="Free HTML5 by FreeHTML5.co"></p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quaerat nostrum, neque cum, quidem inventore consequatur sunt optio sint! Veritatis maiores recusandae dolores nihil cumque, eaque eius obcaecati voluptatum necessitatibus.</p>
		</div>

	</body>
</html>


  `;
}

module.exports = myTemplate;