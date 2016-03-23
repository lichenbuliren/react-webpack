var path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        // 指定输出目录
        path: __dirname,
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{// css 编译器
            test: /\.css$/,
            loader: 'style!css'},{// js 编译器
            test: /\.jsx?$/,
            // 需要npn install babel-loader
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015','react']
            }
        }
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     loader: ['react-hot!jsx-loader?harmony'],
            //     // loader: ['react-hot','babel'],
            //     query: {
            //         presets: ['react','es2015'],
            //         // 使用系统默认文件缓存，提高编译速度
            //         cacheDirectory: true
            //     }
            // },

            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!less-loader'
            // },

            // {
            //     test: /\.(png|jpg)$/,
            //     // inline base64 URLs for <= 8k images
            //     loader: 'url-loader?limit=8192'
            // }
        ]
    },
    resolve: {
        // 指定后缀名省略文件类型
        extensions: ['','.js','.json','.jsx']
    }
};