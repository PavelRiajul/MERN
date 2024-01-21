//FS Asynchronous poddotite file delete korbo.
// file delete korle --> fs.unlink()  dete hobe.
// var http= require('http');
// var fs= require('fs')
// 
// var server = http.createServer(function(req,res){
    // if(req.url=="/"){
        // fs.unlink('demoNew.txt',function(error){
            // if(error){
                // res.writeHead(300,{'Content-Type':'txt/html'})
                // res.write('file delete fail')
            // }else{
                // res.writeHead(300,{'Content-Type':'txt/html'})
                // res.write('file delete Success')
                // res.end();
            // }
        // })
    // }
// })
// server.listen(4040);
// console.log('server run success')
//browser a test korbo

//......................................................................................
// fs Synchronous poddoti te file delete korbo


var http= require('http');
var fs= require('fs')

var server = http.createServer(function(req,res){
    if(req.url=="/"){
     let error =   fs.unlinkSync('demoSyncNew.txt')
     if(error){
        res.writeHead(300,{'Content-Type':'txt/html'})
        res.write('file delete fail')
     }else{
        res.writeHead(300,{'Content-Type':'txt/html'})
        res.write('file delete success')
        res.end()
     }
    }
})
server.listen(2020);
console.log('server run success')