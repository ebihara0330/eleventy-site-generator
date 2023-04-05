const fs = require('fs');
const path = require('path');
const buildDir = './build';

/*******************************************************************************************
 * buildディレクトリへのテンプレート・添付ファイルコピー処理
 * 
 * 本サイトはdata配下の設定（テンプレートと添付ファイルの表示有無）を元にビルドする
 * srcはそのままビルドできないので、11tyの仕様とdata内容を元に必要なsrcファイルを
 * buildディレクトリにコピーした上でビルドする
 * copyTemplates.jsはコピー処理を担当する
 * 作業は①テンプレート・添付ファイルのbuildディレクトリへのフルコピー②不要ファイル削除の順で行う
 *******************************************************************************************/

/*
 * ①テンプレート・添付ファイルのbuildディレクトリへのフルコピー  
 * 
 */
function copyDirectory(srcPath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  const files = fs.readdirSync(srcPath);
  for (const file of files) {
    const srcFile = path.join(srcPath, file);
    const destFile = path.join(destPath, file);
    const stat = fs.statSync(srcFile);
    if (stat.isDirectory()) {
      copyDirectory(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

/*
 * ②不要ファイルの削除
 * data/paramater.jsのtemplatesに記載されていないテンプレートを削除する
 * 
 */
function removeUnlistedFiles(baseDir) {
  const allowedFiles = (require('./data/paramater.js')).templates;
  const files = fs.readdirSync(baseDir);
  for (const file of files) {
    const filePath = path.join(baseDir, file);
    const stat = fs.statSync(filePath);
    const fileNameWithoutExtension = path.basename(file, '.11ty.js');
    if (stat.isFile() && !allowedFiles.includes(fileNameWithoutExtension)) {
      fs.unlinkSync(filePath);
    }
  }
}

copyDirectory('./src', buildDir);
copyDirectory('./data/attachment', path.join(buildDir, 'attachment'));
removeUnlistedFiles(buildDir);