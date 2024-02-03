//URI Naming Best Practices

//Jokhon amra kono akta backend a url lekhe ba uri lekhe what ever api inpoint lekhe tokho er jeii name ta dei ei name tar best kiso best practices ase ba naming convention ase jeta foolw kora dorkar .jeta folli korle development quality  valo hoy.

//*1-> URIs as resources as nouns:
//jokhon ami in point a name golo  slash(/) deye lekhi . tokhon amra chesta korbo seta noune kore lekhte.
//setake verb ,adjective ba onno konomvabe oposthapon na korte.

//amra getUser(aeta kinto verb hoye gelo) na lekhe likhte pari users.
//example: /users/{id} 

//*2-> Forward slashes for hierarchy:
// jokhon amra akta  hierarchy create korbo seta forword slash(/) deye deye create korbo.
//example: /users/{id}/address
//clearly falls under the /users/{id} -> ae users er kon  address er id ta kento bola hoi nai.
//*3->Punctuation for lists:
// amader jodi multiple parametre neye kaj korte hoy , same doroner multiple parameter 
//example: /users/{id1},{id2}
//*Query parameters where necessary
// amra je sobsomoy url parameter pathai slash(/) deye ta kinto na . onek somoy amra whai(?) sign deye quest parameter pathaie.
// jekhane jekhane amader query parameter dorkar hobe  sekhane ? sign deye 1 pathabo .
//example: /users?location=USA
//*Loarcase litters and dashes
//amra url a sobsomoy loarcase use krbo
//example: /users/{id}/pending-orders (desh -)best practices. cameleCase/underscore use korbo na
//* No file extensions
//ami kokhon url a kon file load kortesi seta xml file naki .php file naki .json file chesta korbo seei file er extentation ta ke hide korar jonno. karon file er extentation ta jodi sekhane dekha jai 
//example: /users/{id}/pesning-orders --> amra aeta dete pari but jodi amra arokom kore deei (users/{id}/pending-order.xml) pending-order er jeei file ta setaakta xml file orthat file er extention ta jodi specifice vabe buja jai  seta kinto best practices er modde pore na.
//* No trailing forward slash
// amader url er seshe extra akta forward slash(/) rekhe dei /urlta ke clean rakhar jonno sobat seshe amra slash(/)debo na.
//example: /users/{id}/pending-orders  -- best practices
// /users/{id}/pending-orders/  --  best practices na 
//