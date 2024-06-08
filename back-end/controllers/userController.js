const userModel = require("../models/userModel");

class userController {

    create(newUser) {
        return userModel.createUser(newUser);
    }

    read() {
        return userModel.readUser();
    }

    // update(id) {
    //     return `atualizando usuário ${id}...`;
    // }

    // delete(id) {
    //     return `deletando usuário ${id}...`;
    // }
}

module.exports = new userController();