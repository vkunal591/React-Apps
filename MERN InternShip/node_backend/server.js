const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./db");
const multer = require("multer");
const cors = require("cors");

// configure dotenv
dotenv.config();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/photos", express.static("uploads"));

// routes
app.use("/api/v1/employee", require("./routes/employeeRoutes"));
app.use("/api/v1/image", require("./routes/uploadRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.get("/test", (req, res) => {
  res.status(200).send("<h1>Node Js MySql App</h1>");
});

// port
const PORT = process.env.PORT || 8080;

// conditional listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log(`Server With DB Is Running On ${PORT}.`);
  })
  .catch((err) => {
    console.log(err);
  });

// listen
app.listen(PORT, () => {
  console.log(`Server Is Running On ${PORT}.`);
});
