// Select like matching ba like search

// like matching mins -->  jokhon kono kiso lekhe amra search kori, tokhon setar moto jei tottho golo ase , sei goloee kinto ashee.
//example: like jodi boli R-> R deye joto golo data ase database a sob select hoye ashbe.

//aggregate use
//db.products.aggregate(
    // [ // akta pipeline
    //   {$match:{name:/r/}}//process/stage/dap
    // ]
// )


//find use
//db.products.find({name:/f/})


//.........................................................................................
//select by match in
// in operator use kore like search korbo


//aggregate use
// db.products.aggregate(
    // [
        // {$match:{name:{$in:['fahim,faisal']}}}
    // ]
// )

//find use
//db.products.find({name:{$in:['fahim','faisal']}})