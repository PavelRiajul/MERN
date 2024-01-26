//Response Header
// response header part tar bitore o amra data rakhte pari.
//response header er bitore data rakhte gele  seei data er jonno akta (key) rakhte hobe, and seei key er under a akta (value) rakhte hobe.


const express = require('express')

app=express();

//get method
app.get('/six', function(req,res){
    //response header a data debo append() er maddome.  1st a key tarpor oi key er under a value debo.
    res.append('name','Riajul islam')
    res.append('age','22')
    
    res.status(201).end('Hello world')  //Hello world jabe response er body te .and status code a jabe 201
})



app.listen(1000, function(){
    console.log('Server run success')
})