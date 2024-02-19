//* JWT Token Authentication

//Types of Authentication - Authorization(ki ki type er Authentication - Authorization hote pare.)
//Authentication - Authorization bivinno vabei hote pare.
//(1)API Key  --->(api key provide korar maddome ba jekono akta  secrect key provide korar maddome ame ae kaj ti kore felte pari. )
//(2)Bearer Token --->  Bearer Token use korte pari, jeti ke amra json web token ba JWT name chini.sei takee bola hocche Bearer Token system.
//(3)Basic Auth --> abar basic level er jei authentication ta amra sob jaiga teei dekhte pai username/password provide kore authentication kora sei o ami authentication er jonno korte pari.
//(4)Digest Auth --> 
//(5)Auth 1.0 --->
//(6)Auth 2.0 --->
//(7)Hawk Authentication --->
//(8)AWS Signature --->
//(9)NTLM Authentication --->

//*akhon sob golo sob golo types er Authentication system je asole sob somoy usehoy , ta kinto na.
//*bises kore Node.js express.js er jei project goli te kinto
//* (Bearer Token) Authentication jeti ase, seti sobtheke besi use  kora hoy.

//asara jokhon amra 2ed party kono api provide kori ba kono public api amra onno kaw ke provide kori sekhetre (APIKey) Authentication tir proyojon hoy.

//username password deye login korar bisoe ta ke boli (basic Auth)

//(NTLM Authentication) mane hocche system Authentication ba windos Authentication. jokhon amra dekha jacche je sodo matro windos operating system er jonno Dekstop Application create kori ba .Net deye jokhon amra  windos er user er jonno web application create kori.tokhon seta amader kaje lagee.


//*** */
//Node.js Express.js deye jokhon amra project create kori, tokhon ae doroner project a (Beater Toke/Token Authentication system ti use kora hoye thake.)

//Token Authentication system use korar jonno amader sobtheke je library ti beshi use kora hoy ta holo 
// JWT(Json Web Token)
// What About JSON Web Tokens(JWT)  --> ae library tar kaj ki ae library ta deye ki kaj kora na jai, ae bisoe golo amader jante hobe.
//* JWT er mol kaj hocche akta json ke  Encrypt kore akta Token a convert/ropantor kora.abar sei token ta ke abar Decrypt kore  ponorai seta ke abar ageer json a fereye deya.
//* Orthat JSON ke Encode kora Decode korae hocche JWT library er kaj.

//ae karone JWT  er full minning korle hocche JSON Web Token. Orthat jokhon amra  JSON communication kori, akta jaiga theke arekta jaigai  seceurly jokhon amra akta json ke   patha te chai , tokhon sei json er jei security ase sei security maintain korar jonno amader korte hoy ki , sei json ta ke Encrypt kore akta Human redable jate na thake Human unredable a akta string a porinoto kori. sei Human unredable string tai kinto akta jaiga theke arekta jaigai tanasmit hoy.than seta ke abar deCode kore ponorai abar json formata firiye neye achi.
//ae kaj tai asole JWT library kore thake.

// and JWT je library, ae library je amader ke json encode decode korar je sobida ti  deccha. moloto ae sobidati  use korei amra  Authentication and Authorization er kaj ti kore thakee.

//tar mane sod je JWT Authentication and Authorization kore ta kinto noi , jekhane jekhane  amader json er proyojon ase json Encode Decode korar proyojon ase ba Encryption Decryption korar proyojon ase sekhane sekhane prottek ta jai gai amra JWT use korte pari.

//tar modee  Authentication and Authorization JWT er akti Usecase/bebohar.akhon jwt je library ti ase ae library te deye jokhon amra akta JSON ke Encrypt kore akta koren a convert kori, abar sei Token ta Decrypt kore ponorai JSON formata  a firiye neye achi , tokhon ae Encrypt Decrypt korar jonno bivinno (Algorithom ase).Algoritom use kore amra ae kajti korbo.

//npm -> jsonwebtoken --> ae library ti moloto  hocche jwt er  node.js/express.js implementation.

// amader jei jei node.js express.js project ti ase, ae project er modde amra Authentication parpase--
// JWT use korbo.
//Authentication parpase JwT use korar jonno amra jsonwebtoken name jei package library ti ase  node.js er sei library ti amra amader project er modee use korbo.
//use kore step by step kiso bisoe amader ke shikhte hobe. what we will learn?

//1-> How to encode json and create token --( ae library ti use kore kivabe akta json ke encode kore token a convert korte pari)

//2-> How to decode token and retrieven json  --(sei Toke ta ke abar decrypt kore ponorai json a  fereye ante pari)

// 1st 2 step a amra shikhbo json encode kora are decode kora. json ke amra kivabe encode kore token banabo abar sei token ta ke decode kore amra ponorai json banabo.

//3-> How to create auth middleware in express project --(encode decode korlam amra json ta ke, aeta ke kivabe akta middleware akare  amra project er bitore create korte pari.- orthat project er bitore auth namee akta middleware create korbo  sei middleware er bitore kivabe encode decode er bisoi ta ke manage kora jai sei bisoe ti dekhbo)

//4-> How to apply auth middleware in route   --(finaly amra authentication er jonno jei middleware ti create kore nilam, sei middleware ti ke kivabe bivinno route er modde apply kora jai  , sei bisoe ti shikhbo)