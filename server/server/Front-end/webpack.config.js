const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    entry: [
        path.join(__dirname, './client/app.js'),
    ],
    output: {
        path: path.join(__dirname, './../dist'),
        filename: '[name].bundle.js',
        publicPath: '../dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'client'),
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                })
            }, {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }, {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: ''
                    }
                }]
            }
        ]
    },
    watch: true,
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new WebpackNotifierPlugin(),
    ],
    devtool: 'cheap-source-map',
};

module.exports = webpackConfig;
