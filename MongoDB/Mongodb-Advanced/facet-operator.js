//facet operator

// facet operator multiple result ke aksathe neye ashe, ba facet operator er maddome amra multiple pipeline use korte pari.

// db.products.aggregate(
    // [
        // {$facet:
        //   {
            // "A":[{}], // ae pipeline theke jei result pabo sei result chole jabe A property te
            // "B":[{}]  // ae pipeline theke jei result pabo sei result chole jabe B property te
        //   }
        // }
    // ]
// )

//......................................................

// db.products.aggregate(
    // [
    // {
        // $facet:
        // {
            // "total":[{$count:"total"}],
            // "data":[]
        // }
    // }
    // ]
    // )