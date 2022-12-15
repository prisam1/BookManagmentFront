const express = require("express")
const router = express.Router()

const { authentication } = require("../auth/auth")
const {createstudent,updateStudent,getStudent,studentdelete}= require("../Controller/studentController")
const {createuser,login}= require("../Controller/teacherController")




router.post("/register",createuser)
router.post("/login", login)

router.post("/createstudent",authentication,createstudent)
router.put("/user",authentication,updateStudent)
router.get("/getStudent",authentication,getStudent)
router.delete("/studentdelete",authentication,studentdelete)


 
module.exports=router
