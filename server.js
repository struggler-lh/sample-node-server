//express node server demo
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express(),
    host = 'localhost',
    port = 8081;

//项目根路径
app.use(express.static('./dist'));

//反向代理配置
app.use('/basePath',
    proxy({
        target: 'http://host:port', "secure": false, "changeOrigin": true
    })
);
//监听端口
app.listen(port, host, function () {
    console.log('The node server running ');
});