const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345",
    database: "projeto_SO2"
});

module.exports = connection;