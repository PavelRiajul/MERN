// Express Rest API Packages

//Express.js deye Rest API develope korte gele ki ki package lagbe?
//Essential Package:

//*0->Node Mailer-> 
//node mailer deye amra Email pathai.akhon seta otp er email hote pare ,varification er email hote pare , je kono email hote pare.
//mailer package ta deye jokhon amra maile pathaie ,maile pathanor jonno 2 ta jinish lagee amader (1)configuration (2) mailta kar kase pathabo, mail tar body ki ,mail ta kar kase jabe tarjonno akta configuration er dorkar hoy.
// aetar kaj holo amader application er bitore otp-code pathaete hobe mail a , mail send korte hobe , mail sonchraonto image sonchranto joto kaj kormo ase , ae kaj korbo gola sob hobe hocche node-mailer package a .

//*1->Express:
//The Core backbone -> Express hocche node.js er fremwork.amra je rest api development shikhbo , seei rest api er jei main kathamo ta thakbe , setai hocche Express.
//sodu matro express deyee amar rest api develop hoye jabe ta kinto noe, er sathe aro onnanno package lagbe.

//*2-> Body-parser:
// aeta hocche node.js er middleware aetar kaj holo JSON formate er jeei data golo amra response akare dei ba neei tarpor row data neye kajkori text neye kaj kori amra URL encoded neye kaj kori form data neye kaj kori ae golo neye kaj korar jonno  body-parser middleware ti proyojon hobe.

//*3-> Cookie-parser:
// amra jodi cookie neye kaj kori , tahole cookie ke parse korar jonno amader cookie-parser package ti use korte hobe. 

//*4->Multer:
// Multer hocche akta node.js er middleware .aetar kaj multipart/form-data jeei request golo thakee ba request golor maddome amra file manage kori , seii doroner request golo ke manage korar jonno amader multer use korte hobe.

//*5->Jsonwebtoken:
// Securely jokhon amra kono JSOn Encrypt Decrypt kore ak jaiga theke  onno jaigai isthanantor korbo , tokhon amader jsonwebtoken er proyojon hobe.

//6->MySQL Driver: jodi express.js rest api er sathe as a database amra MySql use kori , sekhetre amader MySql database er jonno node.js er je driver ase  seii MySql Driver ti proyujon hobe.

//*7-> MongoDB Driver:
// MongoDB er jonno MongoDB er driver ta proyojon hobe.
//vscode-extention:(Mongodb for vs code ) amra mongodb te query writing shikhbo.kivabe cloud database a conection  istablish korte hoy.local database a kivabe connection istablish korte hoy.mongodb database server ta ke kivabe amra cloud a rekhe kaj korte pari.
//complex query writing er jonno amra (mongodb aggregation) shikhbo.***
//studio3t aeta mongodb query writing korar jonno advanced tools.aeta lopo paid tools.

//*8->Dotenv:
// Dotenv package ta hocche akta zero-dependency module ,er kaj hocche evironment variable ke amader project ke load kore.
// er kaj hocche  Glovali je environment variable neye kaj kori , seei Environment variable Environment variable ke manage kora.
//sensative data ba sensetive variable golo (.env) namee jeei file ta amra project er bitore create kori , seei file er bitore rekhe dei.
//.env file frontend er jonno projojjo ,abar backend er jonno projojjo..env file golo frontend a rakhbo na, amra backend a rakhbo.

//*9->Cors:
// cros package ta holo akta middleware., ae middleware er kaj holo amader jeei rest-api ase , sei res-api a cros site scripting je option golo ase sei option golo enable desable korar jei sobida gola sei sobida golo deye thakee.

//*10-> Express-mongo-sanitize:
// er kajo holo mongodb te jate kono doroner operator injection hota na pare, ae karone jokhone kono request ashebe  Express-mongo-sanitize segolo ke test korbe , segolo ke clean korbe.

//*11->Express-rate-limit:
// rest api development korar somoy request limiting korbo.

//*12->Helmet:
// HTTp headers er modde jei bivinno settings golo ase , sei golo ke manage korbe , manage korar maddome amader express rest api ke secure korbe.
// er kaj holo request-response er jeei HTTP headers golo ase , sei http headers er jei security  mejors golo ase, segolo ke maintain korbo.
// Express.js er security er pran hocche ae helmet.beshi security akae manage kore ae helmet middleware ta.
// ae akta package onek golo security parameter handle kore.

//*13->HPP:
//HPP hocche akta middleware.sei middleware req er pore  and res er agge execute hobe, execute hoye http parameter sonchraonto jei attack golo seigolo ke se prevent korbe.     er kaj holo http parameter pollution er jonno jei attack golo hoy rest api a , sei attack golo ke sei protect korbe.

//*14->Validator:
// er kaj holo amader jei string golo thakbe , sei string golo ke valide korar jonno use korbo.

//15->Xss-clean:ae ta kinto akta middleware. er kaj holo amader jei post.get.body url parameter thakbe ae golo ke amra xss-clean er maddome sanitize korbo.

//16-> Mongoos : Mongoose holo mongodb dadicatate akta package ba akta ORM/ jeta deye amra mongodb develop korar somoy schema/design develop kori . kon data kothai kothai thakbe  , na thakbe oi bisoe  gola ke define kori.
//mongoos er kaj hocche ami jeei design ta korlam database er , ae design ta ke istablish/update kora.