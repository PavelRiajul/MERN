//How Request Respons Model Works in Nasejs
//request respons model nodejs a kivabe a kaj kore.
//http je kono request amra dete pari

var http = require('http')
var server = http.createServer(function(req,res){
  //URL er maddome request pathabo
  if(req.url=='/')/* '/' home page ke bujai*/{
     res.writeHead(200,{'Content-Type':'text/html'})  //respon er joon jeei status code ae ta Head er bitore deye debo.er por contect-type deye debo
     //akhon amra respos er body debo
     res.write('<h1>This is Home Page</h1>') //browser a just body ta dekhte pabo/ header and status code ta dekhte pabo na. aegola dekhte pabo Network a.
     //akhon amra respons take end/close kore debo
     res.end();

  }else if(req.url=='/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>This is About Page</h1>')
    res.end();

  } else if(req.url=='/contact'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>This is contact Page</h1>')
    res.end();
  }
})

server.listen(5000);
console.log('server run success')