// Application Run
//index.js er bitore  amader poro application ta index.js er bitore neye aese run korabo.

const app= require('./app') 

// akta listen port lagbe
app.listen(1000,function(){
    console.log('Listening on port 3000')
})


//ae express application ta run korar jonno
//1-> package.json file create korte hobe (npm init --y)
//2->express instal korte hobe