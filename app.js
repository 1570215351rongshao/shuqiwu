//引入express
const express=require('express');

//引入user路由
const user=require('./routers/user.js');

//引入中间件
const bodyParser=require('body-parser');

//创建web服务器
var app=express();
//监听路由
app.listen(8080);
//使用中间件
app.use(bodyParser.urlencoded({
        extended:false
}));
//托管静态资源管理
app.use(express.static('public'));
//使用路由
app.use('/user',user);