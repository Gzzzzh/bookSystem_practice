//封装操作数据库的通用API

const mysql = require('mysql')

exports.base = (sql,data,callback)=>{
  //创建数据库连接
const connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器域名或者ip地址
  user     : 'root',//登陆数据的账号
  password : '',////登陆数据库的密码
  database : 'book'
});
 
connection.connect(); //执行连接操作


//操作数据库(异步操作)
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  callback(results)
});
 

//关闭数据库
connection.end();
}