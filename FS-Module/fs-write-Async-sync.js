//fs Asynchronous poddoti  te file write

// var http= require('http');
// var fs= require('fs')
// 
// var server=http.createServer(function(req,res){
    // if(req.url=="/"){
        // fs.writeFile('demo.txt','Hello nodejs',function(error){
            // if(error){
                // res.writeHead(200,{'Content-Type':'txt/html'})
                // res.write('File write fail')
            // }else{
                // res.writeHead(200,{'Content-Type':'txt/html'})
                // res.write('File write Success')
                // res.end()
            // }
        // }) //1st a file create korbo  er name dete hobe->demo.txt .2nd->file er bitore content dete hobe/data.akta file ke jodi bar bar write kori thole akadik bar seei file ta overwrite hobe/var var change.tarpor callback function.callback function er bitore 1 ta parameter error.jodi kono error ashe,tahole error parameter er sahajje ami seta peye jabo.
 //   }
//})
//server.listen(3030);
//console.log('server run success')


//...................................................................................................
//fs Synchronous poddoti te file write


var http= require('http');
var fs= require('fs')

var server = http.createServer(function(req,res){
    if(req.url=='/'){
      let error = fs.writeFileSync('demoSync.txt','Welcome to File sync')//file create kore file er name debo->demoSync.txt.tarpor file er bitore content debo.callback function thakbe na.
      if(error){
        res.writeHead(200,{'Content-Type':'txt/html'})
        res.write('File write Fail')
      }else{
        res.writeHead(200,{'Content-Type':'txt/html'})
        res.write('File write Success')
        res.end()
      }
    }
})
server.listen(3030);
console.log('server run success')