// string aggregation operator

//$concat
//$split -->(string ke split kore array baneye neta chai tahole $split operator use korbo)
//$toLower
//$toUpper
//$substrBytes
//$indexOfBytes
//$indexOfCP
//$strcasecmp
//$strLenBytes
//$strLenCP
//$strcasecmp
//$substrCP

//ae operator golor modde sob chaite besi use hoy (practical life a)
//$concat
//$split
//$toLower
//$toUpper
//$substrBytes


//....................................................
// string aggregation operators use
// db.products.aggregate(
    // [
    // {$match:{unit:"It"}},
    // {$addFields:{"NewFields":{$toLower:["$Detailes"]}}}
    // ]
    // )