//Express Rest Api Structure
//File Folder Structure

// For Monolithic Application MVC(Model,View,Controller)
//jokhon amra Monolithic Application create korsi , jekhane server-side and client-side ak sathe thake ,sekhane amader MVC ->Model,View,Controller poro bisoe ti amader sei design er modde chole ashe.

//but amra jokhon rest api developer korsi , rest api sodu matro application er server-side ke manage kore.
//rest api kinto client-side ke manage kore na.se jonno server side er jonno
// for rest api MC(Model, Controller) thake .

//.......................................................*
// api project structure hobe
//*1->index.js:
// index.js application ta ke start korbe.
//*App.js:
//amader application er jonno joto doroner middleware configure kora dorkar , joto doroner service configure kora dorkar , joto doroner security middleware golo configure kora dorkar, sob kiso amader App.js er modee configure kor thakbe . and application er jeei routing golo thakbe , sei routing er bisoe golo o app.js er bitore configire kora thakbe.
//*Config.env:
// Environment variable er jeei file golo thake ,sei file golo bivinno somoy bivinno name thake kothao config.env name ase, kothao .env name ase kothao producttion.env name a thake, file er name jae thakono na keno, er kaj hocche environment variable ke manage kora.
//akhon environment variable bisoe ta ki poro application joree je variable golo  akebare constant hisabe thakbe sei vaiable goloe asole environment variable.
//* Routes.js:
// application er bitore jei rest api golo create korbo , ak ak ta rest api er kinto routeing in point ak akrokom hobe.akhon joto golo routing in point hobe sei routing golo ke handle korar jonno amra routes name folder/deractory create korbo.
//Route abar sorasori connect thakbe Controller er sathe.kenona jokhon ee amader rest api a kono request ashbe tokhon ae route korbe ki ae request ta ke patheye debe controller er kase .
//*Controller.js:
//ae controller  amader application er bitore proyojon onosare ba task onosare ba action onosare akadik hote pare, seta amra groping kore o manage korte pari .
//to route theke jokhon kono request controller a ashbe ,tokhon controller korbe ki seei request ke precess kore akta response deye debe.
//akhon controller jokhon request ke process korbo process korar somoy tar model er proyojon hote pare.abar na o hote pare.kiso kiso action er jonno model proyojon , abar kiso kiso action er jonno model er proyojon an o hote pare.
//*Model.js:
//Jodi controller er model er proyojon hoy tahole controller model neye kaj korbe.ba model ke call korbe.
//amader je express.js rest api , aekhane jodi amra as a mongodb library ba mongodb driver amra jodi mongos use kori ,tahole mongos er jei schema defination golo ase , amra jei schema defination golo create korbo, data create korar jonno, read korar jonno,  right korar jonno,ba delete korar jonno , sei schemar jei defination golo ase , amader model kore ki sei schemar defination goloe mainly represent korbe.

//......................................................
// amader project er bitore file folder er jei structure ta ase , seei structure ta kivabe kaj korbe visually dekhbo.

//client-script/application--> Routing -->Controller ->database
//                                            |
//                                           Model

//*1-> Client-Application
//Client-Application hote pare akta mobile-application,hote pare,web-application,Decsktop-application,roboticksba iot akta device.
//(client application) korbe ki amader  rest-api ke hit korbe. client application amader jei (Routing-end-point) ae khane hit korbe ba request pathabe.akhon Routing-end-point a jokhon eekono request ashbe hote pare seta get request ba post request jei req ee ashok na keno ae Routing-end-point korbe ki sei request ta ki sorasori pathiye dibe (Controller) er kase. akhon ae controller korbe ki sei request ta ke process korbe, kokhono kokhono controller er sei request ta ke process korte geye database er proyojon hote pare , abar na o hote pare. kokhono kokhono sei request ta ke process korrar jonno model er proyojon hote pare, abar na o hote pare.
//jodi controller er sei request te ke process korar jonno mode er proyojon hoy , tahole jei model golo thakbe sei model golo amader controller er modde call/inisiated hobe.
//abar controller er jodi Database er proyojon hoy tahole controller sei request process korar jonno sei   database er sathe o communicate korbe.
//orthat model and database ae 2 tai cinnect controller er sathe. seta request request very korbe.
//Then Controller korbe ki sei request ta ke process kore finaly akta response pathabe , sei response ta sorasori cholejabe Client side er kase .

//thik aebase amader project er structure ti ae flow te kaj korbe. just amader viwe ta amader thakbe na. karon amra backend/ rest-api develop korsi, just thakbe model,controller