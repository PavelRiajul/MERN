const express = require("express")
const app = new express();
const router = require("./src/routes/api")

//Security Middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//security Middleware implement
app.use(cors())
app.use(hpp())
app.use(mongoSanitize())
app.use(helmet())
app.use(bodyParser.json())  // bodyparser user

//Request Rate Limiting
const limiter = rateLimit({
    windowMs:15*60*1000,
    max:100
})
app.use(limiter)

//database connection............................................
// const mongoLocal = 'mongodb://127.0.0.1:27017/Craftshop';
// const options = {user:"",pass:""}
// mongoose.connect(mongoLocal, options,{
// 
// })
// .then(()=>console.log('connected mongodb'))
// .catch((err)=>{
  // console.log(err)
// })
// 


//mongoose connection local server
// const mongoLocal = "mongodb://127.0.0.1:27017/CRUD";
// const options = {user:"",pass:""}
// mongoose.connect(mongoLocal,options)
// .then(()=>console.log("Connect successfully"))
// .catch((err)=>{
  // console.log(err)
// })
// 

//mongoose connection cloud-atlas
let uri = "mongodb+srv://riajul:riajul1234@cluster0.zjr1bbg.mongodb.net/CRUD"
let options = {user:'',pass:''}
mongoose.connect(uri,options)
.then(()=>console.log('mongodb connected'))
.catch((err)=>{
  console.log(err)
})


app.use("/api/v1",router)


// undefind route
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})

module.exports= app