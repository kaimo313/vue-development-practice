module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            },
        }
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