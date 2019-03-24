//实现图书管理系统后台接口

const express = require('express')
const router = require('./router.js')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyparser.urlencoded({extends:false}))
app.use(bodyparser.json())

app.use(router)

app.listen(3000,()=>{
  console.log('running');
})

