//一个常见的Webpack配置文件
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-plugin');

module.exports = {
  entry:_dirname + "/app/main.js",  //唯一的入口文件
  output:{
    path:_dirname + "/build",    //打包后文件的存放的地方
    filename:"[name]-[hash].js"  //打包后文件输出的文件名
  },
  module:{
    loaders:[
    {
      test:/\.json$/,
      loader:"json"
    },
    {
      test:/\.js$/,
      exclude:/node_modules/,
      loader:'babel'
    },
    {
      test:/\.css$/,
      loader:ExtractTextPlugin.extract('style','css?modules!postcss')
    }
    ]
  },
  postcss:[
    require('autoprefixer')
  ],
  plugins:[
    new HtmlWebpackPlugins({
      template:_dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ]
}
