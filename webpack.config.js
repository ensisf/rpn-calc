const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: ENV === "production" ? "none" : "source-map",
  mode: ENV || "development",
  resolve: {
    extensions: [".js"],
    alias: {
      utils: path.resolve(__dirname, "src/js/utils/"),
      css: path.resolve(__dirname, "src/css/"),
      modules: path.resolve(__dirname, "src/js/modules/"),
      constants: path.resolve(__dirname, "src/js/constants/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
