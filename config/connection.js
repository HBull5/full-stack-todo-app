const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todos",
});

connection.connect((err) => {
    if (err) console.log(err);
    console.log("Database connected...");
});

module.exports = connection;
