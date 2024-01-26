//Working with Get Request Header

const express= require('express')
app=express()
//akhon amra req theke header ke call korbo
app.get('/',function(req,res){
    // header er kon property ta ke dorte chacchi oi property er name header method er bitore deye debo.
    let firstName = req.header('firstName')
    let lastname = req.header('lastname')
    res.end(firstName+' '+lastname)



})

app.listen(2000,function(){
    console.log('server run success')
})