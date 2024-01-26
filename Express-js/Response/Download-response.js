//Download Response
// jokhon kono file er download response neye ashbo,tokhon browser a kinto seei file ta download korar jonno akta  download popup show hobe hobe.


const express = require('express')

app=express();

//Download response-->get method/route in point /five
//upload file ta te akta download response debo
app.get('/five', function(req,res){
    res.download('./upload/my-setup2.jpeg')   // kon file ke download korate chacchi seii file er path ta  deye dete hobe.
    //jokhon ee amar /five a kono get request ashbe ,tokho aekhane akta download response ganarate hobe.jeei download respone amar upload folder a geye  image  er jee file ta ashbe seei file ta ke se neye ashbe.
})


app.listen(2000, function(){
    console.log('Server run success')
})