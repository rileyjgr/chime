const path = require('path');
const srcDir = path.join(__dirname, '/src/client');
const distDir = path.join(__dirname, '/src/dist');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    entry: `${srcDir}/index.jsx`,
    output: {
        path: distDir,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000&minetype=image/png'
            },
            {
                test: /\.jpg/,
                loader: 'file-loader'
            },
            {
                test : /\.jsx?/,
                include : srcDir,
                loader : 'babel-loader',
                query: {
                    presets: ['@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.DefinePlugin(envKeys)
    ]
};

