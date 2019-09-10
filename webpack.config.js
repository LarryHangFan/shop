const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname,"./src/main.js"),
    output:{
        path : path.join(__dirname,"/dist"),
        filename:"bundle.js"
    },
    module:{
        // loaders:[
        //     //css文件打包
        //     {test:/\.css$/,loader:"style!css"},
        //     //js使用jsx-loader
        //     {test:/\.js$/,loader:"jsx-loader"}
        // ],
        rules:[
            {test:/\.ccs$/,use:['style-loader','css-loader']},
            {test:/\.sccs$/,use:['style-loader','css-loader','scss-loader']},
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
        new VueLoaderPlugin()
    ]

}