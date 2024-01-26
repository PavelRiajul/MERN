//Working With Multipart Form Data
// Jodi client-side theke kono form/data ke multipart form data akare server-side a submit kora hoy tokhon amra kivabe handle korbo 
//er jonno postman er body te from data naee akta option ase 
//jodi kono data from-data akare amader server-side a post kora hoy amader post method er bitore ,tokhon amra setake kivabe manage korbo.

//multipart form data jodi amader server-side a ashe ,tahole setakee manage korar jonno multer namee akta package manager ase setake use korte hobe.-> multer npm

const express= require('express');
var multer = require('multer')  //multer ke import/add korlam
var multer=multer() ; //multer er akta instanse create korlam
app=express();

//amra app er bitore multer theke array ke call korbo ba  use korbo.
app.use(multer.array())
//app er modee express theke static property ke use korbo,jar bitore amader parameter jabe public
app.use(express.static('public'))

//post method
app.post('/',function(req,res){
        //request theke amra body ke read korlee ,amra akta json data peye jabo.
       let jsonData=  req.body;
       res.send(JSON.stringify(jsonData))   //jsonData ta ke stringify korlam
})

app.listen(3030,function(){
    console.log('server run success')
})