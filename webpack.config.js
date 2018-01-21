const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const threadLoader = require("thread-loader");

threadLoader.warmup({}, [
  "cache-loader",
  "css-hot-loader",
  "react-hot-loader/webpack",
  "typings-for-css-modules-loader",
  "style-loader",
  "postcss-loader"
]);

module.exports = {
  entry: ["react-hot-loader/patch", "./docs/index.tsx"],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    quiet: true,
    historyApiFallback: true,
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
        use: ["cache-loader", "css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "thread-loader",
              {
                loader: "typings-for-css-modules-loader",
                options: {
                  modules: true,
                  namedExport: true,
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
              },
              "postcss-loader"
            ]
          })
        )
      },
      {
        test: /\.md/,
        use: ["cache-loader", "raw-loader"]
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
    new FriendlyErrorsWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{ from: "./docs/assets", to: "./assets" }]),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
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
