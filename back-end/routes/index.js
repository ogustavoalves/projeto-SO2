const itensRoute = require("./itensRoute")
const userRoute = require("./userRoute")

module.exports = (app, express) => {

    //essa ordem é importante
    app.use(express.json());
    app.use(express.urlencoded({ extended:true }))
    app.use(itensRoute);
    app.use(userRoute);
}