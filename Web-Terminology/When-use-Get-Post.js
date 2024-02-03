//When use Get When Post
//kokhon amra Get method use korbo and Kokhon amra Post method use korbo.

//*Get
//1-> Server a get method execute kora hocche, jokhon khob less amount of data ami server a patacchi ba pass korsi server a tokhon amra get method ta beshi beshi use korsi.karo get method amra url parameter deye 1 ta ba 2 ta data pathai ba 1/2 id/key/primary key/foren key atotokee pathai.
//2->jokhon amar action er karone amar server side a kono kiso change hobe na . kono data create/update/delete  hobe na , seekhetre Get method use kori.tahole amar action a jodi kono data create/update/delete na hoy tahole most of tha case data select hocche .hitoba sob golo selece hocche sorting hocche ba filtaring hocche .to amra kori create/read/update/delete-> jetake amra (Crud) bole ,curd a  create amra Get method ta use korsi na ,karon create action amar akta poriborton ashe update and delete a o korsi na .most oh the time read er khetre amr get method ta neshi beshi use korsi. query/data select korar khetre.
//3-> amra specifice paramter deye data fetch kortesi.
//4-> ami chaile Get method deye url parameter deye o data pathate pari./hrader/ request body deye o  data pathate pari.
//*Post
//1-> amar action er karone amar web-application a kono akta poriborton jodi hoy sekhetre suggest korbo Post method.
//2-> request er jokhon amar body proyojon hocche and ae body deye large amount of data patanor prouojon hocche , tokhon amra Post method use korsi .akhon large amount data mins onek larges .post method a string/text pathate pari ,chaile boro boro file o pathate pari. video.filezip file ja khusi sob pathate pari.body deye.
//3-> jokhon amra amader client-side theke user er kas theke kono akta image neye video neye ba Audio neye ba kono akta document neye server a upload korte chacchi , client side theke server side a upload korte chacchi tokhon amra Post method use kortesi.