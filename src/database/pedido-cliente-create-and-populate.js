import sqlite3 from "sqlite3";
sqlite3.verbose()

const db = new sqlite3.Database('devs-and-dragons.db');

const PEDIDO_CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDO_CLIENTE" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "id_pedido" int, 
    "id_cliente" int,  
    "produto" String VarChar(255)  
    FOREIGN KEY(PEDIDO) REFERENCES id_pedido(id_pedido)
    FOREIGN KEY(CLIENTE) REFERENCES id_cliente(id_cliente)  
);`;
const ADD_PEDIDO_CLIENTE_DATA = `
INSERT INTO PEDIDO_CLIENTE (id,id_pedido, id_cliente, produto)
VALUES
    (1, 2, 4, 'Sprite lata 350ml'),
    (2, 2, 4, 'Coca-Cola lata 350ml'),
    (3, 2, 4,'Hamburguer de Costela'),
    (4, 3, 1, 'Hamburguer Vegano')
    (4, 3, 1, 'Vinho Dv Catena Malbec')

    `
    
    function criaTabelaPedidoCliente() {
        db.run(PEDIDO_CLIENTE_SCHEMA, (error)=>{
            if(error){
                console.log("Erro ao criar a tabela PEDIDO_CLIENTE")
            }
        })
    }
    
    function populaTabelaPedidoCliente() {
        db.run(ADD_PEDIDO_CLIENTE_DATA, (error)=>{
            if(error){
                console.log("Erro ao popular a tabela PEDIDO_CLIENTE")
            }
        })
    }
    
    db.serialize(()=>{
        criaTabelaPedidoCliente()
        populaTabelaPedidoCliente()
    })