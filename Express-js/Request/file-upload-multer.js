//File upload
//multer deye file upload korbo.

const express= require('express')
var multer = require('multer')  //multer import
app=express()

//multer deye amra akta storage create korbo.amra diskStorage ke call korbo and er bitore akta object thakbe, ae object er 1st property holo destination.ae destination er modde akta callback function jabe,ae callback  er parameter 3 ta hobe. 1->req, 2->file 3->callback

var storage = multer.diskStorage({
    destination:function(req,file,callBack){
        callBack(null,'./uploads')
    },
    filename: function(req,file,callBack){
        callBack(null,file.originalname)  // original namee file ta upload hobe.file er name jodi abc hoy seei orginal name abc hobe
    }
})

//storage je amra create koresi ae storage thekee amra akta upload create korbo
var upload= multer({storage:storage}).single('myfile')

//app theke akta post method create korbo
app.post('/',function(req,res){
    //req er bitore file ta ke upload kore debo
    upload(req,res,function(error){
        if(error){
           res.send('file upload fail')
        }else{
          res.send('file upload success')
        }
    }) //upload ta ke call korlam.ae upload er modde req,res thakbe  and arekta callback function thakbe jeta hocche akta error callback function.
})


app.listen(3000,function(){
    console.log('server run success')
})


// postman deye file ta upload korbo. to postman deye jokhon amra file upload korbo file upload korar somoy amader jeei body ase seei body te form data option select korbo ,form data option select kore ,amra je akta file er name deye desi (myfile)-> ae key doree file ta  ke upload korbo.