const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: [
        './src/main.jsx' // your app's entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less'],
        root: [
            path.join(__dirname, '../src'),
            path.join(__dirname, '../node_modules')
        ]
    }
}
