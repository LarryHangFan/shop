const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: path.join(__dirname,"./src/main.js"),
    entry: "./src/main.js",
    output:{
        // path : path.join(__dirname,"/dist"),
        filename:"./dist/bundle.js"
    },
    module:{
        // loaders:[
        //     //css文件打包
        //     {test:/\.css$/,loader:"style!css"},
        //     //js使用jsx-loader
        //     {test:/\.js$/,loader:"jsx-loader"}
        // ],
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|jpeg|bmp)$/,use:['url-loader?limit=9800&name=[hash:8]-[name].[ext]']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:"vue-loader"}
        ]
    },
    resolve:{
        alias: {
            // "vue$":"vue/dist/vue.js"
        },
        extensions:['.js','.jsx','.vue']
    },
    plugins:[
         
        new HtmlWebpackPlugin(
            {
                title: 'Custom template',
                template: './src/index.html', //指定要打包的html路径和文件名
                filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
                showErrors: true,
                hash: true //给生成的 js 文件一个独特的 hash 值 <script type=text/javascript src=bundle.js?22b9692e22e7be37b57e></script>
            }
        ),
        new VueLoaderPlugin()
    ],
    externals:{
        // 'mint-ui':'MINT'
    }

}