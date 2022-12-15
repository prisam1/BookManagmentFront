const mongoose = require("mongoose")





const studentSchema= new mongoose.Schema(
    {
        teacherId: {
                  type:mongoose.Schema.Types.ObjectId,
                  ref:"teacher"
                },
        studentname:String,
        subject:String, 
        marks:Number,
        
 
       isDeleted: { type: Boolean, default: false }
            
        })
  
module.exports = mongoose.model('student', studentSchema)
   