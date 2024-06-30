const userModel = require("../models/userModel");

class userController {

    create(req, res) {
        const newUser = req.body;
        const answer = userModel.createUser(newUser);

        answer
        .then((user) => res.status(201).json(user))
        .catch((error) => res.status(400).json(error.message));     
    }

    read(req, res) {
        const answer = userModel.readUser();

        answer
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(400).json(error.message))
    }

}

module.exports = new userController();