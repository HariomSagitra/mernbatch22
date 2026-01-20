const Employee = require("../models/EmpModel.js");

async function insertEmployee(req, res) {
  try {
    const { Name, Age, Position, Salary } = req.body;

    if (!Name || !Position) {
      return res.status(400).json({
        success: false,
        message: "Name and Position are required"
      });
    }

    const data = await Employee.create({ Name, Age, Position, Salary });

    res.status(201).json({
      success: true,
      message: "Employee inserted successfully",
      data
    });

  } catch (error) {
    console.log("error occurred in insertEmployee");
    res.status(500).json({
      success: false,
      message: "code fat gya hai",
      error: error.message
    });
  }
}

module.exports = { insertEmployee };



// async function insertEmployee(req,res){
//     // data ko nikal laao

//     try{

//     }
//     catch(errpr){
//         console.log("errror ecouredn in insert Emplooye")
//         res.status(500).json({
//             sucess:false,
//             message:"code fat gya hai",
//             error:error?.message
//         })
//     }
// }


