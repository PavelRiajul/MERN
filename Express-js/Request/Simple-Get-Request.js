//Simple Get Request

const express = require('express')
app=express()

//get method
//1st parameter hocche url,kon url er maddome request ta pathabo. 2nd parameter hocche callback function.callback function er bitore 2 ta parameter thakbe 1->request 2->response
app.get('/',function(req,res){
    res.end('This is simple get request')
})

app.listen(8000,function(){
    console.log('Server run success')
})