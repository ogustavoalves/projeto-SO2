const itensRoute = require("./itensRoute")
const userRoute = require("./userRoute")

module.exports = (app) => {
    //essa ordem é importante
    
    app.use(itensRoute);
    // app.use(userRoute);
}