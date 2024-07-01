class usersTable {
    init(connection) {
        this.connection = connection;
        this.createUsersTable();
    }

    createUsersTable() {
        const sql = `
        create table IF NOT EXISTS Usuario (
            id int primary key not null auto_increment,
            email varchar(255) unique not null,
            password varchar(20) not null
        );
        
        `
        this.connection.query(sql, (error) => {
            if(error) {
                console.log("Error creating Users table: ", error);
                return;
            }
    
        });
    }
}

module.exports = new usersTable();