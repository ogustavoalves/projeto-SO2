//rotas relacionadas ao login

//rotas relacionadas à tabela de items

const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

router.get("/user", (req, res) => {
    const answer = userController.read();
    res.send(answer); 
});

router.post("/user", (req, res) => {
    const answer = userController.create()
    res.send(answer); 
})

// router.put("/user/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`Acessando o item  ${id}`) ;
// })

// router.delete("/user/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`Deletando o item  ${id}`);
// })

module.exports = router;