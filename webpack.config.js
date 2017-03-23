
// var webpack=require('webpack');



// // 入口
// var entry='./index.js';

// // 出口
// // var outputs={
// //         path:__dirname,
// //         filename:'./dist/bundle.js'
// //     }

// //模块文件加载器
// var module={
//     loaders:[
//          {test: /\.css$/, loader: 'style-loader!css-loader'}
//     ]
// }

// // 插件
// var plugins=[
//     new webpack.BannerPlugin('This file is created by zhaoda')
// ]


// //配置参数
// var config={
//     entry:entry,

//     output:{
//         path:__dirname,
//         filename:'./dist/bundle.js'
//     },

//     // module:module,

//     // plugins:plugins
// }


// module.exports=config;


var webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    // publicPath:'/public',
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test:/\.html$/, loader: 'html-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
            filename: './dist/index.html',    
            template: './src/index.html',
            inject: true,            
            hash: true,             
            minify: {               
                removeComments: true,  
                collapseWhitespace: false  
            }
    }),
    new OpenBrowserPlugin({
            url: 'http://localhost:8080/dist'
    })
  ],
  devtool: 'source-map',
  devServer:{}
}