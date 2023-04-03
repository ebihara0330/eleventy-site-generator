module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["11ty.js"]);
  eleventyConfig.addPassthroughCopy("template/attachment/");
  return {
    dir: {
      input: "template",
      output: "build"
    }
  };
};