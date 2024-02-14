//projection

// ami jodi specifice field golo ke just select korte chai, jerokom ami sodo name select korte chai, ba sodo matro name are city select korte chai ba sodo matro salary select korte chai tahole ae doroner kono akta projection jodi deye deei, tahole amader query sei projection onosare sodomatro sei sei column golo kee se select kore neye chole ashbe.tokhon are sobgolo column ke ba sob golo field ke se select korbe na.

//aggregate use
//db.products.aggregate(
    // [
        // {//projection stage
        //    $project:{id:0(false(id show korbe na)),name:1,city:1}
        // }
    // ]
//)

//find use

// db.products.find(
    // {},
    // {name:1,city:1}
// )