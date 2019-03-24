## 这是些是看视频学node.js跟着打的源码练习

### api文件夹
展示了如何运用restful方法进行请求

### http服务器请求
从服务器主动发送请求调用接口，类似于postman插件，里面有从百度和第三方天气查询例子

### booksystem
通过arttemplate模板，data.json，express实现简单的图书管理系统

### mybook-resful
在booksystem里面的方法进一步改进，通过路由接口到后台进行数据库操作，然后通过前端渲染得出信息，实现了增删查改功能

### mydb
引入npm中mysql的增删查改使用例子，还有简单的登陆验证功能

## db.js
这个文件是对操作数据库的方法进行了封装
#### 使用方法
1. npm i mysqljs/mysql --save
2. 在操作数据的js中引入模块 const db = require('路径/db')
3. db.base(sql,data,(result)=>{} 这里的result得到数据库操作后返回的结果