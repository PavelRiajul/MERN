//Route Level Middleware

//specifice akta route er jonno akta  middleware execute hobe.

const express = require('express')
var app=express();


app.get('/',function(req,res){
    res.send('This is home page')
})

//about er jonno akta middleware execute korbo. er jonno spacifice path bole dete hobe.about jokhon call hobe tokhon ee about middle ta execute hobe.
app.use('/about',function(req,res,next){
    console.log('I am about Route Level Middleware')
    next();
})
app.get('/about',function(req,res){
    res.send('This is About page')
})

app.get('/contact',function(req,res){
    res.send('This is Contact page')
})

app.listen(1010,function(){
    console.log('server run success')
})