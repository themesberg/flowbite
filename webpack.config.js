/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        flowbite: path.resolve(__dirname, 'src/index.umd.ts'),
        'flowbite.min': path.resolve(__dirname, 'src/index.umd.ts'),
        'flowbite.turbo': path.resolve(__dirname, 'src/index.turbo.ts'),
        'flowbite.turbo.min': path.resolve(__dirname, 'src/index.turbo.ts'),
        'flowbite.phoenix': path.resolve(__dirname, 'src/index.phoenix.ts'),
        'flowbite.phoenix.min': path.resolve(__dirname, 'src/index.phoenix.ts'),
        datepicker: path.resolve(__dirname, 'src/plugins/datepicker.js'),
        'datepicker.min': path.resolve(__dirname, 'src/plugins/datepicker.js'),
        'datepicker.turbo': path.resolve(
            __dirname,
            'src/plugins/datepicker.turbo.js'
        ),
        'datepicker.turbo.min': path.resolve(
            __dirname,
            'src/plugins/datepicker.turbo.js'
        ),
        docs: path.resolve(__dirname, 'src/docs.js'),
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'Flowbite',
        umdNamedDefine: true,
        path: path.resolve(__dirname, 'static/'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'static/images/',
                },
            },
            {
                test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin({
                include: /\.min\.(css|js)$/,
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    target: ['web', 'es5'],
};
