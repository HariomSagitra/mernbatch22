const mongoose = require("mongoose");

async function DatabaseConnection() {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/");
    await mongoose.connect("mongodb://127.0.0.1:27017/class_2");

    console.log("db connect done");
  } catch (err) {
    console.log("db connection failed", err);
   
  }
}

module.exports = DatabaseConnection;
