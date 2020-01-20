var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval',

    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
            rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}