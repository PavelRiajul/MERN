//Post Request json
//post request er modee json body ke manage korte pari.
//first a body-parser-npm  node package ta ke install korte hobe.tarpor body-parser ke require korbo.


const express=require('express');
const bodyParser=require('body-parser')  //body-parser ke require korbo
app=express();
//app er sathe .use() kore bodyOarser theke json ke use korbo
app.use(bodyParser.json())

//post method
app.post('/',function(req,res){
    let jsonData = req.body;   //req theke body ke call korlam

   // jsondata ta ke jodi output a dekhte chai tahole stringify korte hobe
   //let jsonString=JSON.stringify(jsonData)
   //akhon josi output akare dekhte chai
   //res.send(jsonString)

   //................................
   // jodi chai json data ke porapori stringify na kore ,spacifice vabe json er kono property ke dorbo
   let name = jsonData['name']
   let city=jsonData['city']
   res.send(name+' '+city)

})

app.listen(2020,function(){
    console.log('server run success')
})