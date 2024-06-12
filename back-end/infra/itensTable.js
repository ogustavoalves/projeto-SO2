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
            foto_item varchar(150),
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
                console.log("Erro ao criar tabela Itens");
                console.log(error);
                return;
            }
            console.log("Conexão estabelecida com sucesso")
            console.log("Tabela Itens criada com sucesso")
        });
    }


}

module.exports = new itensTable();
