module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["11ty.js"]);
  eleventyConfig.addPassthroughCopy("build/attachment/*");
  return {
    dir: {
      input: "build",
      output: "dist"
    }
  };
};