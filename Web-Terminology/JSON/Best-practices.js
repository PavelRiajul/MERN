// Best practices JSON

//Json er bitore amader ki ki Bad Characters doke jete pare ba thakte pare.
//(1)Backspace-\b
//(2)Form feed- \f
//(3)Newline- \n
//(4)Carriage return- \r
//(5)Tab- \t
//(6)Double quote- \"
//(7)Backslash- \\

//jodi kono somoy kono json er bitore bad character chole ashe , tokhon json er structure ta nosto hoye jai.
//orthat JSON er modee akta Error hoye jai.
//JSON er structure jodi kono karone nosto hoye jai bar json er structure ta thikthak formaded na thake tokhon web application er bitore Error chole ashe.

//.............................................................
//  Best practices JSON -1
//Always enclose the key: Value pair within double quotes

// {'id':'1','name':File} //  single quite (is not right)
//{"id":1,"name":"File"}// is Okey
//{"id":"1","name":"File"}// is the best


//  Best practices JSON -2
//Never use Hyphens in your key fields
//hyphens mins (---)
//{"first-name":"pavel","last-name":"riajul"}// is not right
//{"first_name":"pavel","last_name":"riajul"}// is oky (underscore)
//{"firstname":"pavel","lastname":"riajul"}// is oky   
//{"firstName":"pavel","lastName":"riajul"}// is the best  (camelCase)

//  Best practices JSON -3
//Bed special Characters AndSolution

//  Best practices JSON -4
//Always Create a Root element
// jokhon amra akta json array neye kaj korsi  seei array er akta name deya. 
//jokhon amra kono akta array er name deei bar kono akta array ke akta propert er bitore rakhe ,tokhon amra setake boltesi root element er bitore rekhe deya.