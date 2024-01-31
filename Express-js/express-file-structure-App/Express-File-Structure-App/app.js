//Application Configuration hold

// app create korbo
const express = require('express'); //express import
// ae express er akta instant/obj create korbo
const app = new express();
//1 ta router je create korlam oita ke import korbo
const router = require('./src/Routes/api')

//ae express.js  er jeei configuration body  aetar bitore application er jeei route ase ,seei application er route ta first  a set korte hobe.
//* Application Routes
app.use('/api',router)  //aekhane router ta ke configuer kore dilam



//ae app ta ke je create korlam ae app ta ke export kore debo
module.exports=app;