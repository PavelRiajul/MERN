// akhon amra soro korbo application level query
//jokhon amra web application develop korbo amra , tokhon mongodb te kon doroner query gola aamader lekhte hobe.

//* Query practices korar somoy mongodb extion er playground a prictices korbo.

//*Insert Query
// mongodb database a jokhon amra data insert korbo, insert korar khetre amra akta data jodi insert kori, ba akta document jodi insert kori, sei khetre amra insertOne() method use korte pari, are amra jodi multiple data insert kori onek golo data aksathe insert korte chai , seikhetre amra insertMany() mathod use korbo.


// jokhon mongodb te akta object insert hoy , tokhon se kore ki , bydefault _id namee a  se uniq key generate kore fele prottekta document er jonno.

//example:
// use('Craftshop') //--> database name
// 
// db.brand.insertOne(   //--> brand holo collection/table
    // {
        // "name":"Apple",
        // "designation":"Manager",
        // "salary":390000
    // }
// )