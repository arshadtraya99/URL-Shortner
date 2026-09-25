const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Arshad123",
    database: "url_shortner",
    port: 3306
});

db.connect((err) => {

    if (err) {
        console.log("MySQL connection failed");
        console.log(err);
        return;
    }

    console.log("MySQL connected successfully");
});

module.exports = db;