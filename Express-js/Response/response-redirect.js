//Response Redirect

const express = require('express')

app=express();


app.get('/Bangladesh', function(req,res){
    //bangladesh route a jokhon request debo,tokhon ae request redirect hobe,redirect hoye chole jabe india 
//kase. er jonno redirect() method ta ke call korbo

    res.redirect('http://localhost:1000/India')  //redirect method er bitore a bole debo amra kon URL a 
//redirect hote chacchi.

})
app.get('/India', function(req,res){
    res.send('This is India')
})


app.listen(1000, function(){
    console.log('Server run success')
})