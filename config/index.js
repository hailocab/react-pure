'use strict';
var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var merge = require('./merge');

var pkg = require('../package.json');

var DEMO_DIR = 'demo';
var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname, '..');
var config = {
    paths: {
        dist: path.join(ROOT_PATH, 'dist'),
        src: path.join(ROOT_PATH, 'src'),
        demo: path.join(ROOT_PATH, DEMO_DIR),
        demoIndex: path.join(ROOT_PATH, DEMO_DIR, '/index'),
    },
    filename: 'react-pure',
    library: 'ReactPure',
    demoDirectory: DEMO_DIR,
};

var mergeDemo = merge.bind(null, {
    resolve: {
        extensions: ['', '.js', '.jsx', '.md', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.md$/,
                loaders: ['html', 'highlight', 'markdown'],
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ]
    }
});

if (TARGET === 'dev') {
    module.exports = mergeDemo({
        port: 3000,
        devtool: 'eval',
        entry: [
            'webpack-dev-server/client?http://0.0.0.0:3000',
            'webpack/hot/only-dev-server',
            config.paths.demoIndex,
        ],
        output: {
            path: __dirname,
            filename: 'bundle.js',
            publicPath: '/' + config.demoDirectory + '/'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development'),
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
        ],
        module: {
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['eslint'],
                    include: [config.paths.demo, config.paths.src],
                }
            ],
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel'],
                    include: [config.paths.demo, config.paths.src],
                },
            ]
        }
    });
}

if (TARGET === 'gh-pages') {
    module.exports = mergeDemo({
        entry: [
            config.paths.demoIndex,
        ],
        output: {
            path: './gh-pages',
            filename: 'bundle.js',
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production'),
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
            }),
            new HtmlWebpackPlugin({
                title: pkg.name + ' - ' + pkg.description
            }),
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['babel'],
                    include: [config.paths.demo, config.paths.src],
                }
            ]
        }
    });
}

var mergeDist = merge.bind(null, {
    devtool: 'source-map',
    output: {
        path: config.paths.dist,
        libraryTarget: 'umd',
        library: config.library,
    },
    entry: config.paths.src,
    externals: {
        react: 'react',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: config.paths.src,
            }
        ]
    }
});

if (TARGET === 'dist') {
    module.exports = mergeDist({
        output: {
            filename: config.filename + '.js',
        },
    });
}

if (TARGET === 'dist-min') {
    module.exports = mergeDist({
        output: {
            filename: config.filename + '.min.js',
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
            }),
        ],
    });
}
