// Asynchronous poddote te file read...

//  var http= require('http')// server ke hendle korar jonno http module
//  var fs = require('fs')//fs module ke add korlam

//  var server = http.createServer(function(req,res){
   // amader req url jodi hoy home'/'tahole fs module use kore read korbo.file ta ke read korbo asynchronous poddotite.
      //  if(req.url=="/"){
        //  fs.readFile('index.html',function(error,data){
       //    data golo ke amra respons er modde write kore dele page ta show hobe browser a.
            // res.writeHead(200,{'Content-Type':'text/html'}) //respons code 200
       //    sodomatro body write korle hobe na, sathe Head o write korte hobe.
            //  res.write(data)
       //    respons ta ke sesh korte hobe
            //  res.end()

        //   });//readFile() method er bitor parameter 3 ta. 1->file er path,2->file er options,3->Callback function(most important aeta lagbe file return korar jonno)callback function er bitore 2 ta parameter thakbe.1->error=>jodi file read korte kono problem hoy sekhetre jodi kono error ashe seei error takee catch/dorar jonno error para meter use korbo.2->data=>data parameter hocche file read korar pore jeei data golo amra pabo seei data golo. moloto data golo manee hocche index.html page ta moloto page ta reade hobe ,read hoye data parameter a ashbe.
      //  }
//  })
//  server.listen(1010)
//  console.log('success run success')


//.........................................................................
//Synchronous poddote te file read

// var http = require('http')
// var fs = require('fs')
// 
// var server = http.createServer(function(req,res){
    // if(req.url=="/"){
     // readFile er sathe just Sync lagabo.and synchronous poddotite kono callback function thakee na.
       // var myData =  fs.readFileSync('index.html');//aekhane file ta read hobar pore index file jee data golo ase sob data amra aekhne amra peye jabo. je data golo amra pabo seei data golo akta variable arekhe dilam
      // res.writeHead(200,{'Content-Type':'text/html'})
      // res.write(myData)
      // res.end()
    // }
// })
// server.listen(3030);
// console.log('server run success')

//.........................................................................................
//just code
//Asynchronous poddote te file read

// var http=require('http')
// var fs = require('fs')
// var server=http.createServer(function(req,res){
// if(req.url=='/'){
  // fs.readFile('index.html',function(error,data){
    //  res.writeHead(200,{'Content-Type':'text/html'})
    //  res.write(data);
    //  res.end();
  // })
// }
// })
// server.listen(1010)
// console.log('server run success')

//.........................................................
//just code
//Synchronous poddote te filr read

var http=require('http')
var fs = require('fs')
var server=http.createServer(function(req,res){
if(req.url=='/'){
  let myData=fs.readFileSync('index.html')
  res.writeHead(300,{'Content-Type':'text/html'})
  res.write(myData);
  res.end();
}
})
server.listen(3030)
console.log('server run ')
