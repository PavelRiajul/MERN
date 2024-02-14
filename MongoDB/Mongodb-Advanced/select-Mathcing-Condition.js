// select by match condition

// akhon amra shikhbo kivabe matching kore kore data seelect kora jai.
//sql er vashai jeta ke amra where condition boli.

//db.profucts.find({salary:{$gt:4000}}) salary 4000 theke boro gola show korbe

//db.products.aggregate([{$match:{salary:{$gt:4000}}}])

//gretar then->gt (>) boro
//less then -> lt(<) soto

// gte-> 2000 soho 2000 theke boro gola show korbe.
//lte-> 2000 soho 2000 theke soto golo show korbe.


//......................................................................................
// select matching amra multiple column er modee o korte pari,multiple condition apply korte pari.


//aggregate use
//db.employee.aggregate([{$match:{salary:{$gt:10000}}},{$match:{city:borishal}}]) //step1->salary condition apply step2-> city condition apply

///akta stage er bitoree jodi nasting kore lekhe -> tahole and operator ba or operator use korte hobe.

//db.products.aggregate(
// [
    // {$match:{$and:[
        // {salary:{$gt:10000}},
        // {city:"borishal"}
    // ]}}
// ]
//)


//*
// akhon amra find method use korbo
//db.products.find(
    // {
        // $and:[
            // {salary:{$gt:10000}},
            // {city:"borishal"}
        // ]
    // }
// )