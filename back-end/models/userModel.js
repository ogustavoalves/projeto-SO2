const connection = require("../infra/connection");

class userModel {

    executeQuery(sql, param = "") {
        return new Promise((resolve, reject) => {
            try {
                connection.query(sql, param, (error, answer) => {
                    if(error) {
                        return reject(error);
                    }
                    return resolve(answer);
                });
            } catch(error) {
                reject(error);
            }
        });
    }


    createUser(newUser) {
        const sql = "INSERT INTO Usuario SET ?";
        
        return this.executeQuery(sql, newUser);
    }

    readUser() {
        const sql = "SELECT * FROM Usuario;"

        return this.executeQuery(sql);
    }


}

module.exports = new userModel;