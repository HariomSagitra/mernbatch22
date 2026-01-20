

const express = require("express");  
require("dotenv").config()
const port = process.env.PORT || 4000

const mongoose = require("mongoose");
const app = express();               



//const port = 3000

app.listen(port,()=>{
    console.log('server is running')
})



// mongoose.connect("mongodb://localhost:27017/").then(()=>{
//     console.log("db connection done")
// }).catch(()=>{
//     console.log("db connection failled")


// })
// async function DatabaseConnection() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/");
//     console.log("db connect done");
//   } catch (err) {
//     console.log("failed", err);
//   }
// }

const DatabaseConnection = require("./configuration/DatabaseConnection");
DatabaseConnection();



app.get("/",(req,res)=>{
    // res.send("<h1>This is a heading</h1>")

    const data = {
    name: "Hari",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "MongoDB"],
    active: true
  };

  res.json({data}); 

})

// ye wal part impoer hai   text data ko json m convert karne ke liye use hota hai nhi to request data undifine aayega
app.use(express.json());   

const Emplooyeroutes = require("./routes/Employeerouter");

app.use("/api/v1", Emplooyeroutes);




