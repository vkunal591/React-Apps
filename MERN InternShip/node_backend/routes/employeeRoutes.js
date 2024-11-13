const express = require("express");
const { getEmployees } = require("../controller/employeeController");
const { getEmployeeById } = require("../controller/employeeController");
const { createEmployee } = require("../controller/employeeController");
const { updateById } = require("../controller/employeeController");
const { deleteEmployee } = require("../controller/employeeController");

// router object
const router = express.Router();

// routes

// Get All Employee list
router.get("/getAll", getEmployees);

// Get Employee by id
router.get("/getEmployeeById/:id", getEmployeeById);

// Crete Employee
router.post("/create", createEmployee);

// Crete Employee
router.put("/updateById/:id", updateById);


// Delete Employee
router.delete("/deleteById/:id",deleteEmployee)

module.exports = router;
