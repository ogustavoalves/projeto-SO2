//rotas relacionadas ao login

const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

router.get("/user", (req, res) => {
    const answer = userController.read();
    answer
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json(error.message))
});

router.post("/user", (req, res) => {
    const newUser = req.body;

    const answer = userController.create(newUser);
    answer
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json(error.message));
});

// router.put("/user/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`Acessando o item  ${id}`) ;
// })

// router.delete("/user/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`Deletando o item  ${id}`);
// })

module.exports = router;