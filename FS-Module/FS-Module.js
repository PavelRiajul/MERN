//fs module
// fs full from -> File system module

//Node.js includes fs module to access physical file system.
//fs module ta use kore amra je kono file ke physically access korte pari.fs system neye kaj korar jonno file-->create/delete/edite korar jonno fs module use korbo.


// fs module usel kore jokhon amra operation chalai.tokhon seei operation golo 2 rokom way te hote pare.
//The fs modile is responsible for all the asynchronous or synchronous file I/O operation.
//1->asynchronous(Loading....Loading.... you wait it to finish... After finish you can move)
//2->synchronous(No Loading....No Loading....no need to wait...you can move)

// fs module er bitore abar onek golo method ase.Asynchronous and Synchronous er  jonno abar alada alada method ase.jeei method gola beshi use hoi oitar list ase.

//1->Nodejs fs module essentials operation of Synchronous.
//2->Nodejs fs module essentials operations of Asynchronous.


// Understanding Synchronous Asynchronous Theory --> 

//*Synchronous Theory--

//      Flow  of data
//   ------------------------------->          
//Sender -->1001110-->110110-->101010-->Receiver
//            |         |        |
//         block      block     block
//sender er kas theke receiver er kase data pathano hoyese.

//1-> Data is sent in from of blocks or frams
//2->There is no gap present between data
//3->There transmission is the full duplex type
//4->Synchronous transmission is fast
//5->More efficient and more reliable for large amount of data
// sender er kas theke receiver er kase data specifice block/fram akare pathano hoyese.ae khane amra 3 ta block dekhte pacche. and pasapashi 2ta block/fram er maje kono gap nai.

//kono operation a jodi synchronous use kore ,seei operation ti jotokkhon porjonto finish hoyni,totokkhon porjonto onno kono operation a jete parbo na.

//Asynchronous poddoti te multitask operation chalate parbo.
//Synchronous poddotite te multitask operation chalate parbo.kinto akta operation porapori complete hobar por next opration a move korbe.


//*kokhon amra synchronous use korbo.kokhon amra asynchronous use korbo.
//synchronous is suitable
//client-side/client-application  theke ami jokhon server a kono  request pathabo .server a request ashar pore.server a simple kiso process run hoyesee.simple process ashar pore  server theke abar akta respons client er kase return chole gese.
//Thik arokom jodi hoy  je client area theke server a request ashar pore server a simple kiso process run hoy je process golo run hote khob beshi somoy er proyojon hoy na , khob taratari/firts respons paoa jai,se khetre synchronous is suitable.
//most important-->je kaj ta korte server side a amader somoy kom lagbe ,seei khetre amra synchronous  poddoti use korbo.

//Asynchronous
//jodi ae rokom hoy je server side a amader je precess golo seei process golo onek besho complex/onek gola step ase/server side a processing hote onek beshi somoy lagbe,seei khetre amra Asynchronous use korbo.
//exmple->youtube video upload
//request->upload->compress->formatting->copyright->respons //one somoy er dorkar.

//amra beshi asynchronous poddoti use korbo.