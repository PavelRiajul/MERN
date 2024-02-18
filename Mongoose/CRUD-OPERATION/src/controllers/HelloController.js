exports.Helloget=(req,res)=>{
    res.status(200).json({status:"success",data:"hello this is rest api hello get"})
}

exports.Hellopost=(req,res)=>{
    res.status(201).json({status:"success",data:"hello this is rest api hello post"})
}