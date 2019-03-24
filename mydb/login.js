//登陆验证(前端+后端+数据库)

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.post('/check',(req,res)=>{
  let param = req.body
  let sql = 'select count(*) as total from user where username=? and password=?'
  let data =[param.username,param.password]
  db.base(sql,data,(result)=>{
    if(result[0].total == 1){
      res.send('登陆成功')
    }else{
      res.send('登陆失败')
    }
  })
})

app.listen(3000,()=>{
  console.log('running');
})