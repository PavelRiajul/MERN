// Middleware best practices

//middleware o akdoroner controller but primary controller er agee middleware controller ta execute hoye jai. thi request er por poree middleware controller ta execute hoy.

//1-> amra jodi api key ba subscription key neye kaj kori tahole seta amra middleware er maddome manage korte pari.
//jodi amader application er bitore user-agentrestriction thake  je  na amar ae application ta ke linax theke call kortee debo na , ba aeta ke konovabee android operating system theke call kore jabe na ,tahole seei restricition golo amra middleware er maddome manage korbo.
// CSRF XSRF  security token based api authentication golo manage korbo middleware er maddome.
//2->  akta nirdisto somoy akta user koto golo request korte pare , seei limiting er jeei bisoe ta aeta o amra middleware maddomee korte pari.
//3-> jodi incoming http request er log rakhte chai log mins history rakhte chai to login er je bisoe golo seta middleware er maddoe korte pari.
//4->  primary controller a hi korar agee  middleware theke amra akta request ke redirect kore onno akta jaigai patheye dete pari.
//5-> akta middleware er bitore ki ki condition set kore rekhesi na rekhesi , middleware jeheto req er por poree execute hoy , tar mane request header,body , parameter , sob kiso ke se inspact korte pare  decorate korte pare ae golor opor bitti kore  request ke accept korte pare abar request ke reject korte kore dete pare.
//6->  amader software er application er jeei business logic golo ase  ba core jeei logic golo ase , amra sob somoy chesta korbo amader middleware golo ke application logic theke alada kore rakhte .karon jokohon akta software er jonno middleware develop korbo , tokhon seei middleware ta amon vabe develop korbo seta onno akta project a re-use kore pari.
//7-> amar web application ke secure korar jonno , jodi amar nijosso kono poddoti/way  thake ja kiso ase middleware a ba middleware er jee level ase  ae level a implement kore felbo. security parameter golo apply korar jonno middleware istej jeta amader middleware istej ta hocche sobtheke best istej. web-application er routing boli model boli controller boli frontend a jodi amra ashe frontend er component boli ajax boli jae boli na keno web application er joto lyre ase tar modde most important lyre hocche security er jonno  middleware lyre. karon amra sob somoy chesta korbo middleware er modde amader joto security mecanizom golo thakbe application er bitore sob golo ae lyre er mdde implement korar jonno.