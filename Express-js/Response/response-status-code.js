//response status code
// response status code ke chaile ami nijer moto kore manipulate/change korte pari.
//status code ak aktar mane ak ak rokom.


const express = require('express')

app=express();


//response status code
app.get('/three', function(req,res){
    res.status('401')                  //status code ke manipulate korte gele res.status() use korte hobe.tarpor response end korte hobe.res.end();
    res.end()
})


app.listen(3000, function(){
    console.log('Server run success')
})



