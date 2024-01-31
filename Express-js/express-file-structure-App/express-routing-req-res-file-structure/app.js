//Application all configuration hold

const express = require('express')
const app = express();
const router = require('./src/routes/api')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
//json pers korbo express.json jodi bole deei tahole amader body deye json amra pars korte parbo.
app.use(express.json())
//Application routes
app.use('/api',router)
module.exports=app;