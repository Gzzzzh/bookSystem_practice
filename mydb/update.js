//更新数据

//操作数据库基本步骤

//加载数据库驱动
const mysql   = require('mysql');

//创建数据库连接
const connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器域名或者ip地址
  user     : 'root',//登陆数据的账号
  password : '',////登陆数据库的密码
  database : 'book'
});
 
connection.connect(); //执行连接操作

let sql = 'update book set name=?,author=?,category=?,description=? where id=?'
let data = ['浪潮之巅','吴军','计算机','IP巨头的兴衰史',5]


//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1){
    console.log("更新成功");
  }
});
 

//关闭数据库
connection.end();