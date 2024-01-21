//fs Synchronous  poddoti te file exists korbo
//file exists holo -->  ae folder er bitore specifice kono file ase kina.
// var http= require('http')
// var fs= require('fs')
// 
// var server = http.createServer(function(req,res){
    //  if(req.url=="/"){
    //    demo.txt file ta ase ki na check korbo. jodi thake true na thakle false hobe.
    //    let result =fs.existsSync('demo.txt')
    //    if(result){
        // res.end('True')
    //    }else{
        // res.end(false)
    //    }
    //  }
// })
// server.listen(2020)
// console.log('server run success')


//................................................................................................
// fs Asynchronous poddoti te file exists korbo.

var http= require('http')
var fs= require('fs')

var server = http.createServer(function(req,res){
   if(req.url=='/'){
    fs.exists('demo.txt',function(result){
        if(result){
            res.end("True")
        }else{
            res.end("False")
        }
    })
   }
})
server.listen(4040);
console.log('server run success')