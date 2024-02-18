const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
    {
        title:{type:String},
        price:{type:Number},
        discount:{type:Number},
        stock:{type:Number}
    },
    {
        versionKey:false,
        timeStamp:true
    }
)
const productModel = mongoose.model("products",DataSchema);
module.exports=productModel