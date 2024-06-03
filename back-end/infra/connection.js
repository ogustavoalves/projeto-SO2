const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Wxdvhekyzl141020",
    database: "projetoSO3"
});

module.exports = connection;