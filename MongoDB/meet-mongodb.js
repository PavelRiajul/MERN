// Meet MongoDB

// What is mongodb?
// mongodb ke bola hocche NoSQL database, abar mongodb ke bola hocche document-oriented database.

//NoSQL database bolar karon holo --> traditional relational database ase  , sekhane jerokom amra akta antiti ba akta table er sathe arekta table er bivinno relationship manage kori , bivinno foren key constant manage kori , mongodb te seei bisoe golo amader ke manage korte hoy na.ae jonno aeta ke NoSQl o bola hocche.karon traditional database a amra structure query language SQL ta  use kori,to jeheto traditional database er sathe er boisisto goto dek theke structural dek theke mil pacchi na amra seijonno aeta amra abar bolsi NoSQL database.

//mongodb te jokhon amra data store kori, ba akta kore data jokhon sekhane thake tokhon ak akta data ke sekhane bola hoy  akta kore document. ae jonno abar aetake document-oriented database o bola hoy.

//mongodb schema-less -- mane --> jokhon mongodb te kona akta document rakhbo , sei document er shape ta thik kemon hobe, tar sonirdisto kono schema thakbe kina , ba tar sonirdisto kono defination thakbe kina , ae bisoe golo mongodb te mendatory noe.
//amon o hote pare akta collection er bitore akta schema er data first a insert korlam sei collection er bitore abar bivinno schemar abar jemon khusi seta ke rekhe dete pari.ae jonno bola hocche schema-less


//large amount of datar jonno mongodb is highly scalable.


//********** */

//mongodb ki ki manage korte pare?
//mongodb akta open space create kore dei , je apne mongodb deye kivabe kaj korte chacchen.
// ami mongodb deye 
//1-> structured data neye kaj korte pari.
//2->semi structured data neye kaj korte pari.
//3->unstructured data neye kaj korte pari


//akhon jokhon amra NoSQL database neye kaj korsi mongodb te, tokhon aekhane kinto traditional database er moto  kono 
//1-> table thakse na -->( mongodb te table ke bolbo colllection)
//2-> row thaksena --->(ak akta obj ee hocche ak akta row)
//3-> no complex join amader thakse na -->( akhon onek complex join mongodb te query kora jai. and query er bitore business logic o manage kora jai. jeta akta somoy possiblesilo na)

//*but aekhane aegolo na thakar karone bes kiso advantages amra pacche.
//*Advantages

//1->Schema-less
//schema-less mins aekhane amar kono specific porbo nirdarito dafination er proyojon nae.but ami chaile kinto sei dafination ta manage korte pari.but database a kono dafination restriction nae.je kono dafination er data , je kono shape,size,structure er data same collaction er bitore same antitir bitore thik jevabe khusi ami seta rakhte pari, create korte pari, delete korte pari, update korte pari any think.

//2->single object
//akta document jokhon amar mongodb er bitore insert hoy ,tokhon sekhane akta object create hoy like json.

//3->No complex joins
//aekhane jokhon amara data golo ke manage korsi , ae data golo ke manage korar jonno kono complex join ba kono complex relationship er deke amader jete hoy na.

//4->Deep query-ability
// ar mongodb te akdom  besh deep level a query korar ability ase.mongodb je featurs golo amader ke dei jei functions golo dei , jei syntext golo amader ke provide kore segolo use kore khob deep query mongodb te korte pari.

//5->Tuning
//6->Ease of scale-out
//7->uses internal memoty for sorting

//8-> jekhane hochhe heuj poriman a data thake,jai data ta unstructured thakte pare, abar structural thakte pare,and jei data neye kaj kora akta normal ba sadaron manoser pokkhe kora somvob noe, sei ta ke amra BigData bolte pari.
//BigData er kiso boisisto ase
//large number of data hobe
//oikhane data kokhono schema thakbe abar kokhono thakbe na
// kokhon string hocche, kokhon boolean hocche, number hocche aetar o kono thik thikana thakbe na.
//data type er kono thik thikana nae.
//frequency(data droto poribortonshil)

//*Where to use mongodb(mongodb amra kothai us korbo)

//mongodb amra jekono jaigai use korte parbo.
//mobile-application er sathe use korte pari,web-application er sathe use korte pari,dekstop application er sathe use korte pari,kono akta business application er sathe use korte pari,entartenment application er sathe use korte pari ,aeta ke kono akta iot devaice er sathe use korte pari , akta data-hub hisabe use korte pari.ba data-dumping hub hisabe use korte pari.orthat er jeei use case ase sei use case kinto sonirdisto kono kiso noe.jeikhane khushi seikhane mongodb use korte pari,no prolem.



//******************** */
//ACID Properties in DBMS
// Atomicity, Consistency,Isolation,Durabiliti  --> ae 4 ta property jodi kono database system  a na thake , tahole oi databae system deye kokhonow banijjik khetre kono application develope kora hoy na.
//ae 4 ta property sql database a agee thekee asilo.
//akhon completry mongodb ACID  property suppod kore.