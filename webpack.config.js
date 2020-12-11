const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            // 'react-hot-loader/patch', 
            '@babel/polyfill', './src/index.tsx'
        ],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'linaria/loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.mjs'],
        alias: {
            '@ui': path.resolve(__dirname, 'src', 'ui'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            // 'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React/Typescript',
            template: 'public/index.html',
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        stats: {
            modules: false,
            children: false,
        },
    },
}
