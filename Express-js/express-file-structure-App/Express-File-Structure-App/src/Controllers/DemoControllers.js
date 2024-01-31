
//controller er bitore demo namee akta function create korbo, jeei controller function ta deye kora jai akta request akta response manage kora jai.

exports.demo1=(req,res)=>{
   res.send('Hello world1')
}

exports.demo2=(req,res)=>{
   res.send('Hello world2')
}

exports.demo3=(req,res)=>{
   res.send('Hello world3')
}

//...................................................................................
//Routing in point a joto golo request pathabo amra ,sob request golo chole jabe specifice jeei method ke call kora ase , specifice seei method er kase request ta jabe .seei method er kaj hocche amra jeei request ta patacche seii request ta ke process kora.request ta ke process korar somoy request/response neye kaj korbe.
//Request -> URL/Body/Headers
//Response -> Status code/Body/Headers