const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff2|woff|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    port: 8080,
    public: "techclan-214512.appspot.com",
  },
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty",
  },
  plugins: [htmlWebpackPlugin],
};
