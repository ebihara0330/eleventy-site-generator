/*************************************************************
 * 11tyの設定ファイル
 * ・テンプレート言語：Javascript（11ty.js）
 * ・添付ファイル：attachment配下をフォルダ構成維持でコピー
 * ・レイアウト関連：assets配下をフォルダ構成維持でコピー
 *************************************************************/

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["11ty.js"]);
  eleventyConfig.addPassthroughCopy({"build/attachment/*": true, "build/assets/**/*": true});
  eleventyConfig.addPassthroughCopy("./staticwebapp.config.json");

  return {
    dir: {
      input: "build",
      output: "dist"
    }
  };
};