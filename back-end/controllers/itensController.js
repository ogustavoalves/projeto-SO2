const itensModel = require("../models/itensModel");

class itensController {

    create(newItem) {
        return itensModel.createItens(newItem);
    }

    read() {
        return itensModel.readItens();
    }

    update(itemToUpdate, id) {
        return itensModel.updateItens(itemToUpdate, id);
    }

    delete(id) {
        return itensModel.deleteItens(id);
    }
}

module.exports = new itensController();