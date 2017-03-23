var path = require('path');
var webpack = require('webpack');
//打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 给css3样式加前缀
var autoprefixer = require('autoprefixer');
var precss = require('precss');
// 自动生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');
//将css提取到单独文件中
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var pkg = require('./package.json');
// 文档声明格式
var banner = pkg.name + pkg.description + 'Author:' + pkg.author + 'Version: v' + pkg.version + 'Url:' + pkg.homepage + 'License(s):' + pkg.license;
// es6转换es5问题
var babelpolyfill = require("babel-polyfill");
// 提取公共脚本
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


// 生成的文件路径相对于输出的路径
module.exports = {
    entry: './index.js',
    //打包输出的文件
    output: {
        path: path.join(__dirname, '/'),
        filename: "dist/bundle.js"
    },
    // 加载器
    module: {
        loaders: [
            // es6文件react文件加载器,
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    // 模块的简写
    resolve: {
        // 注意需要加  .jsx
        extensions: ['', '.js', '.jsx', '.json', '.css','.less']
    },
    //源代码
    devtool: 'source-map',
    // 配置插件
    plugins: [
        //自动生成html
        new HtmlWebpackPlugin({
            // 生成的html路径
            filename: './dist/index.html',
            //html模板路径,根据src源代码生成的html
            template: './index.html',
            inject: true, //允许插件修改哪些内容，包括head与body
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        //提取css文件
        new ExtractTextPlugin("./dist/style.css"),
        //打开浏览器插件
        new OpenBrowserPlugin({
            url: 'http://localhost/dist/index.html'
        }),
        //给打包后的文档头部添加声明
        new webpack.BannerPlugin(banner),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        //提取公用部分
        new webpack.optimize.CommonsChunkPlugin('js/common.js')
    ]
}