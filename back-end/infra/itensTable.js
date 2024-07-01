class itensTable {
    init(connection) {
        this.connection = connection;
        this.createItensTable();
    }

    createItensTable() {
        const sql = `
        create table IF NOT EXISTS Item ( 
            id int primary key not null auto_increment,
            nome_item varchar(30),
            foto_item varchar(255),
            descricao_item varchar(40),
            valor_compra decimal(8,2),
            valor_venda decimal(8,2),
            quantidade_estoque int,
            estoque_min int ,
            categoria enum("Porção", "Bebida", "Combo", "Diversos") default "Diversos", 
            local_estoque varchar(30),
            informacoes_gerais varchar(150)
        );
        
        `
        this.connection.query(sql, (error) => {
            if(error) {
                console.log("Error creating Itens table", error);
                return;
            }
            
        });
    }


}

module.exports = new itensTable();
