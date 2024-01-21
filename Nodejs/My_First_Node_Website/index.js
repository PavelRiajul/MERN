var http= require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
  if(req.url=='/'){
    //fs module use kore amra file ta ke read korbo
   let data = fs.readFileSync('Home.html','utf8')
   res.end(data)
    //file er name debo.tarpor akta character set deye debo (utf8).character set jodi na deei, tahole  aeta kinto real server a bojte parbe na. localhost a bojte parbe.

  }else if(req.url=='/About'){
    let data = fs.readFileSync('About.html','utf8')
    res.end(data)
  }else if(req.url=='/Terms'){
    let data = fs.readFileSync('Terms.html','utf8')
    res.end(data)
  }else if(req.url=='/Contact'){
    let data = fs.readFileSync('Contact.html','utf8')
    res.end(data)
  }
})
server.listen(5050)
console.log('server run success')