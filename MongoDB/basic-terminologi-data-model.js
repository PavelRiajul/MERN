//******************** */
//mongodb er sathe traditional(sql) database er besh kiso terminilogical mil ase.ae bisoe golo amader jante hobe.

//traditional(sql)ba relational database ase ,seitar sathe amra jodi mongodb ke match korae terminology er dik theke tahole kon kon bisoe match kore.
//bosie ta same concept same kaj same , sodu matro name er parthokkho.

//1-> traditional (database) a database bolte amra ja buji . mongodb te o  (database) bolte setai bujai

//2->relational database managment system a amra kono akta data store korar jaiga ke bolsi ak akta (antit ba ak akta Table) , seitake mongodb te bolsi (Collection).

//3->jokhon amra data insert korsi ba akta data neye jokhon amra kaj korsi , tokhon seta ke amra bolsi(Tuple/Row), mongodb te bolsi (Document)

//4->relational database a jeitake amra (column) bolsi , mongodb te setake (Field) bolsi.

//5->(Table join) bolte amra relational dataase ke highlight korsi , setake amra mongodb te bolsi (Embedded Document)

//6-> relational database managment system a obossoe amader ke (Primaru Key) manage korte hoy, mongodb te o primary key manage korte hoy.mongode er khetre aekhane akta sobida ase seta hocche (prottekta document er sathe mongodb by default _id name a  akta primary ke se neje nejee  generate kore aeta alada kore amader ke menually generate korte hoy na ba manage o korte hoy na )


//********* */
//*Mongodb te 2 doroner Data Model neye kaj kora jai

//1-> Embedded data Model   2->Normalized data Model


//*What is Embedded data Model?
//Embedded data Model mins --> apnar akta single document thakbe,sei single document er bitore alada alada object kore kore data golo ke rekhe debo.
//example:-> akta employe er sob document amra akta document er bitore rekhe debo.

//*what is Normalized data Model?
// akta document er bitore na rekhe seta ke benge benge alda collection er bitore dete partam.alada document hesabe rekhe dete partam.
//chaile amra employe id er jonno akta collection manage korte partam, tar jei personal detailes ase sei personal detaile er jonno akta collection manage korte partam, address detailes er jonno arekta collection manage korte partam.