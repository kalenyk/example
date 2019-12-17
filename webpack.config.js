const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ["./app/src/index.js"],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].js"
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'less-loader'
                    ]
                })
            },

            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'less-loader'
                    ]
                })
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env': {
                API_ENDPOINT: "'http://localhost:8001'"
            }
        }),
        new Dotenv(),
    ]
};
