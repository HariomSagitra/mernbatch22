const express = require("express");
const router = express.Router();

 const { insertEmployee } = require("../controllers/Employeecontroller");



router.post("/new-entry", insertEmployee);
module.exports = router;
