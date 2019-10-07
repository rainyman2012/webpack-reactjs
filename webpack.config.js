const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("@babel/polyfill");


var path = require("path");

var SRC_DIR = path.resolve(__dirname, "src");
var PUB_DIR = path.resolve(__dirname, "public");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: PUB_DIR + /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html", // where is youe untranspiled html located.
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};