// Http Protocol/ Request Respons model.

// client-side theke akta http-request jai server a . server seei request ta execute kore  proccess kore server akta respons client-computer er kase pathiye deei.

//client-side and server-side ae 2 tar maddome jee communication ta hoy ,ae communication ta keei bolsi request-respons model.

//.....................................Request.....................................
//http Request gola client-computer theke server-side a pathanor jonno bivinno methods ase .
//Http Request Methods
//(1)->GET()  
//(2)->DELETE()
//(3)->POST()
//(4)->PUT()
//(5)->OPTIONS()
//(6)->HEAD()

//GET() and DELETE() ae  2 ta method  sobchaite beshi use korbo amader application er modde.

//.............................Respons................................
//server theke jeei respons ashe ,seei respons theke 2 ta part thake
//1-> Status Code               
//  200/404/500...  
// status code jodi 200 hoy tahole sucsecc fully request execude hoyese.
//status code jodi 404 hoy tahole not found
//status code jodi 500 hoy tahole internal server error.etc
//ae doroner bivinno jeei status code ase ae status code golo  server genarate kore.

//2->Data
//respons teeke jeei data gola pai ,seei data gola 2 ta part a pae.
//1->Head    2->Body

//1->Head
//Head er bitore jeei respons gola ashe ,seei respons er modde jeei data gola ashe,seei data gola jora akare ashe.seei jora er bitore (1ta key thake)(1ta value thakee)
//sencitive data -> access token, username,email -> ae doroner sencitive data golo  kajkorar somy amra Head use korbo.
//a sara normal data neye kaj korar somoy amra body  use korbo.
//2->body
//body te jee data gola amra respons akare pae, seei data golo (json akare ashte pare), (string arake ashte pare.)(XML akare ashte pare.) er modde popular holo --> json