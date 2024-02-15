// boolean aggregation operators

//$and operator (2ta expression true)
//$or operator (1 ta expression true)
//$not operator (expression true hole flase. and flase hole true return korbe)



// db.employee.aggregate(
    // [
    // {$addFields:{"NewField":{
        // $and:[
            //  {$eq:["$salary",6000]},
            //  {$eq:["$city","sylet"]}
        // ]
    // }}}
    // ]
    // )