/*
restful api 是从URL的格式来表述
get http://localhost:3000/books
get http://localhost:3000/books/book 
post http://localhost:3000/books/book
get http://localhost:3000/books/book/1
put http://localhost:3000/books/book
delete http://localhost:3000/books/book/2




传统URL风格
http://localhost:3000/
http://localhost:3000/toAddBook
http://localhost:3000/addBook
http://localhost:3000/toEditBook?id=1
http://localhost:3000/editBook
http://localhost:3000/deleteBook?id=2


*/
const express = require('express')
const db = require('./db')
const app = express()

/* app.get('/books',(req,res)=>{
  let sql = 'select * from book'
  db.base(sql,null,(result)=>{
    res.json(result)
  })
}) */

//http://localhost:3000/books/book/1
app.get('/books/book/:id',(req,res)=>{
  let id = req.params.id //1
  let sql = 'select * from book where id =?'
  let data = [id]
  db.base(sql,data,(result)=>{
    res.json(result[0])
  })
})

app.listen(3000,()=>{
  console.log('running');
})