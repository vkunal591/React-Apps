const mySqlPool = require("../db");

// login employee
const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Username and Password."
      });
    }

    const date = Date.now();
    const data = await mySqlPool.query(
      `INSERT INTO login (userName, pwd) VALUES(?,?)`,
      [username, password]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Invalid username or password."
      });
    }

    return res
      .status(201)
      .send({ success: true, message: "User Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in SignUp User API",
      error
    });
  }
};

// login employee
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Username and Password."
      });
    }

    const date = Date.now();
    const data = await mySqlPool.query(
      `SELECT * FROM login WHERE username = ? AND pwd = ?`,
      [username, password]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Invalid username or password."
      });
    }

    return res
      .status(201)
      .send({ success: true, message: "User Log in Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in SignUp User API",
      error
    });
  }
};

module.exports = { signUp, login };
