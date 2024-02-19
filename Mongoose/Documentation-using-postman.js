//* Documentation Using Postman

// How to create Rest-Api Documentation.
// Rest-Api Documentation khobee important akta bisoe.
//  jodi Rest-Api er Documentation na thake , tahole oi rest-api ta onekta (boitha sara noukar moto).karon jokhon amar kono Rest-Api Documentation thakbe na , tokhon sei rest-api ta porobortite onno karo use kora ta porobortite taf hoye jabe.ba kokden por ami nejeo bole jabo rest-apier bitore ki koresi ta bole jabo mone rakhte parbo na.tokhon amar rest-api project ta poratai useless hoye jabe.ae jonno must Rest-Api Documentation create kortee hobe.

//Rest api documentation ganarate korar jonno bivinno doroner library ase.
//npm a bivinno package ase.->(third party library)

//amra akhon use korbo Postman. hird party library use korle amra Postman er moto atosobida pabo na.
//1-> postman deye documentation pacchi
//2-> test case file pacchi
//3->example sorce code pacchi
//onek kiso postman deye ganarate korte parbo.

//**** */
//Postman deye documentation gegerate korar jonno 
//1-> workspaces create korte hobe.
//2-> ae workspaces er bitore collection create korte hobe.
//3-> api.js er bitore -> ki ki rest api request ase sei request golar name ki ki se golor http method (get,post,delete) ae bisoe golo first a thikthak kore nebo.
//amar rest api er akta base url ase. base url mane hocche amader rest api ta kon site a host kora ase.ba aetar jei domain ta, sei domain ta ki , sei domain tai hocee er base url.
//amader rest api ta ke amra run koresi localhost 3000 port a.
//tahole rest api er base url holo --> localhost:3000
//amader base url ba domain  ta jeta seta  kinto (constant) . student read kori , update kori,delete kori,create/insert kori  jae kori na keno base url ta sob khetree same thakbe.

//poro rest api er bitore jei constant bisoe golo ase amader.sei golo ke amra envaironment variable er bitore neye nete pari.


//*variable sara amader arekta jinish dorkar hobe , seta holo Authorization
//amader rest-api er modde jodi kono  Authorization process thakee ba kono token er process thake  token Authorization er process take , sei khetre amra poro rest-api ta ke akbare (Auth) kore nete pari.
// Authoentacation type bivinno rokomer thakte pare.
//orthat Application use korte gele application er security maintain korte gele amra jemon locgi, registration ba authorization/authontication system use kori , thik sei rokom amra jei res-api documentation use korsi, sei documentation er jonno  Authrization er bitore authorization/authontication set kore rakhte pari.

//*** */
//amader kaje jonno ba most of the time amra rest-api te sobtheke beshi jeta use kori 90% er beshi use kori(body) sei body te amra json body neye kaj kori.asara o aro onnanno body type ase, jegolo neye beshi akta kaj hoy na.