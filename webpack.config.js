const path = require("path");

module.exports = () => {
  return {
    entry: ["./src/index.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"],
          test: /\.s?css$/
        }
      ]
    }
  }
}