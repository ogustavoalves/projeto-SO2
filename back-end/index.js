const express = require("express");
const cors = require('cors')
const router = require("./routes/");

const app = express();
const port = 3000;
const connection = require("./infra/connection");
const itensTable = require("./infra/itensTable");
const userTable = require("./infra/userTable");




itensTable.init(connection);
userTable.init(connection);

app.use(cors({
    origin: 'http://localhost:5173',

}));

router(app, express);

app.listen(port, (error) => {
    if(error) {
        console.log(`Failed to start server on port ${port}:`, error);
        return;
    }
    console.log(`Server running on http://localhost:${port}`);
});
 