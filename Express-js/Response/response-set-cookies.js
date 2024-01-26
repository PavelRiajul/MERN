//Response Set Cookies
//respon a cooki josi set korte chai ,tahole res theke cookie name akta method ase oita ke call korte hobe.
//cookie  er 1st parameter holo key,tarpor 2nd parameter holo  seei key er under a value deye debo.


const express = require('express')

app=express();

//get method
app.get('/seven', function(req,res){
    res.cookie('name','riajul')
    res.cookie('city','Dhaka')
    res.end('cookie set success')
})


app.listen(2000, function(){
    console.log('Server run success')
})


//browser a cookie value  dekhar jonno firefix a inspact kore storage a jabo.