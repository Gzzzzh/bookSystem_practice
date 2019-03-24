

$(function(){
  
 
  function init(){
      $.ajax({
        type:'get',
        url:'/books',
        dataType:'json',
        success:function(data){
          let html = template('indexTpl',{list:data})
          $('#dataList').html(html)
          //重置表单
          $('.form').get(0).reset()
          $('.form').find('input[type=hidden]').val('')
          $('#addBookId').click(function(){
            addBook()
          })
          $('#dataList').find('tr').each(function(index,item){
            let td = $(item).find('td:eq(5)') //找到操作td
            let id = $(item).find('td:eq(0)').text()
            td.find('a:eq(0)').click(function(){ //给修改添加点击事件
              editBook(id)
            })
            td.find('a:eq(1)').click(function(){ //给删除添加点击事件
              deleteBook(id)
              console.log(2);
            })
          })
        }
      })
  }
  //渲染列表数据
  init()

  //修改图书
  function editBook(id) {
    //先根据数据id查询最新的数据
    $.ajax({
      type:'get',
      url:'/books/book/'+id,
      dataType:'json',
      success:function(data){
        //取回数据后出现新弹框
        $('.form').dialog({
          width:300,
          height:300,
          title:'修改图书',
          dialogClass:'no-close',
          modal:true,
        })
        $('.form').find('input[name=id]').val(data.id)
        $('.form').find('input[name=name]').val(data.name)
        $('.form').find('input[name=author]').val(data.author)
        $('.form').find('input[name=category]').val(data.category)
        $('.form').find('input[name=description]').val(data.description)
        $('.form').find('input[type=button]').unbind('click').click(function(){
          let name = $('.form').find('input[name=name]')
          if(name.val() === '' || name.val() === '请输入书本名字' ){
            name.val('请输入书本名字')
            return
          }
          $.ajax({
            type:'put',
            url:'/books/book',
            data:$('.form').serialize(),
            dataType:'json',
            success:function(data){
              if(data.flag == 1){
                $('.form').dialog('close')
                //修改成功之后重新加载数据列表
                init()
              }
            }
          })
        })
      }
    })
  }

  //添加图书
  function addBook() {
    //添加图书
    $('.form').dialog({
      height:300,
      width:300,
      modal:true,
      dialogClass:'no-close',
      title:'添加图书',
    })
    $('.form').find('input[type=button]').unbind('click').click(function(){
      let name = $('.form').find('input[name=name]')
      if(name.val() === '' || name.val() === '请输入书本名字' ){
        name.val('请输入书本名字')
        return
      }
      $.ajax({
        type:'post',
        url:'/books/book',
        data:$('.form').serialize(),
        dataType:'json',
        success:function(data){
          if(data.flag == 1){
            $('.form').dialog('close')
            //添加成功之后重新加载数据列表
            init()
          }
        }
      })
    })
  
  }

  //删除图书
  function deleteBook(id){
    $.ajax({
      type:'delete',
      url:'/books/book/'+id,
      dataType:'json',
      success:function(data){
        if(data.flag == 1){
          init()
        }
      }
    })
  }
  
})
