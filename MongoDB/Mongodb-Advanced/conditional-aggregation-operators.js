// Conditional aggregation operators

//Conditional aggregation operator use koree query bitoree onek jotil joti problem solve kora jai.

//$cond operator
//$cond operator ta use kore amra query er bitore if else er kaj golo korte pari.
// if else deye amra olpo koikta condition check korte pari
//*
// onek golo condition jodi amader ashe , sekhetre amra ($switch operator) use korbo
//$switch operator


// db.employee.aggregate([
    // {$project:{
        // _id:0,
        // salaryMargin:{
            // $cond:{if:{$lte:["$salary",3000]},then:"Low salary",else:"standard salary"}
        // },
        // salary:1,
        // city:1
    // }}
//   ])