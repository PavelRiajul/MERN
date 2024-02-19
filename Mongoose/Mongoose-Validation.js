// Mongoose validation


// Mongoose deye jokhon amra data shape create kori , ba model create kori, seikhane amra spacific data er opore kivabe validation apply korte pari.
//validation apply korar jonno bivinno vabe asole amra model er jei data golo neye kaj kori ba data shape neye kaj kori , segolor opore bivinno restriction amra deye dete pari.

//*1->Type Casting validation
//class:String  -->(je amader propery data ti hobe, sei data ti integer hobe nake, date,Number,String hobe. ae doroner type amra define kore dete pari.)

//*2->Required Validation
//Name:{type:String,required:true},  --->(amader property er value ti requre ki na ba seti optional ki na seta bolete pari.)

//*3->Unique Validation
//Name:{type:String,unique:true}, 

//*4->Min-Max Number Validation
//Rool:{type:Number, min:6,max:12} -->(jodi amra number neye kaj kori tahole mongoose model er bitore amra min,max je number er range ase, sei range validation dete pari.)

//*5-> Custom Error Message validation
// validation jokhon amra debo. tokhon jei error ase sei error er respect a asole kon massage ta show korbe, sei massage ta o amra custom  error massage validation er maddome bole dete pari.
//Rool:{
    // type:Number,
    // min:[6,'Mimimum roll 6 & Maximum roll 12, But got{value}']
// }

//*6-> Enumerated type validation
// kono akta array deye sekhane validation deya jete pare.

//*7->Custom Validation ( sob theke beshi proyojon hoi custom validation)
// amader business logic ba amader business je calculation golo amader model er bitore amra validation er bitore neye ashte chai segolor jonno beshirvag somoy amader custom validation er proyujon  hobe.

//*8-> Regex Validation(atio sochaite beshi dorkar hoy)
