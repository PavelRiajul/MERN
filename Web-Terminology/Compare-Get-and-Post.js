//Compare Get and Post  method
//onek golo request method er bitore amra 5 ta methods neye kaj kori.

//1->Get
//2->Post
//3->Put
//4->Patch
//5->Delete

//ae sob method er modde Get and Post method ta sob theke beshi.
//Get and Post ae 2 ta deyee akta Backend er joto doroner execution hoy ba akta backend er joto dotoner req-res er bisoe golo ase  chaile sob kiso manage kora jai.

// GET     vs           POST
//*Back button
//post->kono akta form ke backend a post kora hoyese . post korar po jodi instant Back button a pest kori ba  page ta ke reload deei tahole data re-submit hobar akta issu hote pare.
//Get- data re-submit hovbar somvabona nae.
//*Bookmarked
//Get- Get method a kono execution hole setake bookmarked kore rakha jai.amra browser a kono akta url ke bookmarked kore rakhte pari.
//post- Post method method a bookmarked kore rakha jai na.
//*Cached
//Get- get method a kono gotona gotle seta cash hote pare 
//post-Post method a kono gotona gotle seta cashing soncranto kono issu nae .chaile  cash kore rakhte pari.
//*Encoding type
//Get- Get method er khetre Encoding type ta hoy -> application/x-www-form-urlencoded
//Post-post method er khetre Encoding type ta hoy -> application/json o hote pare,multipart/form data o hote pare.
//*History
//Get- Get method a jodi kono url parameter pathai browser history te seta theke jai.
//Post- post method er khetre kono url parameter pathale browser heitory te seta thake na.
//*Restrictions on data length
//Get- jeheto Get method a url  er modee onek kiso  kiso rekhe decchi ,to er akta length ase,akta maximum url length hote pare 2048 characters.aeta browser to browser very kore.
//Post- post method er khetre  most of the time amra url deye data na patheye ,post method er khatre body deye data pathaie, body deye data pathate gele erkinto kono limite nae .ae jonno post method ke bola hocche no restrictions.
//*Restrictions on data type
//Get- Get method a only ASCII character are allowed.orthat data-type ta ASCII te thakte hobe.
//Post- Post method er khetre no restrictions chaile Binary data pathate parbo.
//*Security
//Get- Get method Post method theke kom secure. orthat url er modee parameter kore kore data pathai .aejonno kono doroner sensetive tottho password sensitive information jeta url parameter a pathano ochit na.
//Post- Post method get theke kisota secure ,karon post method a url parameter deye / / alada alada kore data pathai na ,amra body deye data pathai .and browser history te seta save kore browser rakhe na.ba setar kono logs browser thke na.seei karone post method is little safer.
//*Visibility
//Get- Get method jokhon url parameter kore onek golo data pathabo tahole seta sobar kase publicly visible hoye jabe.
//Post- Post method a jeheto body deye data patacchi seta dekhte gele inspact korte hobe ,inspact kore Network a jaite hobe tarpor ami ki data pathalam seta inspact korte hobe request a jaite hobe.tarpor dekhte dekhbo ami ki ki data pathaisi.