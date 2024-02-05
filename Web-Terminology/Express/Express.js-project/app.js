const express = require('express')
const app = new express()
const router = require('./src/routes/api')


// Security middleware joto golo thakbe sob amra routing er agee configure korbo. karon sob security check agee hobe. tarpor routing a jabe.
//security middleware import korbo

const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const xss = require('xss-clean')


//security middleware implement korbo
app.use(rateLimit())
app.use(helmet())
app.use(mongoSanitize())
app.use(cors())
app.use(xss())

//Request rate-limiting
//ratelimit theke akta limiter create korbo er bitore akta json object jabe.
const limiter = rateLimit({
  windowMs:10 * 60 * 1000, //15 minutes
  max:100 
});
app.use(limiter)

//api end point er versioning korte pari
app.use("/api/v1",router)





//undefiend route
// undefiend route hocche amon kono routing end point a jodi request ashe , jar kono ostitto nei ,tahole 4040 header a right hobe .status dekhabe fail , and data dekhabe not found.
app.use('*',(req,res)=>{
    res.status(404).json({status:"success",data:"Not found"})
})

module.exports=app