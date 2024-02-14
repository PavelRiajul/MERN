//Mongodb query writing
// Explore Database related method  

// 1st ae amra database related besh kiso method ase mongodb te , sei method golor kaj ki,kivabe kaj kore,segolor sathe amra inraduce hobo.

//database related jei method golo ase sei method golo practice korar somoy amra localhost use korbo. karon mongodb atlas er sathe ae khane besh kiso method ase jegolo mongodb atlas a cloud environment a execute korte parbo na.

// amr playground a query golo lekhbo.

//* Database related methods.....

//*1-> db.help()
// koto golo atribute ase , kontar ki name ,kontar ki kaj er sob description peye jabo.
//db.help use korle mongodb er sathe reletad trams golo sob peye jabo. 

//*2-> db.hostinfo()
//aeta holo ami je database server ta ke aekhane install koresi , (server community Eddition) seta kon machine a hosting kora ase , seitar detail ta . ae hostinfor detail ta ami jodi local host er sathe connected hoe tahole kinto hosting infor information ami peye jabo.but aetaki ami mongodb atlas a pabo na.karon mongodb atlas tar cloud er hist system aeta apnar sathe share korbe na.

//*3-> db.getName()
// current database er name ta ke se return korbe. current kon database theke query ta choltase.
//example: Charftshop

//*4-> db.getMongo()
//mongodb er jei current database er connection  string ta ase , ba current mongodb kar sathe connected , ba current database connection string ta ki , ae current database er address ta kinto amra peye jabo.

//*5->db.currentOp()
//ae mohorte kon operations golo , ba kon process golo run korse , seitar akta status dekhabe.

//*6->db.dropDatabase()
//dropDatabase korte current database ta remove hoye jabe.

//*7->db.getCollectioninfos()
// amar ae database er modde ki ki collection ase setar akta detail ami dekhte pabo.

//*8->de.getCollectionNames()
//amar database er bitore collection er name golo peye jabo. Craftshop name jei database ta ase amader , ae database er modde bran and new_ collection_name ae 2 ta collection ase.

//*9->db.getLastError()
//amar database er sorbosesh kono error  aese kina , jodi ashee thake seta ki ,seta amra dekhte pari.

//*10->db.getLastErrorObj()
//ae method er kaj hocche  error check

//*11->db.isMaster()
//amra jekhane query ta chalacchi seita ki kono replica set naki seta kono master set , replicaset and master set aetake identify korar jonno db.isMaster.

//*12->db.getReplicationinfo()
//jodi kono replica set amader theke thakee , tahole seitar akta detail amra pabo.

//*13->db.listCommands()
//listcommand korle database er common je  methods golo ase ba commands golo ase, tar akta list peye jabo.

//*14->db.logout()
//jodi db te amader login kora thake ,tahole db.logout method use korle amra kinto logout hoye jabo.

//*15->db.printCollectionStats()
// prottekta collection er akta statistics ba prisonkhan amader deye debe.

//*16->db.serverBuildinfo()
// amar ae monhodb serverBuildinfo reletad information kinto peye jabo.

//*17->db.serverStatus()
// server er status releted besh kiso informaion amra peye jabo.aegolo sob hocche system level er information.

//*18->db.shutdownServer()
// ami jodi server ta ke server ta ke shutdown kore dete chai, tahole jei database server er sathe connected ase ,seta ke shoutdown korte parbo.jodio aeta localhost a kaj korbe kinto mongodb atlas a kaj na o korte pare.

//*19->db.stats()
//

//*20->db.version()
// database er version reletad je information golo , sei information golo amra peye jacchi.

//*21-> db.createCollection('demo')
// db er bitore collection create korte parbo
//example:ami Craftshop database er bitore akta new collection create korbo.

//*22-> db.CollectionName.drop()
// ae method use kore collection delete korte parbo.