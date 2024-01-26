// Simple Post Request
//browser a post req dete parbo na.
// server theke browser a jai get request.browser er url path  deye kono post request jai na ,sob get request jai
//aekarone post request golo test korar jonno amra postman use korbo.

const express = require('express')
app=express()

// simple post request
app.post('/',function(req,res){
    res.send('This is simple post request')

})

app.listen(4000,function(){
    console.log('Server run success')
})