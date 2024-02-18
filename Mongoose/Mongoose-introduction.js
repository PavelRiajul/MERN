// Mongoose Introduction

// Mongodb neye kaj korar jonno amader ke mongodb er ORM use korte hobe. jei ORM ta mongodb er useges ta ke aro sohoj kore debe. ---> jei ta ke amra boltesi Mongoose. Mongoose hocche akta ODM ba ORM jeta amader database er data shape bole dei.and database er connection manage kora thekesoro kore database er bitore query implement kora theke soro kore sob bisoe gola Mongoose manage kore.
 // Mongoose amader ke Model ta provide kore.

 
//*What is Mongoose?
//--> Mongoose an elegant Mongodb object modeling for Node.js
//-->(Mongoose hocche javascript ba Node.js er akta library, jei library ta use kore amra korte pari ki jokhon amra Mongodb neye kaj kori tokhon Mongodb te jei data golo neye amra kaj kori, sei datagolo ke amra akta specific model er moddo deye neye jete pari, ba sei data golo ke specific shape amra dete pari, ae Mongoose library use kore.)

//--> akhon amra jani je jokhon amra Mongodb neye kaj kori tokhon amra structure data neye kaj korte pari, unstructure data neye kaj korte pari,abar amra semi structure data neye o kaj korte pari.jokhon amra unstructure ba semistructure data neye kaj kori tokhon Mongoose er khob beshi proyujon nei. kinto jokhon amra structure data neye kaj korbo , sei datar sonirdisto model ase , sonirdistodefination ase, ba sonirdisto schema ase tokhon amra sei data golo ke akta sonirdisto model er bitore ba shape er bitore neye ashar jonno Mongoose library ti use kori.(Orthat jokhon ami structure data neye kaj korsi tokhon ami Mongoose use korbo)

//*Where use Mongoose(Mongoose use korle amra ki ki sobida pae, amra keno use korbo Mongoose)?
//1--> Provides schema-based data modeling solution
//(Mongoose amader data ke akta sonirdisto schema provide kore.jokhonee amra kono structure data neye kaj korsi, tokhon sei structure data golo ke amra kivabe structure er bitore neye ashbo ba shape er bitore neye ashbo, seigolo korar jonno Mongoose amader akta platform ba environment provide kortese.)
//2->Type casting
//(and sei sathe sathe se Type casting kortese.Type casting kora mane hocche amader model er bitore datar jei bivinno binnash golo thakbe tar bitore konta integer hobe , konta string hobe , konta boolean hobe , kontar type ki hobe, ae Mongoose use kore Type casting er kaj ti kore fela jai. )
//3-->Validation
//(amra Data valid korte pari, Mongoose use kore.thik jerokom amra form validation kore,data submit korar somoy, serokom ae model er bitor jokhon amader data golo chole ashbe, tokhon data golor opor bivinno validation apply kore condition apply kore amra data golo ke valid kore nete pari.)
//4-->Query building
//(and asara o amra Mongoose use kore bivinno complex Query chalanor jonno Query building korte pari. )
//5-->Business logic
//(and amader application er jei business logic golo thake , bivinno khetre amra proyujon onosare sei business logic er jei bisoe golo ase, sei golo ke o  kiso kiso logic amra Mongoose er bitore transfar kore neye jete pari.)