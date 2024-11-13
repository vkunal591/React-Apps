const express = require("express");
const { login, signUp } = require("../controller/authController");

// router object
const router = express.Router();

// routes

// login user
router.post("/login", login);

// signup user
router.post("/signup", signUp);

module.exports = router;
