const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
name:{type:string,required:true},
email:{type:String,Unique:true},
password: {type:string,required:true},
mobileNumber:{type:string,required:true},
gender: {type:string, enum: ["male","female"],required:true},
role: {type:string, enum: ["admin","customer"],default:"customer"},
});
module.exports=mongoose.model("User",userSchema)