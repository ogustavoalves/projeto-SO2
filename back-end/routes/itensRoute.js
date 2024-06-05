//rotas relacionadas à tabela de items

const { Router } = require("express");
const router = Router();
const itensController = require("../controllers/itensController");
const itensModel = require("../models/itensModel");

router.get("/itens", (req, res) => {
    const readItens = itensController.read();
    readItens
    .then((itens) => res.status(200).json(itens))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/itens", (req, res) => {
    const newItem = req.body;

    const createItem = itensController.create(newItem);
    createItem.then((item) => res.status(201).json(item)).catch((error) => res.status(400).json(error.stack));
})

router.put("/itens/:id", (req, res) => {
    const itemUpdated = req.body;
    const { id } = req.params;
    
    const updatedItem = itensController.update(itemUpdated, id);
    updatedItem.then((item) => res.status(200).json(item)).catch((error) => res.status(400).json(error.message));
})

router.delete("/itens/:id", (req, res) => {
    const { id } = req.params;

   const answer = itensController.delete(id);
   answer.then((answerDelete) => res.status(200).json(answerDelete))
    .catch((error) => res.status(400).json(error.message));
})

module.exports = router;