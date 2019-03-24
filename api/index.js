//后台接口开发

const express = require('express')
const db = require('./db')
const app = express()

//指定api路径 allBooks(json接口)
/* app.get('/allBooks',(req,res)=>{
  let sql = 'select * from book'
  db.base(sql,null,(result)=>{
    res.json(result) //转换成json格式
  })
}) */


//修改回调函数键名
app.set('jsonp callback name','cb')
//指定api路径 allBooks(jsonp接口)
app.get('/allBooks',(req,res)=>{
  let sql = 'select * from book'
  db.base(sql,null,(result)=>{
    res.jsonp(result) 
  })
})

app.listen(3000,()=>{
  console.log('runing');
})


