const itensModel = require("../models/itensModel");

class itensController {

    create(req, res) {
        const newItem = req.body;
        const createItem = itensModel.createItem(newItem);
        
        createItem
        .then((item) => res.status(201).json(item))
        .catch((error) => res.status(400).json(error.stack));
    }

    read(req, res) {
        const readItens = itensModel.readItem();

        readItens
        .then((itens) => res.status(200).json(itens))
        .catch((error) => res.status(400).json(error.stack));
    }

    update(req, res) {
        const itemUpdated = req.body;
        const { id } = req.params;
        const updatedItem = itensModel.updateItem(itemUpdated, id);

        updatedItem
        .then((item) => res.status(200).json(item))
        .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const answer = itensModel.deleteItem(id);

        answer
        .then((answerDelete) => res.status(200).json(answerDelete))
        .catch((error) => res.status(400).json(error.message));
    }
}

module.exports = new itensController();