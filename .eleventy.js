
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("**/*.jpg");

  eleventyConfig.addShortcode("siteFooter", (name = "Drew Seabase", tagline = "Stuff I Don't Leave Home Without") => {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <p>&copy; ${year} ${name} – ${tagline}</p>
      </footer>
    `;
  });
    }
