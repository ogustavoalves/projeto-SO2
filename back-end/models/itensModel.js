const connection = require("../infra/connection");

class ItensModel {
    createItens(newItem) {
        const sql = "INSERT INTO Item SET ?";
        
        return new Promise((resolve, reject) => {
            connection.query(sql, newItem, (error, resp) => {
                if(error) {
                    console.log("Erro ao criar" + error.stack);
                    return reject(error)
                }
                console.log("Criado com sucesso")
                resolve(resp)
            });
        }); 
    }

    readItens() {
        const sql = "SELECT * FROM Item;"

        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, resp) => {
                if(error) {
                    console.log('Houve um erro no listarItens' + error.stack);
                    reject(error);
                }
                console.log('listarItens funcionando perfeitamente');
                resolve(resp);
            });
        });
    }

    updateItens(itemToUpdate, id) {
        const sql = "UPDATE Item SET ? WHERE id = ? ;"

        return new Promise((resolve, reject) => {
            connection.query(sql, [itemToUpdate, id], (error, resp) => {
                if(error) {
                    console.log("Erro ao atualizar" + error.stack);
                    reject(error)
                }
                console.log("Atualizado com sucesso")
                resolve(resp)
            });
        }); 
    }

    deleteItens(id) {
        const sql = "DELETE FROM Item WHERE id = ?;";

        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, resp) => {
                if(error){
                    console.log("erro ao deletar" + error.stack);
                    reject(error);
                    return;
                }
                console.log("deletado com sucesso");
                resolve(resp);
            });
        });
    }

}

module.exports = new ItensModel;