//skip and limit

// amra skip operator er maddome koto golo data skip  kore kore data select korbo, sei bisoe amra define korbo.

//ae bisoe ti sobchite beshi kajee lagee (pagination) korar somoy.
//pagination a amra akta page a 5 ta ba 10 ta data select kori then amra page number 1,2,3 kore kore next data golo skip kore kore amra select kori.

//aggregate use
//db.products.aggregate(
    // [
        // {$skip:2},//1st theke 2 ta row skip hoye jabe
        // {$limit:2}, // 1st  2 ta row er porer 2 ta row show korbe
    // ]
// )


//fine use
//db.products.find({}).skip(2).limit(2)