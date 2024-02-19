const express = require('express')
const router = express.Router()
const hellocntroller = require('../controllers/HelloController')
const productController = require("../controllers/productController")
const studentController = require("../controllers/studentController")
router.get("/hello-get",hellocntroller.Helloget)
router.post("/hello-post",hellocntroller.Hellopost)

//*create new product
router.post("/create-product",productController.createProduct)
//*get single product
router.get("/single-product/:id",productController.getSingleProduct)
//*get all product
router.get("/All-product",productController.AllProduct)
//*delete product
router.delete("/delete-product/:id",productController.deleteProduct)
//*update product
router.post("/update-product/:id",productController.updateProduct)


//************************************ */
//studentmodel
//*C=Create new student data
router.post('/create-student',studentController.createStudents)   //api in point
//*R=Read  (data read)
router.get('/read-student',studentController.readStudents)
//*Red single studen id check korbo
router.get('/redStudentID/:id',studentController.readStudentByID)
//*Delete student
router.delete('/deleteStudent/:id',studentController.deleteStudent)
//*update student
router.post('/updateStudent/:id',studentController.updateStudents)

module.exports=router