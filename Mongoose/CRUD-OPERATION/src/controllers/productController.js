const mongoose = require("mongoose")
const productModel = require("../models/productModel")

//*create model(insert)
exports.createProduct= async(req,res)=>{
    try{
      // postman theke data ta ke cathch ba dorbo (req.body) deye
        let reqBody=req.body;
        let data = await productModel.create(reqBody);
        res.status(201).json({status:"success",data:data})
    } catch(e){
        res.status(400).json({status:"error",error:e.toString})
    }

}

//********************* */
//Get single product (Red) 1 ta product check korbo
exports.getSingleProduct=async(req,res)=>{
  let id = new mongoose.Types.ObjectId(req.params.id);
  try{
   let data = await productModel.aggregate([{$match:{_id:id}}])
   res.status(201).json({status:"success",data:data})
  }catch(e){
    res.status(400).json({status:"error",error:e.toString})
  }
}

//**************************** */
//get All product
exports.AllProduct=async(req,res)=>{
    try{
     let data = await productModel.aggregate([
        {$project:{
            title:1,
            price:1,
            stock:1
        }}
     ])
     res.status(201).json({status:"success",data:data})
    }catch(e){
      res.status(400).json({status:"error",error:e.toString})
    }
  }
  
  //***************** */
  //Delete single product
  exports.deleteProduct= async(req,res)=>{
    let id = new mongoose.Types.ObjectId(req.params.id);
    let query = {_id:id}
    try{
        let data = await productModel.deleteOne(query);
        res.status(201).json({status:"success",data:data})
    } catch(e){
        res.status(400).json({status:"error",error:e.toString})
    }
  }

  //******************** */
  //update product
  exports.updateProduct= async(req,res)=>{
    let id = new mongoose.Types.ObjectId(req.params.id);
    let query = {_id:id}
    let reqBody = req.body;
    try{
        let data = await productModel.updateOne(query,reqBody);
        res.status(201).json({status:"success",data:data})
    } catch(e){
        res.status(400).json({status:"error",error:e.toString})
    }
  }