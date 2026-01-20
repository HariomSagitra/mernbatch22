const mongoose=require("mongoose");

// create karo model(collecton) db ke andar

const employeeSchema = new mongoose.Schema({
    Name:{type:String},
    Age:{type:Number},
    Position:{type:String,required:true},
    Salary:{type:Number},
})

module.exports = mongoose.model("Employee",employeeSchema)