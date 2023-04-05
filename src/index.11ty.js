const fs = require('fs');

/*
 * Webサイトアクセス時のトップページ描画用クラス
 * dataに指定されたsubテンプレート数分コンテンツを表示する
 * また、dataにtop.csvが存在する場合はダウンロードリンクを表示する  
*/
module.exports = (data) => {
  const csvExists = fs.existsSync(`./data/attachment/top.csv`);
  const files = fs.readdirSync(__dirname); 
  const filteredTemplates = files.filter((file) => {
    return file.endsWith('11ty.js') && file !== 'index.11ty.js';
  }).map((file) => {
    return file.replace('.11ty.js', '');
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Page title - Sitename</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="Description" lang="en" content="ADD SITE DESCRIPTION">
      <meta name="author" content="ADD AUTHOR INFORMATION">
      <meta name="robots" content="index, follow">
  
      <!-- icons -->
      <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
      <link rel="shortcut icon" href="favicon.ico">
  
      <!-- Bootstrap Core CSS file -->
      <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  
      <!-- Override CSS file - add your own CSS rules -->
      <link rel="stylesheet" href="assets/css/styles.css">
  
      <!-- Conditional comment containing JS files for IE6 - 8 -->
      <!--[if lt IE 9]>
        <script src="assets/js/html5.js"></script>
        <script src="assets/js/respond.min.js"></script>
      <![endif]-->
    </head>
    <body>
  
      <!-- Navigation -->
        <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="container-fluid">
  
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">eleventy-site-generator</a>
          </div>
          <!-- /.navbar-header -->
  
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
      <!-- /.navbar -->
  
      <!-- Page Content -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-header">
              <h1>Website for 11tyTest</h1>
            </div>
          </div>
        </div>
        ${csvExists ? `<a href="./attachment/top.csv" download="./attachment/top.csv">top's attachment</a>` : ''}
        <br><br>
        <!-- /.row -->

        
        <div class="row margin-b-2">
  
          ${filteredTemplates.map(template => `
            <div class="col-sm-6">
              <a href="./${template}/index.html">
                <img class="img-responsive thumbnail" src="./assets/${template}.png" alt="">
                <div class="caption">
                <h4><a href="./${template}/index.html">${template}'s link</a></h4>
                <p>${template}, quis nostrud exerci tation ullamcorper suscipit.</p>
                </div>
              </a>
            </div>
          `).join('')}
          
        </div>
        <!-- /.row -->
  
        <hr>
        <footer class="margin-tb-3">
          <div class="row">
            <div class="col-lg-12">
              <p>Copyright &copy; Sitename 2023</p>
            </div>
          </div>
        </footer>
      </div>
      <!-- /.container-fluid -->
  
      <!-- JQuery scripts -->
        <script src="assets/js/jquery-1.11.2.min.js"></script>
  
      <!-- Bootstrap Core scripts -->
      <script src="assets/js/bootstrap.min.js"></script>
    </body>
  </html>
    `;
}
