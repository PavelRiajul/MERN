// group by multiple
//abar akta dore o group by korte pari.

// akta filed deye group by na kore, multiple filed deye o group by korte pari.orthat multiple identiti dore o  group by korte pari.

// multiple id dore ba multiple field dore amra group by kore max,min sum,avg ae tottho golo ber kore neye ashte  pari.


//aggregate use
//db.products.aggregate([
    // {$group:{_id:{name:"$name",city:"$city"}}}
// ])


// sum,avg,max,min ber korte parbo
//db.products.aggregate([
    // {$group:
   // {
     //   _id:{name:"$name",city:"$city"},
       //sum:{$sum:"$salary"}
   // }}
   
// ])



//jodi aksathe sob korte chai
//db.products.aggregate([
    // {$group:
   // {
     //   _id:{name:"$name",city:"$city"},
       //sum:{$sum:"$salary"},
       //avg:{$avg:"$salary"},
       //max:{$max:"$salary"},
       //min:{$min:"$salary"}
   // }}
   
// ])