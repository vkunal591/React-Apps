const express = require("express");
const { uploadImage } = require("../controller/uploadeController");
const upload = require("../storage");

// router
const router = express();

// upload image
router.post("/upload",upload.single("profileImage"), uploadImage);

module.exports = router;
