
const student = require("../models/student")

const isValidRequest = function (object) {
    return Object.keys(object).length > 0
}

const isValid = function (value) {
  if (typeof value === "undefined" || !value) return false
  if (typeof value !== "string" || value.trim().length === 0) return false
  return true
}

const createstudent = async function (req, res) {
  
        let data = req.body
       
        if (!isValidRequest(data)) { return res.status(400).send({message: "user data is required" }) }
        const {studentname,subject,userId,marks}=data

        let studentdata = await student.findOne({studentname:studentname,subject:subject,isDeleted:false})
      
        if(!studentdata || studentdata==null)
            {
              
              let show = await student.create(data)
               
              
                return res.status(201).send({messege: 'created successfully', Data: show })
      
            }
       
      else
      {           
       
        if(studentdata.studentname==studentname && studentdata.subject==subject)
        {
          
                                 
                  studentdata.marks=parseInt(studentdata.marks)+parseInt(marks)

              let updateData = await student.findOneAndUpdate({studentname:studentname,subject:subject,userId:userId,isDeleted:false},{$set:studentdata},{ new: true })
      
               return res.status(201).send({Data: updateData})
                }
        }
     
      }
   

const updateStudent = async function (req, res) {
   
      let data = req.body
      
      let userId = req.decodedToken.userId
      let { studentname, subject, marks} = data
  
    
      if (studentname || studentname ==="") {
            if (!isValid(studentname))
              return res.status(400).send({message: "Please enter Student name" })
      }
       
       if (subject || subject ==="") {
        if (!isValid(subject))
          return res.status(400).send({message: "Please enter Subject name" })
       }
        
       if (marks || marks ==="") {
        if (!isValid(marks))
          return res.status(400).send({message: "Please enter Marks" })
       }
           
      let updateData = await student.findOneAndUpdate({studentname: studentname,subject:subject,marks:marks,userId:userId,isDeleted:false}, data, { new: true })
      res.status(200).send({messege: "Updated Successfully",Data: updateData})
    
 
  }
  const getStudent = async function (req, res) {
   
       let userId = req.decodedToken.userId
      
       let studentdata = await student.find({userId:userId, isDeleted:false}).select({studentname:1,subject:1,marks:1})
           
       if (!studentdata)
      return res.status(404).send({message: "No Data Found" })
      
      else
      return res.status(200).send({Data: studentdata})
    
    
}
const studentdelete = async function (req, res) {
  
  let userId = req.decodedToken.userId
       
      let data = req.query

       const {studentname} = data

       let studentdetails = await student.findOneAndUpdate({studentname:studentname,userId:userId,isdelete:false},{isDeleted:true}, { new: true })
   
          if (!studentdetails) {
            return res.status(404).send({ status: false, message: "No Student Found"})
        } else {
            
          return res.status(200).send({message: "Successfully Deleted" })
        }
}


  module.exports = { createstudent, updateStudent,getStudent,studentdelete} 
