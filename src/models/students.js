
const mongoose = require("mongoose");
const validator =require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email is already exist in out database"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }

    },
    phone:{
        type:Number,
        required:true,
        maxlength:10,
        minlength:10
    },
    address:{
        type:String,
        required:true,
    }
})

const student = new mongoose.model('student',studentSchema)

module.exports =student;