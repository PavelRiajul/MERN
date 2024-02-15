// Add new field with result
//Add extra field


// (addFields) properties er maddome amra extra field amader result er sathe add korte pari.

// db.products.aggregate(
    // [
        // {$match:{Unit:"It"}},
        // {$addFields:{"NewField":"NewField"}} // product er sathe new field add hobe. er bitore abar $price o add korte pari.
    // ]
// )

// db.products.aggregate(
    // [
        // {$match:{Unit:"It"}},
        // {$addFields:{"NewField":"$price"}} // product er sathe new field add hobe. er bitore abar 
        //$price o add korte pari.
        // ]
    // )