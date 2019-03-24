/*
  从服务器主动发送请求调用接口-修改数据
*/

const http = require('http')
const querystring = require('querystring')

let options = {
  protocol:'http:',
  hostname:'localhost',
  port:3000,
  path:'/books/book/',
  method:'put',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
  }
}

let req = http.request(options,(res)=>{
  let info = ''
  res.on('data',(chunk)=>{
    info+=chunk
  })

  res.on('end',()=>{
    console.log(info);
  })
})

let data = querystring.stringify({
  //对象转成字符串
  id:33,
  name:'ad1',
  author:'aas1',
  category:'asda2',
  description:'asda1'
})

req.write(data)

req.end()