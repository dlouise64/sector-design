const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

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
        use: [
          "style-loader",
          "css-loader",
          {
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
          },
          "sass-loader"
        ]
      }
    ]
  }
});
