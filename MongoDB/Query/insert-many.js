//Insert Many method 

// Insert Many method er kaj hocche multiple document ke aksathe insert kora.
//jokhon amra multiple document aksathe insert korte jabo, tokhon insertmany jei function/method ta ae method er bitore amra akja json object na patheye poro akta json Array patheye debo.array er bitore onekgolo object thakbe.mongodb korbe ki prottekta object ke akta kore document akare tar database a insert korbe.and prottekta document er jonnoe akta kore uniq id generate hobe.
// prottekta object akta kore document akare count hobe.

//Example:

// use('Craftshop')
// db.brand.insertMany(
    // [
        // {"name":"HP"},
        // {"name":"DELL"},
        // {"name":"Google"}
    // ]
// )