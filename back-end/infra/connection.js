const mysql = require("mysql");
const json = require("./default.json");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: json.connection.password,
    database: "projetoSO3"
});

module.exports = connection;