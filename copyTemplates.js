const fs = require('fs');
const path = require('path');
const srcDir = './src';
const dataAttachmentSrc = './data/attachment';
const dataParameterSrc = './data/paramater.js';
const buildDir = './build';
const buildDataDir = './build/_data';

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

function copyFile(srcPath, destPath) {
  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath));
  }
  fs.copyFileSync(srcPath, destPath);
}

function removeUnlistedFiles(baseDir, allowedFiles) {
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

copyDirectory(srcDir, buildDir);
copyDirectory(dataAttachmentSrc, path.join(buildDir, 'attachment'));
copyFile(dataParameterSrc, path.join(buildDataDir, 'paramater.js'));
const parameters = require(dataParameterSrc);
removeUnlistedFiles(buildDir, parameters.templates);