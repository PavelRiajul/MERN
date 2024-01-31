const express = require('express')
const router = express.Router();
const demoControllers = require('../controllers/DemoControllers')

//method er bitore deye parameter pass korano jai . parameter mane hocche url parameter.
//URL params/query string/search string/parameter-same
//demo1 er bitore akta  url parameter name  pathabo
//amra url parameter patabo maximum 5 ta er beshi na
router.get('/demo1/:name/:city',demoControllers.demo1)


//akhon request a body pathabo. body pathate gele body pars korte hobe.
//body te amra pathai json data .indrasty te beshi use hocchi json.
router.post('/demo2',demoControllers.demo2)


//request er header neye kaj korbo
router.post('/demo3',demoControllers.demo3)

//request a cookie pathabo.cookie dorte gele cookie pars korte hobe cookie parser package install korte hobe. cookie hocche storage system
router.post('/demo4',demoControllers.demo4)
module.exports=router;