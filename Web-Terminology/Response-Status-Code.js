//Response Status Code
//HTTP Response status messages

//*status Code  ----   Meaning  ---   Description
//200 -  ok -- sobkiso thikthak.abrithing all fine.
//201-  created -- jodi amader request er karone database a kono kiso create hoy ,database akono data insert hoy seei khetre amra 201 pathate pari. jeta ke boli created
//202- Accepted  ---  kono request jodi amader accepted hoy ,seei khetre amra 202 status code  pathate pari.
//203- Non Authrotative information er khetre 203 pathate pari.
//204- no Content ----  jodi kono content pawya na jai  no data found hoye gese seei khetre  response status code 204 use korte pari.
//205 - jodi content reset korar proyojon hoy , seei khetre amra 205 use korte pari.
//206- partial content ---  je partial ee kono content peyesi seei khetre amra 206 use korte pari.
//400 Bad request --- kono syntext error jodi hoy ba jodi kono bag chole ashe , seei khetre Bad request status code amra use korte pari.
//401- Unauthorized ----  user login korini ba authrized na ba ligal na othentik na. seei khetre 401 use korbo
//403- Forbidden ---- 
//404- Not Found ----
//405- method Not Allowed ----
//408- Request Timeout ---  server a jodi akta request pathai seei request ta response ashte onek somoy  laglo , seei khetre request timeout hoye jai.
//500- Internal server error ----- 
//502-Bad Gateway
//503- Service Unavailable

///ae status code golor modde konta amader beshi beshi proyojon hoy .kon status code somporte amader darona rakhtee hobe.
//200 -- manee sob kiso thik ase . seta create/update/read/delete je kono khetree hote pare. everything is ok. aeta  besi use kora hoy.
//400 --  bad request er jeei  status code ti seta manually manage korte hoyna , aeta server automatically generate kore . amra jodi kono code lekgte bol kori ba logic lekhte bol kori seei khetre autimatically 400 bad request aeta ganarate hoye jai
//401 Unauthorized - aeta amader ke manually manage korte hoey. amader ligal request verify korar jonno.
//403 aeta o server automatecally geterate kore.
//404 -Not Found ---  aeta o automatecally execute hoy.amader ke execute korte hoy na.
//405 aetao amader ke manually manage korte hoy na. jemon amar jeei method request ta pathanor kotha seei metha request pathai ni .
//408 auto manage 
//503 service unavailble- jokhon amader server a  onekload request  pore  ba over loaded hoye jai , je tar execution khomotar baere chole gese are beshi execute se korte parse na 


//* 200 are 401 menually manage korbo.bakisob auto manage hobe.