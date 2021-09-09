const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

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
};