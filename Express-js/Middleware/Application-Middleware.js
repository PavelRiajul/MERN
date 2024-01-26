// Application Level Middleware
//ami chacchi  je amon akta  komon middleware ami rekhe debo ,jee middleware ta 3 ta req/res er Khetree execute hobe.orthat req/res amar jotogolae hok na keno ,se thakbe komon. se jotobar req/res hobe totobar execute hobe. tahole ae lebel er middleware goloke bolbo Application Middleware.

var express = require('express')
var app=express();

//app variable theke use function ke call korbo .and ae use function er bitore akta callback function hobe ae callback function er bitore  req,res,next  parameter jabe. next parameter bolar pesoner karon jeta,amra jani je req and res er maje middleware execute hoy.request er pore and  response er agee middleware execute hoy ae middleware pora process ta ke (next) step a patheye deei.
//poro step ta holo --> 1st a request ashlo tarpor middleware a geye next holo next hoye tarpor response a gelo.ae jonno next parameter bolar karon.
//server a akta request ashe,req ashar pore middleware/next a execute hoy,next hoye response ashe. 

app.use(function(req,res,next){
    console.log('I am Application level Middleware')  //jeei req/res debo na keno ae middleware ta sekhanee execute  korbe. and ae middleware execute hobar por next hobe ,and next hole response hobe.
    next();
})

app.get('/',function(req,res){
    res.send('This is Home Page')
})

app.get('/about',function(req,res){
    res.send('This is About Page')
})

app.get('/contact',function(req,res){
    res.send('This is Contact Page')
})

app.listen(2020, function(){
    console.log('server run success')
})