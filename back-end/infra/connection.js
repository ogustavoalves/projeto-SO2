const mariadb = require("mariadb");

const connection = mariadb.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345",
    database: "projeto_SO2",
    connectionLimit: 5
});

module.exports = connection;