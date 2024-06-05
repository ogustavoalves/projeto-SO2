const express = require("express");

const router = require("./routes/index");

const { route } = require("./routes/itensRoute");
const app = express();
const port = 3000;
const connection = require("./infra/connection");
const itensTable = require("./infra/itensTable");
const userTable = require("./infra/userTable");

router(app, express);

itensTable.init(connection);
userTable.init(connection);



app.listen(port, (error) => {
    if(error) {
        console.log("Error", error);
        return;
    }
    console.log("Rodando aplicação")
});
 