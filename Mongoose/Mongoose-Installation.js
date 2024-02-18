//Mongoose Installation
// akhon theke amra Mongoose neye kaj kora start korbo.

//*How to start
//1->Install Mongoose ( rest api project er bitore amra mongoose install kore nibo)
//2->Create Database connection (Mongoose install korar pore amader Mongodb jei database ase , sei databae er sathe amra Mongoose er maddome amader jei rest-api script ase  ba application ase setar modde connection stablish korbo)
//3-->Create your first Mongoose model (amra Mongoose er maddome first  data shape ba data model ta create kore nebo.)
//4--> Work with Mongoose model (er pore amra dekhbo je Mongoose er maddome amra jei data model ta create korlam sei model ta neye kivabe kaj kora jai)

//*............................................................................................*****
//3-> create first Mongoose model
// mongoose import --> const mongoose = require('mongoose')

// 1st dapee data schema create korbo
//2nd dapee geye sei data schema ta ke convert kore amra data-model baneye felbo.
//mongoose theke data-schema create korar jonno amra  mongoose theke schema namee akti building method ase sei method ta ke call korbo.(mongoose.schema), schema er bitore json object nebo.

//schema ke data model a convert korbo.(mongoose.model)
//example;
// const mongoose = require('mongoose')
// const DataSchema = mongoose.Schema({
    // Name:string,
    // Roll:string,
    // Class:string,
    // Remarks:string
// })
// 
//convert model
// const budgetModel = mongoose.model('budget',DataSchema);
// module.exports=budgetModel

//database collection  create korar jonno model Mongoose deye create korte hobe.karon mongoose er kaoje hocche ami jei doroner data shape neye kaj korbo, sei doroner data shape er jonno akta model create kore deya.
//ae data shape create kore manee hocche Model create kora, ae data shape create kora manee hocche Schema create kora.
/// amader query gola cholbe mongoose er maddome.
//*
//ae model ta create korbo, src folder er bitore models folder er bitore a

//*.....................................................
//akhon dekhbo ae model ti use kore amra data insert korte parri, data read korte pari, delete korte pari, update korte pri,select korte pari.
//er jonno amake controller create korte hobe.