// row count 

// akhon dekhbo - kivabe row count kora jai. ortahat amader collection/table er bitore jei row gola royese ,koto golo row collection a royese ba koto golo document collection a royese se golo aksathe amra count korte chacchi.

//count korar khetre amra find method use kore o count korte pari. abar aggregate method use kore o count korte pari.

//db.products.find({}).count("total") // count parameter er bitore totallekhte hobe.
//db.products.aggregate([{$count:"total"}])



//aggregate ki? aggregate deye ki hoy?

//example- tea/cha bananor pora process ta ke bolbo -> pipeline. and cha bananor ak akta dab ke amra bolbo ak akta -> stage.


//database theke jokhon amra data finaly otheye neye ashe, bivinno calculation kore, bivinno condition apply kore , bivinno trams and condition deye finaly jokhon data amra output neye ashe, ae ouptup neye ashar bisoe ta o kinto make of tea/cha bananor moto.amra step by step sorting kori filtaring kori bivinno condition applay kore amra fainaly amader moner moto data amra database theke ber kore neye ashe.