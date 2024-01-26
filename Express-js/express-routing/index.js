const express = require('express')

app=express();

app.get('/',function(req,res){    //alada alada route
    res.send('Home page')
})

app.get('/about',function(req,res){       //alada alada route
    res.send('About page')
})

app.get('/terms',function(req,res){        //alada alada route
    res.send('Terms page')
})

app.get('/contact',function(req,res){     //alada alada route
    res.send('Contact page')
})

app.listen(3000,function(){              // ae application ti 3000 port  a run hobe browser a 
    console.log('Server run success')
})


//application ta  run koranor jonno
//1->package.json file create korte hobe(npm init --y) 
//2->express install korte hobe(npm install express --save)