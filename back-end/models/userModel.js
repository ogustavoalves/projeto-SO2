const connection = require("../infra/connection");


class userModel {

    createUser(newUser) {
        const sql = "INSERT INTO Usuario SET ?";
        
        return new Promise((resolve, reject) => {
            connection.query(sql, newUser, (error, resp) => {
                if(error) {
                    console.log("Erro ao criar usuário" + error.stack);
                    return reject(error)
                }
                console.log("Usuário criado com sucesso")
                resolve(resp)
            });
        }); 
    }

    readUser() {
        const sql = "SELECT * FROM Usuario;"

        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, resp) => {
                if(error) {
                    console.log('Houve um erro ao ler usuários' + error.stack);
                    reject(error);
                }
                console.log('funcionando perfeitamente');
                resolve(resp);
            });
        });
    }


}

module.exports = new userModel;