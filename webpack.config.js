'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';

module.exports = function (env) {
    return {
        devtool: debug ? 'source-map' : null,
        entry: './src/main/webapp/js/index.js',
        output: {
            path: __dirname + '/src/main/webapp/',
            filename: 'index.min.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                    }
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }]
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('style.css')
        ]
    }
};
