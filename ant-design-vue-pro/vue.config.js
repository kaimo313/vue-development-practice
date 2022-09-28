const path = require("path");

const AntDesignThemePlugin = require('./webpack-plugins/antd-theme-webpack-plugin');

const options = {
    antDir: path.join(__dirname, './node_modules/ant-design-vue'),
    stylesDir: path.join(__dirname, './src'),
    varFile: path.join(__dirname, './src/assets/styles/theme/variables.less'),
    themeVariables: ['@primary-color'],
    generateOnce: false
}

const themePlugin = new AntDesignThemePlugin(options);

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                },
                javascriptEnabled: true
            },
        }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear();
        // 添加要替换的 loader
        svgRule.use('vue-svg-loader').loader('vue-svg-loader');
    },
    configureWebpack: {
        plugins: [ themePlugin ]
    },
    devServer: {
        proxy: {
            // '@(/api)': { target: 'http://localhost:3000',
            '/api': {
                target: 'http://localhost:8080',
                bypass: function (req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        console.log('Skipping proxy for browser request.');
                        return '/index.html';
                    } else if(process.env.MOCK !== "none") {
                        // 将请求url转为文件名
                        const name = req.path.split("/api/")[1].split("/").join("_");
                        const mock = require(`./mock/${name}`);
                        const result = mock(req.method);
                        // 需要清除缓存
                        delete require.cache[require.resolve(`./mock/${name}`)];
                        return res.send(result);
                    }
                },
            },
        },
    },
}