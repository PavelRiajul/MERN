// Opposite of CSR

//* SEO Challenge
// CSR ami jodi kori seei khetre jeii facebook boli twiter boli , youtube boli , linkdine boli agolo amar jeei webpage sei webpage ta ke kinto thikthak catch/fetch korte parbe na. jeheto fetch korte problem hobe seheto ae khane SEO er jeei challange golo  seei challenge golo chole ashbe.
//bolte gele SEO ta hobee na.karon jeei bisoe golo browser bitore render hoy sei golo kono vabee facebook/youtube/twiter/instagram  ae golo catch korte parbe na.jodio Google recenli segolo korte pare.
//akhon csr hok ssr hok  some how Google se golo ke khob easily catch/fetch korte pare.
//* Initial load time:
// jokhon single page application create korsi ba CSR korsi , tokhon web application jeei logic golo ba web application er jonno jei file golo lagge javascript, css je asset golo lagge sei asset golo amra dekha jacche 1st ae bundell akare load kori felsi, jodi bundle size ta onek boro hoye jai , sekhetre kinto web application er Initial load time ta onek bere jai.
//but akhon smartfeature chole ashe, smart way chole ashce , jar maddome korte pari bundle size ta ki spliting/ tokra tokra kore komiye felte pari, example:- react er bitore beshi ki features ase, next,js a ase etc
//* Browser Compatibility:
//jeheto sob kisoe render hocche browser a , seheto browser ke o smart hote hobe. jodi browser na hoy sei khetre kinto hobe na.
//example: 1999 year er browser jodi use kori sekhetre CSR korte parbo na.
//* Security Concerns:
// aekhane jeheto browser opore amader dependent thakte hocche , browser opor depand kore onek kaj amra korsi onek rendering korsi amra onek dession nicchi , seheto aeta je keow chaile browser theke manipulate korte pare.temparing korte pare. sekhetre aekhane amader secutirt concerns bisoe ta chole ashtese.
//* Maintenance Complexity:
//kiso kiso Maintenance Complexity ase example- ami amon akta fremwork/library  use kortesi jeta dekha jacche  code beshi lekha lagse  frontend a akbar routing kora lagse backend a akbar routing kora lagse abar dekha jacche amon vabe ami application ta banaesi seta browser a geye cash kore seta user er browser a theke jacche . seei cash ta clear hocche na . kenona web application amra regular update kori, regular uodate korle jodi web application er asset golo ke browser a  cash kore feli ,tahole  update korar sathe sathe kinto sei cash golo abar update korte hobe. to jodi sei bisoe gola manage korte na pari  sekhetre amar akta Maintenance Complexity create hobe.