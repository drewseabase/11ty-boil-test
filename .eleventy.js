
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("**/*.jpg");

  eleventyConfig.addPairedShortcode("why", (content, title = "Why I carry this") => {
    return `
      <section class="why-card">
        <h3>${title}</h3>
        <p>${content}</p>
      </section>
    `;
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };

    }
