const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.config')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || "3000"

// global css
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\]src[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
})
// local less modules
loaders.push({
    test: /\.less$/,
    exclude: /[\/\\](node_modules|public\/)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]__[hash:base64:5]',
        'less'
    ]
})

// local css modules
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](node_modules|public\/)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]__[hash:base64:5]'
    ]
})

config.entry.unshift('react-hot-loader/patch')

module.exports = merge(config, {
    module: {
        loaders
    },
    devServer: {
        contentBase: '../public',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
})
