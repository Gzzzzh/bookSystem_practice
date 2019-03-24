/*
通过第三方接口获得天气信息-封装通用模块
*/

const http = require('http')
const querystring = require('querystring')



//因为node.js操作是异步的不能直接返回结果，需要用回调函数把结果返回
exports.queryWeather = (cityCode,callback)=>{
let options = {
  protocol:'http:',
  hostname:'www.weather.com.cn',
  port:80,
  path:`/data/sk/${cityCode}.html`,
  method:'get'
}

let req = http.request(options,(res)=>{
  let info = ''
  res.on('data',(chunk)=>{
    info+=chunk
  })

  res.on('end',()=>{
    info = JSON.parse(info)
    callback(info)
  })
})

req.end()
}