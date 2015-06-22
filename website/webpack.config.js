var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var data = require('./data');

module.exports = {
    entry: './website/site.js',
    output: {
        filename: 'bundle.js',
        path: __dirname,
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.js$/, loader: 'babel-loader', include: /website/}
        ]
    },
    plugins: [
        new ExtractTextPlugin('allstyles.css', {allChunks: true}),
        new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ]
};
