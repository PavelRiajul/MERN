//* Mongoose Default value and versionKey


//*Default Value
//jodi kono property er default value amra declare kore dei,sekhetre oi property er value jodi suplay kora na hoy , ba oi property ti jodi mention kora na hoy tarpore o oi property ti create hoye jabe  akta default value dore.
//example: date:{type:Date, default:Date.now}
// date er ami datype bole dilam je  date hobe. but kono karone Date er data-type jei date ase sei date ta na deya holo ba datejei property ti ase sei property ti kono karone request theke jodi missing hoye jai ba na deya hoy , tahole oi data-type er jonno ba property er jonno je defult value deye deya ase sei defult value ti kinto sekhetre document er bitore insert hoye jabe.

//*versionKey
//jokhon amra mongodb te mongoose use kore data insert kori, tokhon amader json-object/document er akdob nese _v:0 nae akta new property generate kore. ae property ti mongoose neje thekee create kore.
//beshirvag khetree amader versionKey ta dorkar hoi na.

//jodi amader verionKey dorkar na hoy tahole aeta ke false kore rakhte pari
// {versionKey:false}