const fs = require('fs');
const path = require('path');

const parameters = require('./data/paramater.js');
const srcDir = './src/';
const buildDir = './build/';
const attachmentDir = './build/attachment';
const sourceDir = './data/attachment';
const dataDir = './build/_data';

if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}
if (!fs.existsSync(attachmentDir)) {
    fs.mkdirSync(attachmentDir);
}
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}
fs.copyFileSync('./data/paramater.js', `./build/_data/paramater.js`);

const files = fs.readdirSync(sourceDir);

files.forEach((file) => {
  const sourcePath = path.join(sourceDir, file);
  const destinationPath = path.join(attachmentDir, file);
  fs.copyFileSync(sourcePath, destinationPath);
});

parameters.templates.forEach((template) => {
  const srcPath = path.join(srcDir, `${template}.11ty.js`);
  const destPath = path.join(buildDir, `${template}.11ty.js`);
  fs.copyFileSync(srcPath, destPath);
});
