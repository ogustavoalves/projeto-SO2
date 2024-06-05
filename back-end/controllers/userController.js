

class userController {

    create() {
        return "criando usuário...";
    }

    read() {
        return "buscando usuário...";
    }

    // update(id) {
    //     return `atualizando usuário ${id}...`;
    // }

    // delete(id) {
    //     return `deletando usuário ${id}...`;
    // }
}

module.exports = new userController();