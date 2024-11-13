const mySql = require('mysql2/promise');




const mySqlPool = mySql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"emp_db"
});




module.exports = mySqlPool