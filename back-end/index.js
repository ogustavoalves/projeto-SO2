const express = require("express");
const cors = require('cors')
const router = require("./routes/");

const app = express();
const port = 3000;
const connection = require("./infra/connection");
const itensTable = require("./infra/itensTable");
const userTable = require("./infra/userTable");




// itensTable.init(connection);
// userTable.init(connection);

app.use(cors({
    origin: 'http://3.89.100.45:5173',

}));

router(app, express);

app.listen(port, (error) => {
    if(error) {
        console.log("Error", error);
        return;
    }
    console.log(`Server running on http://localhost:${port}`);
});
 