const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    email:{
        type:String,
        required:true,
    },
    firstName:{
        type:String, 
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    nic:{
        type:Number,
        required:true,
    },
    
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    }
     
},{
        timestamps : true,
    
});


const Student = mongoose.model("User", studentSchema);

module.exports = Student;