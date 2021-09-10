const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("_headers");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("assets/*");

    eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        typographer: true,
        linkify: true,
    }));

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {

        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                decodeEntities: true,
                preserveLineBreaks: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            });
            return minified;
        }

        return content;
    });

    return {
        dir: {
          input: "src",
          output: "_site"
        }
      }
};