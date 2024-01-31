//api.js er bitore ae routrt ta kee create kore.ae router ta ke create kore  express.js
const express = require('express');  // express import

//express.js theke Router  function ke call korbo
const router = express.Router()
//ae api er bitore controller ta ke import korbo
const DemoController = require('../Controllers/DemoControllers');

// akhon ae demoController ta neye akta routing in point/routing path  banabo. router function thekee  routing path golo create korbo.
router.get('/demo1',DemoController.demo1)
router.get('/demo2',DemoController.demo2)
router.get('/demo3',DemoController.demo3)


module.exports=router;