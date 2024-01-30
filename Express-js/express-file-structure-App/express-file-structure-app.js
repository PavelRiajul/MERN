//Express.js file structure Application

//*   Request -> Routing -> controller -> Return ->Response

//Express.js er application er creation ta soro hoy node.js theke. -->(npm --y(command)) akta node.js er  faka application create hocche. jeei faka application er modde package.json name akta file create hocche.jeei package.json er modde inishialy amader kono depandenci nae. akhon amader full-face akta backend manage korte gele sodo matro node.js/row application is hart. ae jonno amader package er help nete hobe.
//--> Node.js er akta package holo - Express.js
//-> tarpor express.js install korbo (npm i express(command))
//akhon amra express.js er features golo use korte parbo.
//expres.js er features golo use korte gele amamder  sajano/gusano/file structure kora dorkar.

//file/folder structures
// src folder/deractory er bahere 2 ta javascript file create korbo (1)index.js  (2)app.js
//1->index.js ->  index.js er kaj hobe application ta ke run kora.

//2->app.js  -> app.js er kaj hobe  amader express.js ke hold kora,and express.js er bitore routing theke soro kore  security middleware theke soro kore ja kiso tar sob kiso ke hold kora. orthat application er akta configaration  file hocche app.js

//3->src->deractoryfolder --> amader application er jonno jotogolo file/folder lagbe ,ae file/folder golo thakee src folder er bitore.
//src deractory er bitore ae folder golo create korbo

//1-> controllers folder  ->
//2->middleware  folder  ->
//3->Routes   folder  ->
//4->models  folder  ->
//5->utility/helper  folder  ->

//5-> utility folder er kaj-
// express.js application er bitore  sotokhato validation dei, mail pathai, token incode/decode kori ae doroner small  onek utility kaj kori je gola ke bole khosra kaj .
//joto khosra kaj ase, sob golor jonno jeei file/folder golo banabo seei goloke (utility) er bitore rekhe debo.

//3->Route folder er kaj -
// Application er jeei route manage korbe, route manage kora mins hocche application er path/url/routing manage kora, ae url/path manage korbe route folder. application er routing path golo ke manage kora. api.js file  er bitore. router create kore.router ta create kore hocche express.js.tarjonno express ke import korte hobe. and pore Router namee function ke call korte hobe. Router() function thekee amra routing path golo create korbo.


//1-> controller er kaj -
// akta controller er bitore onek golo function thakte pare.
//amader kaj hocche controller er bitore  amader application er backiend manage korar jonno  bivinno doroner function dorkar hobe Mder, seii function golo ke ae controller er bitore likhbo and jeei routing point a amra jee function ke execute korate chai amader controller theke seei function ke call kora.
//tahole jeei function ke amra call korbo jeei routing a ,controller er jeei function ke call korbo controller er seei function ta execute hobe.
//tahole controller a function execute hobar maddome amra akta response  return pacchi. jeei response finaly amader browser a show koracche.


//4->model  er kaj -
//Jokhon amara database neye kaj korbo tokhon data sharp golo ke handle kora.
//exm-> ami akta product list create korbo , tahle amar product list er jonno data sharp ta kemon hobe.
//exm2->ami akta user profile create korbo , user profile er jonno amar data sharp ta amar ki hobe.
//and data validation golo ke hobe, ae bisoe golo model manage korbe.