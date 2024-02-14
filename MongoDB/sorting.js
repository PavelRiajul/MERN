//sorting

// akhon amra data sort kora shikhbo

// jokhon amra kono data select korsi , tokhon kinto amra stage ollekh korsina, count korar somoy sob golo data ee amader select hoye chole ashche, aeje sob golo data select hocche ae data golo ke amra assinding desanding a amra sort korte pari. seta hote pare number dore, seta hote pare litter dore, akhon ami kon column a  sort korte chacchi.
//column dore sorting korbo.
//sorting korar jonno jokhon amra aggreate use kori , to sodo matro amra data sort korsi are kono kaj kinto aekhane korsi na, stage 1 ta ([{}])

//sorting
//db.products.aggregate([{$sort:{salary:1}}]) // Asending
//db.products.aggregate([{$sort:{salary:-1}}])//Descending


//sorting ta amra find method use kore o korte pari.
//db.products.aggregate({}).sort({salary:1}) //Asending
//db.products.aggregate({}).sort({salary:-1}) Descending


//Asending holo first theke soro 1
//Descending holo last theke soro -1