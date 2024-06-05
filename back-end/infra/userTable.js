class usersTable {
    init(connection) {
        this.connection = connection;
        this.createUsersTable();
    }

    createUsersTable() {
        const sql = `
        create table IF NOT EXISTS Usuario (
            id int primary key not null auto_increment,
            nome varchar(30) ,
            senha varchar(20) not null
        );
        
        `
        this.connection.query(sql, (error) => {
            if(error) {
                console.log("Erro ao criar tabela Usuários");
                console.log(error);
                return;
            }
            console.log("Conexão estabelecida com sucesso")
            console.log("Tabela Usuários criada com sucesso")
        });
    }
}

module.exports = new usersTable();