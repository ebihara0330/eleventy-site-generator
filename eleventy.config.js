module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["11ty.js"]);
  eleventyConfig.addPassthroughCopy("build/attachment/*");
  eleventyConfig.addPassthroughCopy("build/layout/*");

  return {
    dir: {
      input: "build",
      output: "dist"
    }
  };
};