//Get Request with URL Query
// request query holo url er bitore jee query parameter pass korabo seei query parameter ta.

const express = require('express')
app=express()

//request query
app.get('/',function(req,res){
    let firstName =req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName+" "+lastName)
})

app.listen(5000,function(){
    console.log('Server run success')
})

//browser/postman a test korar somoy url er modee  debo.
//localhost:5000:firstName=riajul&lastName=Islam