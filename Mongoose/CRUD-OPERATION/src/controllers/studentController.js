const mongoose = require('mongoose')
const studentModel = require('../models/studentModel')

//* C=Create   -->(data create/insert)
// postman theke data ta ke cathch ba dorbo (req.body) deye

//async await process
exports.createStudents= async(req,res)=>{
    try{
     let reqBody = req.body
     let data = await studentModel.create(reqBody);
     res.status(201).json({status:"success",data:data})
    }catch(e){
        res.status(400).json({status:"fail",data:e.toString})
    }
}

//*R=Read
exports.readStudents=async(req,res)=>{
    try{
     let data = await studentModel.find()
     res.status(201).json({status:"success",data:data})
    }catch(e){
        res.status(400).json({status:"fail",data:e.toString})
    }
}

//* Read by id ( conditional read single student)
exports.readStudentByID=async(req,res)=>{
  try{
  let id = req.params.id;
    let data = await studentModel.find({_id:id})
    res.status(201).json({status:"success",data:data})
  }catch(e){
    res.status(400).json({status:"fail",data:e.toString})
  }
}


//*D=Delete
exports.deleteStudent=async(req,res)=>{
    try{
  let id = req.params.id;
  let data = await studentModel.deleteOne({_id:id})
  res.status(201).json({status:"success",data:data})
    }catch(e){
        res.status(400).json({status:"fail",data:e.toString()})
    }
}


//*U=update (data update)
exports.updateStudents=async(req,res)=>{
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let data = await studentModel.updateOne({_id:id},reqBody)
        res.status(201).json({status:"success",data:data})
    }catch(e){
        res.status(400).json({status:"fail",data:e.toString()})
    }
}