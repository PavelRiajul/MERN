// Limiting

//kivabe amra limited data select korte pari.

//example
//jodi amar data thake 6 ti . ami chacchi 6 ti er modde 3 ta data select korte pari.

//find method
//db.products.find({}).limit(3)

//aggregate method
//db.products.aggregate([{$limit:4}])


//..............................................................................................
//Limiting First and Last

//limit kore data jokhon neye ashesi, sei data ta 1st theke aese naki, last theke aese , seta kinto amra jani na.
//mone kori limit kore ami 5 ta data select kore ashesi ,akhon sei 5 ta data asolee 1st 2 ta data select hoye aese naki last 5 ta data select hoye aese seta kinto amra janina.

//amra chaile jei 5ta data amra select korte chaicchi limit use kore, sei 5 ti data thik 1st theke select kore ante pari last theke o select kore o ante pari.

//ae kaj ta find use korte pari aabar aggregate use korte pari.

//db.products.find({}).sort.({_id:-1}).limit(5)
//db.products.find({}).sort.({_id:1}).limit(5)

//aggregate korar somoy 2 ta stage nete hobe.1-> 1st theke 2->4 ta data limit
//db.peoducts.aggregate([{$sort:{_id:1}},{$limit:5}])