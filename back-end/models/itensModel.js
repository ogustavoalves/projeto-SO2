const connection = require("../infra/connection");

class ItensModel {

    executeQuery(sql, param = "") {
        return new Promise((resolve, reject) => {
            try {
                connection.query(sql, param, (error, answer) => {
                    if(error){
                        return reject(error);
                    }
                    return resolve(answer);
                });
            } catch(error) {
                reject(error);
            }
        });
    }


    createItem(newItem) {
        const sql = "INSERT INTO Item SET ?";
        
        return this.executeQuery(sql, newItem)
    }

    readItem() {
        const sql = "SELECT * FROM Item;"

        return this.executeQuery(sql)
    }

    updateItem(itemToUpdate, id) {
        const sql = "UPDATE Item SET ? WHERE id = ? ;"

        return this.executeQuery(sql, [itemToUpdate, id])
    }

    deleteItem(id) {
        const sql = "DELETE FROM Item WHERE id = ?;";

        return this.executeQuery(sql, id)
    }

}

module.exports = new ItensModel;