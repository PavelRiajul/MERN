// Response Best Practices

//*Response Body
//1-> response status code ta amra body te debo na , body te deya te amra avoid korbo.karon response er status code ta header er akta part . ba aeta complete alada akta part , body er kono part na.header er kono part ke amra jor kore body te neye ashbo na. body er part ke body teei rakhbo. header er part ke header ee rakhbo.
//2->  jokhon amra  response Body te json provide korbo , tokhon obosse json er jeei best practice golo ase segolo ke follow korbo.
//3->  jokhon single result ba soto soto decission dorkar tokhon amra directly string, boolean, return kore dete pari.
//4->  jokhon json body neye kaj korbo , tokhon obosse  dekhbo json ta incode-decode hoy ki na.orthat json er structure ta thik ase ki na. onek somoy json er bitore bad charecter doke  json ta benge jete pare.amader ki mathai rakhte hobe json ta jeno kono karone benge na jai.
//json ta ke amra json er moto koree return korbo.json ta ke row string kore return korbo na. json er usecase ta akhon beshi.

//*Response Cookies:
//1-> akta regular web application jevabe cooki serb kore , ba jevabe cookie response deei , akta Restful API theke o thik same vabe akta cookie generate kora possible.
//2-> but amra jokhon stateless kono kiso neye kaj korbo ,orthat rest api neye kaj korbo tokhon amra avoied koibo ae bisoe ta ke. amra rest api er bitore jeno cookie neye kaj na kori.aeta ke amra avoied korbo.avoied kore amra rest api a cookie neye kaj na kore json encription/decription JWT ae golo neye amra kaj korte pare, ba token base  authentication neye kaj korte pari .
//rest api develop korar khetre rest api jate asolee rest thake er jonno amra cookie  chiale dete pari but amra avoied korbe.
//jodi  rest api a cookie deya lagee tahole encryption decryption er jeei  seciurity bisoe golo ase  segolo jeno obosse maintain kora hoy.