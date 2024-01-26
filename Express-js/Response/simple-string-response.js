// Simple String response
//simple string response get/post method er maddome dete pari.
//simple string response deyar somoy  res parameter send/end ae 2 ta method use korte parbo parameter ke call korbo.
//res.send() method -> response er body ke indegate kore.
//res.end() method ->  response er sorbosesh/ending point jeei obostha ta ase  seei obostha ta prokash kore.

const express = require('express')

app=express();

//get method
app.get('/one', function(req,res){
    res.send('This is simple string response')
})

//post method
app.post('/two', function(req,res){
    res.send('This is simple string response')
})


app.listen(3000, function(){
    console.log('Server run success')
})