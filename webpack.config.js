const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const threadLoader = require("thread-loader");

threadLoader.warmup({}, [
  "cache-loader",
  "typings-for-css-modules-loader",
  "style-loader",
  "postcss-loader"
]);

module.exports = {
  entry: ["react-hot-loader/patch", "./docs/index.tsx"],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["cache-loader", "react-hot-loader/webpack", "ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "thread-loader",
          "cache-loader",
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  recordsPath: path.join(__dirname, "records.json"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HardSourceWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./docs/index.template.ejs",
      inject: "body"
    }),
    new AutoDllPlugin({
      inject: true,
      filename: "[name]_[hash].js",
      path: "./dll",
      entry: {
        vendor: ["react", "react-dom", "color", "react-css-themr"]
      }
    }),
    new webpack.NamedModulesPlugin()
  ]
};
