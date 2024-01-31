//Routing in point a joto golo request pathabo amra ,sob request golo chole jabe specifice jeei method ke 
//call kora ase , specifice seei method er kase request ta jabe .seei method er kaj hocche amra jeei request 
//ta patacche seii request ta ke process kora.request ta ke process korar somoy request/response neye kaj 
//korbe.
//Request -> URL/Body/Headers
//Response -> Status code/Body/Headers

// request a url parameter pathaese
exports.demo1=(req,res)=>{
let nameValue= req.params.name
let cityValue=req.params.city
res.status(200).json({
    name:nameValue,
    city:cityValue
})
}

//request  a body pathaesi
exports.demo2=(req,res)=>{
   let name =  req.body['name']
  let city =   req.body['city']
   let age =   req.body['age']
   let works= req.body['works']
    res.status(200).json({
        name:name,
        city:city,
        age:age,
        works:works
    })
}


// request a header pathabo

exports.demo3=(req,res)=>{
    let token=req.headers['token']
    res.status(200).json({
        token:token
    })
}



//request a cookie recive korbo
exports.demo4=(req,res)=>{
     let myCookie=req.cookies['Cookie_1']
    res.status(200).json({
        myCookie:myCookie
    })
}
