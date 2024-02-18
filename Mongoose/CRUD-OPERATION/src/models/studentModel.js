const mongoose = require('mongoose')
const DataSchema = mongoose.Schema(
    {
        studentName:{type:String},
        student_id:{type:Number},
        studentRoll:{type:Number},
        studentHome:{type:String}
    },
    { //mongoose automatically prottek ta collection er object er modde versionKey name er akta otirikto property create kore fele .jeta amader proyojon hoy na.aejonno amra versionKey false kore debo.
        versionKey:false,
        //abar ami jodi timestamp true kore dei , tahole mongoose korbe ki automatically amar database a data je create hobe , sei creation time ta ke se record kore rakhbe. abar database a data jokhon update hobe, oi update time ta ke o se record kore rakhbe.
        timeStamp:true
    }
)
const studentModel = mongoose.model("students",DataSchema);
module.exports=studentModel