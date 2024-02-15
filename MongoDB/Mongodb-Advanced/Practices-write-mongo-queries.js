// practices to write mongo queries

// mongodb query best practices

// More conecntration over projection --> (projection er opor besi besi focus korte hobe.karon projection kinto bolte gele sob kisoe kortese.query er pora data shave ke manage kortese.)

//Prepare projection map before running queries --->(Jokhon kono query ami korbo, query kore data jokhon ber kore neye ashbo,ber kore neye ashar agee obosse setar projection neye chinta korbo,je amar projection ta thik kemon hobe. )

//Projection will describe your output --> (ae projection korbe ki data base theke ki output ashce, sei output ta ke se discribe korbe.ami jokhon database theke outpot neye ashbo sei output sobsomoy je akta collection theke ashbe bisoe ta to ta na , kono akta collection er document theke ashte pare, sub document theke ashte pare, seta koikta collection mele ashte pare,koikta collection join hoye ashte pare.arokom bivinno vabe kintodata output ashte pare.tar jonno projection ta 1st ee korte hobe)

// In Projection section, we will solve the logics, calculation, conversion and others ---> projection lekhar somoy ae projection er jei layer , ae projection layer ee kinto calculation, conversion ae sob kiso ja business logic er proyujon projection layre ee kinto segolo ke complete kore felte pari.

//Projection operator er opor besi besi focus dele onek benefit ase
//1->Benefit:More control over database quires -->( database er jei query ta lekhsi , ae query er opore kinto amar controll bere jabe.kenona projection dekhlee boje jabo amar query er bitore ki ase ki nae )

//2->Benefit:Centralize the application business logics --->(jokhon amra akta application banae, sei application er jei business logic ta ase , sei business golo ke kinto centralize kora ta kob gorotto porno akta logic bises kore data logic.akhon ae application er core logic golo ke chaile frontend a neye jete pari, chile application server a rakhte pari.database server a neye ashte pari.ae khetre frontend a neye jaowa ta bokamir akta kajbo, frontend a securty ta kom)

//forntend je kono somoy change kore felte pari,application-server je kono somoy noje.js theke shift kore c# a neye jete pari,den sehe data ee kinto software ke represent kore.data ee kinto software er pran.

//3->Benefit: Reduce application server side complexities -->(projection er opore jodi amra beshi beshi gorotto dei tahole kinto server side complexities onek beshi komee jabe. )
//4->Benefit: Reduce frontend complecities--> frontend a o complexcities kome jabe.