// Mt first Node Server Hello world program
//server create korar konno nodejs er core-module->(http) module dorkar.

// first a http module ta ke connect/import korte hobe,http module ta ke connect korar jonno akta variable nebo.
//akta require() function  holo amra jee module ta ke connect korte chacchi , seei module ta ke se ane deba.
//var http=require('http')

//http variable theke createServer() name  a method ke call kore debo. akhon createServer() method er bitore akta callbacj function jabe.callback function er bitore 2 ta parameter jabe->1(req)-server a je request jabe seei request ta ke handle korar jonno req parameter. 2->(res) server theke fainaly jeei respons genaret hobe seei respons ta ke handle korar jonno res parameter.

//akhon server ta ke akta port deye run korabo-port holo->3000,4000,5000,etc.to port deye run koranor joon server ta ke akta variable er bitore rekhe debo.
//var server = http.createServer(function(req,res){
//    res.end('Hello World')
//})

//akhon amra server ke listen korabo,kon port deye amra listen korabo,seei port bole debo
//exmple server.listen(5050)
//server.listen(5050);

//server ta run holo kina seta bojar jonno
//console.log('Server Run Success')

//server je run holo aeta pabo loocalhost a .browser a localhost lekhe konport a server ta ke run koraese seei port number ta deta hobe.
//exmple->localhost:5050->outpot pabo Hello World

//..............................

var http=require('http')
var server = http.createServer(function(req,res){
    res.end('Hello world')
})
server.listen(5000)
console.log('run success')