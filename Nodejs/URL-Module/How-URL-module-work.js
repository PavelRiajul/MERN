//URL module neye kaj korbo



var http = require('http')
var URl = require('url'); //url module add korlam/ variable er bitore rekhe dilam.
var server = http.createServer(function(req,res){
      //akta url ke benge/tokra tokra korbo
      var myURL= 'http:rabbil.com/blog.html?year=2020&month=july'
      //ae url ta ke amra bangbo
     var myURlObject=  URl.parse(myURL,true) // url.parse korle url benge geye ae url theke amra akta object pabo.jeei object er bitore hist name,path name,search query aegolo alada alada vabe obosta korbe.

     //akhon amra ae object theke Host name ke alada korbo
     var myHostName = myURlObject.host
     var myPathName= myURlObject.pathname
     var mySearchname=myURlObject.search

     //ae golo amra body te write korbo  .manee body te amra hostname ta dekhte pabo.
     res.writeHead(200,{'Content-Type':'text/html'})  //response er Head
     res.write(mySearchname)  //response er body
     res.end()
})
server.listen(4040);
console.log('Server Run ')