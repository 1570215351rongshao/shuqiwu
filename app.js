//����express
const express=require('express');

//����user·��
const user=require('./routers/user.js');

//�����м��
const bodyParser=require('body-parser');

//����web������
var app=express();
//����·��
app.listen(8080);
//ʹ���м��
app.use(bodyParser.urlencoded({
        extended:false
}));
//�йܾ�̬��Դ����
app.use(express.static('public'));
//ʹ��·��
app.use('/user',user);