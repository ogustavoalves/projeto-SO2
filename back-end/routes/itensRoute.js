//rotas relacionadas à tabela de items

const { Router } = require("express");
const router = Router();


router.get("/itens", (req, res) => {
    res.send("Acessando itens"); 
});

router.post("/itens", (req, res) => {
    res.send("Postando itens"); 
})

router.put("/itens/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Acessando o item  ${id}`) ;
})

router.delete("/itens/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Deletando o item  ${id}`);
})

module.exports = router;