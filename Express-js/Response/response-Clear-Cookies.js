//Response Clear Cookies
// cookie theke data kivabe clear/remove korbo


const express = require('express')

app=express();

app.get('/seven', function(req,res){
    res.cookie('name','riajul')
    res.cookie('city','Dhaka')
    res.cookie('age','22 years old')
})

//cookie clear  akhon amra name are city cookie ke clear korbo
app.get('/eight', function(req,res){
     res.clearCookie('name')
     res.clearCookie('age')
    res.end('cookie clear success')
    
})



app.listen(1000, function(){
    console.log('Server run success')
})