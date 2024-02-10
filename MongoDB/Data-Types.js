// Data Types & Understanding Sample Document

// Mongodb database er bitore amra kon doroner  data-type er data goloke store korbo,kon doroner data-type neye mongodb er bitore amra kaj korbo.

//*Datatypes

//1->string --> string data-type neye kaj korte pari.
//2->Integer --> amra sorasori Integer data-type use korte pari , seta hote pare 32 bit integer seta hote pare 64 bit integer.
//3->Boolean --> amra boolean true/false neye kaj korte pari.
//5->Double --> amra double data-type neye kaj korte pari
//6->Min/max key -->  min max key neye kaj korte pari.
//7-> Array -->  sorasori amra array data type neye kaj korte pari.
//8-> Object --> amra object neye kaj korte pari.
//9->Null -->  Null neye kaj korte pari.
//10-> Symbol -->  symbol data type neye kaj korte pari.
//11-> Date -->  amra date neye kaj korte pari.

//*ae sob data-type golor modde sobchite besi kon  data-type neye kaj kori ?
//1->string
//2->Integer
//3->Double
//4->Boolean
//5->Array
//6->Object
//7->Null
//8->Date


//***************** */

// Mongodb te jokhon amra simple document create korbo , sei simple document er bitore kinto first ee mongodb korbe ki, by-default (_id) name se akta object id create korbe _id ta hocche 12 byte er akta hexadecimal number.and jotobar ami noton noton document create kortesi ae 12 bytes er jei hexadecimal number ta ase ae number ta akta kore uniq key generate korse.  . oi object id ta primary key hishabe kaj korbe. asara onnanno jei tottho golo ase sei tottho golo  se json akare ba json structure a tar bitore se rekhe deba.

//12 byte er modde first 4 byte hocche  amar current timestamp prokash kortese (data ta thik kobe create hoise khub easyli sample ducument theke ber korte pari)-->current timestamp tae amaer beshi besi proyojon hoy

//next 3byte amar machine id nirdes kortese(kon machine a ba kon device a amar mongodb server ta ase , sekhan theke amra khob easily machine id use korte pari)

//next 2 byte amar process id nirdes kortese

//next 3 byte amar incremental value nirdesh kortese.


//................*
//json ki sei structure ta sobporke already  amra jani --> akta property thake and sei property er egniste akta value thake.sei value ta bivinno rokom hote pare.hote pare seta string, hote pare seta array,etc