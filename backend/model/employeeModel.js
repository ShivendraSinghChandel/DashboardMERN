const mongoose=require("mongoose");

const empSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    city:String,
    contact:String,
    password:String

})


module.exports=mongoose.model("employee",empSchema);