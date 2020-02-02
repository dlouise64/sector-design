const autoprefixer = require("autoprefixer");

module.exports = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    plugins: () => [
      autoprefixer({
        grid: "autoplace",
        overrideBrowserslist: ["> 1%", "last 2 versions"]
      })
    ]
  }
};
