var express = require('express')// express,ja er module ke add/import korlam
//akhon applicatopn create korbo
app=express() //express ke  call korlam, setake jokhon call koresi app name property er bitore rekhe deyesi.

//app theke amra get() method ke korlam, get method er 1st parameter URL, tarpor akta callback function ,function er bitore 2 ta parameter 
app.get('/',function(req,res){
    res.send('Hello Express.js')
})

//application ta ke listen korabo/run korabo localhost a
app.listen(700,function(){   
    console.log('server run success')
})

//run korar jonno package .json file create korte hobe.
//tarpor express ke install korte hobe.