const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const autoprefixer = require("autoprefixer");
const postcss = require("./postcss.config");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[bundle].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", postcss, "sass-loader"]
      }
    ]
  }
});
