/*
业务模块
*/
const path = require('path')
const fs = require('fs')
const db = require('./db')



//自动生成图书编号(自增)
/*  let maxBookCode = ()=>{
  let id = 0
  let sql = 'select id from book where id >= ALL (select id from book)'
  db.base(sql,null,(result)=>{
    if(result.length !== 0){
      id = result[0].id
    }
  })
  return id
}  */

//渲染主页面
exports.showIndex = (req,res) =>{
  let sql = 'select * from book'
  db.base(sql,null,(result)=>{
    res.render('index',{list:result})
  })
}

//跳转到添加图书页面
exports.toAddBook = (req,res)=>{
  res.render('toAddBook',{})
}

//添加图书保存数据
exports.addBook = (req,res)=>{
  //获取表单数据
  let info = req.body
  let book = {}
  for(let key in info){
    book[key] = info[key]
  }
  let sql = 'insert into book set ?'
  db.base(sql,book,(result)=>{
    if(result.affectedRows == 1 ){
      res.redirect('/')
    }
  })
}

//跳转的修改页面
exports.toEditBook = (req,res)=>{
  let id = req.query.id //用来获取get请求中的参数
  let sql = 'select * from book where id = ?'
  let data = [id]
  db.base(sql,data,(result)=>{
    res.render('toEditBook',result[0])
  })
}


//修改图书保存数据
exports.editBook = (req,res)=>{
  let info = req.body
  let sql = 'update book set name=?,author=?,category=?,description=? where id =?'
  let data = [info.name,info.author,info.category,info.description,info.id]
  db.base(sql,data,(result)=>{
    if(result.affectedRows == 1){
      res.redirect('/')
    }
  }) 
}


//删除图书
exports.deleteBook = (req,res)=>{
  let id = req.query.id
  let sql = 'delete from book where id = ?'
  let data =[id]
  db.base(sql,data,(result)=>{
    if(result.affectedRows == 1){
      res.redirect('/')
    }
  })
}