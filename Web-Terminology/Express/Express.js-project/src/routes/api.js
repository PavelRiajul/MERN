const express = require('express')
const HelloController = require('../controllers/HelloController')
const router = express.Router()

//get routing (api end point hello-get)
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)


module.exports=router