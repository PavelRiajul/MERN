//JSON Response


const express = require('express')

app=express();

//JSON Response ->method er name holo get method -> routing point er name holo /four
app.get('/four', function(req,res){
    let myJsonArray=[
        {
            name:'riajul',
            city:'Dhaka',
            Job:'student'
        },
        {
            name:'pavel',
            city:'Brahmanbaria',
            Job:'student'
        }
    ]
    res.json(myJsonArray)    //json method er bitore ami kon json array ta ke response akare  dete chacchi oi json array ta  dete hobe,json array er bitore onke gola json object thakte pare
})



app.listen(1000, function(){
    console.log('Server run success')
})