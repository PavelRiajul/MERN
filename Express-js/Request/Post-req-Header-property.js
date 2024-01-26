//Post Request Header Properties

const express = require('express')
app=express();

//posr req header
app.post('/',function(req,res){

    let firstName=req.header('firstName')
    let password=req.header('password')
    res.send(firstName+' '+password)
})

app.listen(3000,function(){
    console.log('server run success')
})