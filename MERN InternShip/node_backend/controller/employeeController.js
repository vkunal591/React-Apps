const mySqlPool = require("../db");

// Get All Employee List
const getEmployees = async (req, res) => {
  try {
    const data = await mySqlPool.query("SELECT * FROM employee");
    if (!data) {
      return res
        .status(404)
        .send({ success: false, message: "Data Not Found" });
    }

    res
      .status(200)
      .send({ success: true, message: "Data Get Successfully", data: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Employee API",
      error
    });
  }
};

// Get All Employee List
const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id;
    if (!employeeId) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Id, Employee Not Found" });
    }

    const data = await mySqlPool.query(`SELECT * FROM employee WHERE id=?`, [
      employeeId
    ]);
    if (!data) {
      return res
        .status(404)
        .send({ success: false, message: "Data Not Found" });
    }

    res
      .status(200)
      .send({ success: true, message: "Data Get Successfully", data: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get Employee By Id API",
      error
    });
  }
};

// create employee
const createEmployee = async (req, res) => {
  try {
    const { image, name, email, mobile, gender, designation, course } =
      req.body;
    if (
      !image ||
      !name ||
      !email ||
      !mobile ||
      !gender ||
      !designation ||
      !course
    ) {
      return res
        .status(404)
        .send({ success: false, message: "Please Provide all Fields" });
    }

    const date = Date.now();
    const data = await mySqlPool.query(
      `INSERT INTO employee (image,name,email,mobile,designation,gender,course,createdDate) VALUES(?,?,?,?,?,?,?,?)`,
      [image, name, email, mobile, designation, gender, course, date]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Invalid Id, Employee Not FoundError In Insert Query"
      });
    }

    return res
      .status(201)
      .send({ success: true, message: "Employee Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Employee API",
      error
    });
  }
};

// create employee
const updateById = async (req, res) => {
  try {
    const employeeId = req.params.id;
    if (!employeeId) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Id, Employee Not Found" });
    }

    const { image, name, email, mobile, gender, designation, course } =
      req.body;
    if (
      !image ||
      !name ||
      !email ||
      !mobile ||
      !gender ||
      !designation ||
      !course
    ) {
      return res
        .status(404)
        .send({ success: false, message: "Please Provide all Fields" });
    }

    const date = Date.now();
    const data = await mySqlPool.query(
      `UPDATE employee SET image = ?, name = ?, email = ?, mobile = ?, designation = ?, gender = ?, course = ?, createdDate = ?`,
      [image, name, email, mobile, designation, gender, course, date]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Invalid Id, Employee Not FoundError In Update Query"
      });
    }

    return res
      .status(201)
      .send({ success: true, message: "Employee Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update Employee API",
      error
    });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    if (!employeeId) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Id, Employee Not Found" });
    }

    await mySqlPool.query(`DELETE FROM employee WHERE id = ?`, [employeeId]);
    res.status(200).send({
      success: true,
      message: "Deleted Successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update Employee API",
      error
    });
  }
};

module.exports = { getEmployees, getEmployeeById, createEmployee, updateById ,deleteEmployee};
