//Post Request URL Query

const express = require('express')
app=express()

// post request URl Query
app.post('/',function(req,res){
    
    let firstName= req.query.firstName;
    let lastName=req.query.lastName;
    res.send(firstName+' '+ lastName)

})

app.listen(2000,function(){
    console.log('Server run success')
})

//browser/postman a test korar somoy url er modee  debo.
//localhost:2000:firstName=riajul&lastName=Islam