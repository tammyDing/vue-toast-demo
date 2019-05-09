const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: './src/lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-toast-demo.js',
        libraryTarget: 'umd', // 指定输出文件格式,umd可以指令输出各种规范
        library: 'VueToastDemo' // 指定输出的名字
    },
    /**
     * module一般放加载器，rule规则，通过规则匹配文件进行解析
     */
    module: {
        rules: [
            {
                test: /\.vue$/, // 对vue文件进行解析
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除目录
                include: path.resolve(__dirname, 'src'), // 指定解析的目录
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    { 
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            }
        ]
    },
    /**
     * plugins一般放js合并，html生成，以及一些其他的插件
     */
    plugins: [
        // 确保使用VueLoaderPlugin
        new VueLoaderPlugin()
    ]
};
