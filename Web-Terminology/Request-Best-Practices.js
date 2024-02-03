//Request Best practices

//* Request Body:
//1-> request body te ja kisoe pathaie na keno seta akta structure way te thakte hobe.
//2-> request body je sodo json data hold kore not only that. akta form-data te file o hold korte pare.
//3-> Authentication ba Authurization er kono token er bisoe thake amra seta request body te na patheye seta request header deye pathabo.
//4->   body te amra jei data ta patacchi setar akta sonirdisto model thakte hobe/ akta shape thakte hobe.

//* Request Header:
//1-> token releted bisoe jodi thake Authentication ba Authurization er kono bisoe jodi thake  tokhon amra request er header a key value piar akare pathabo.
//2->  request er header theke obossoe amra user-Aggent property ta pathabo . User-Agent mins- amra rest api ta ke ba server-side ta ke ba backend ta ke amra je call kortesi call korar somoy amra client ke ba  kothai theke seta call hocche  seei User-Agent amra thikthak pathabo.
//3-> baere theke dos attack ashbe ba thired party kono tool theke request ashbe . ae doroner cross side request jodi amra atkaya deye chai  ba cross side kono kiso jodi amra korte na chai , same side security jodi amra dete chai  jetake CSRF security bola hocche  sekhetre CSRF security erje token golo hobe , segolo obossoe request er header deye pathabo. not body not url parameter only request header.
//4-> ae request er header ta porobortite request middleware ba request controller er sathe connect hote pare jodi proyojon hoy.