//Fs Asynchronous poddoti te file rename.
//rename holo old file take new name deya -> modify
// var http = require('http');
// var fs = require('fs')
// 
// var server= http.createServer(function(req,res){
//    if(req.url=="/"){
   // first a old file er name dete hobe. tarbor new file er name demo,tarpor callback function
    // fs.rename('demo.txt','demoNew.txt',function(error){
        // if(error){
            // res.writeHead(200,{'Content-Type':'txt/html'})
            // res.write('file write fail')
        // }else{
            // res.writeHead(200,{'Content-Type':'txt/html'})
            // res.write('file write Success');
            // res.end()
        // }
    // })
//    }
// })
// server.listen(4040);
// console.log('server run seccess')


//............................................................................................
//fs Synchronous poddoti te  file reanme korbo.

var http = require('http');
var fs = require('fs')

var server= http.createServer(function(req,res){
    if(req.url=="/"){
       let error =  fs.renameSync('demoSync.txt','demoSyncNew.txt')
        if(error){
            res.writeHead(300,{'Content-Type':'txt/html'})
            res.write('file rename fail')
        }else{
            res.writeHead(300,{'Content-Type':'txt/html'})
            res.write('file rename success');
            res.end()
        }
    }
})
server.listen(2020);
console.log('server run seccess')