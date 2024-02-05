//JWT Structure

// JWT jokhon create kori ba Json ke jokhon amra Encrypt Decrypt kori , seei Encrypt Decrypt korar somoy  amra jokhon  jwt systrm ta use kori, jwt systrm ta je kono programming language a use kori na keno je ecosystem er er jonno amra jwt library use kori na kino , sob ecosystem ee jwt ke  oi library ta use kore Encrypt korsi abar jokhon oita ke amra Decrypt korsi  tokhon amader ke 3ta bisoe neye kaj korte hoy.

// Ae structure er bitore3 ta bisoe thake.
//1-> Header
//2-> Paayload
//3-> Signature


//*Header
//1-Type of the token
//Header er bitor algorithom bole deya thake.karon jokhon json Encrypt Decrypt kori  jwt package /library use kore  tokhon aekhane bivinno library use kore Encrypt Decrypt er kaj ti use kora jete pare.

// Header er bitore amader ke algorithom ta bole dete hobe . je amra kon algorithom a kon process ta follow kore Encryption Decryption process a jacchi. sei algorithom ta amake first a bole dete hobe. seta rs256,rs512 hote pare jekon algorithom hote pare.

//2-> type
//header a arekta property jabe type jeta boli jwt.


//Encrypt korte gele akta public key lagee.
//Decrypt korte gele akta privet key lagee.

//algorithom er keya generate korar jonno kiso tools ase.website
//example: rs512 key generator

// header er modde jokhon Encryption algorithom jeta select kore debo , thok seei  Encryption algorithom onosaree prorobortite (Signature) a name jeei part ase  seei part er bitore public-key privet-key use korte hobe.

//akhon amra jeei data ta ke Encrypt Decrypt  korbo seei  data ke bola hocche (Payload) payload ta hocche plaintext this is completely humanredable object.

//ae payload ta hocche json object.karon jwt er oddessoe hocche jwt ke Encrypt Decrypt kora.json object er bitore property/key er igniste value provide korbo. 

// Json obj er bitor ja khusi taie rekhe dete pari, ae json obj er bitor je property er sei property name ja khushi dete pari, payload a ami jeei json  obj ta rakhbo , ae json obj tae  Header and Signature er maddome jokhon amara public key use korbo tokhon ae json obj tae Encrypt hobe  Encrypt hoye  akta Ciphertext a porinito hobe, abar pororbortite seei Ciphertext tae  Header and Signature er privet key er maddome  Dectyrept kore plaintext a ropantor korbo.

//json object er kiso resarb key ase  je goloe minning ase.


//*JWT Encrypt Decrypt Simulate
//JWT website er bitore Debugger option er bitor  jwt ke Encrypt Decrypt kora aekhan theke simolate kora jai.
//simulate korar jonno first a Header lagbe