import sqlite3 from "sqlite3";
sqlite3.verbose()

const db = new sqlite3.Database('bancoDados.db');

const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "id_pedido" INTEGER PRIMARY KEY AUTOINCREMENT,
    "data_do_pedido" VARCHAR(32),
    "hora_do_pedido" VARCHAR(32),
    "valor_final" VARCHAR(32), 
    "forma_de_pagamento" VARCHAR(32)
);`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (id_pedido, data_do_pedido, hora_do_pedido, valor_final, forma_de_pagamento)
VALUES
    (1, "2022-07-01", "12:30:17", "R$ 30.00", "PIX"),
    (2, "2022-07-01", "12:34:15", "R$ 15.00", "DINHEIRO"),
    (3, "2022-07-01", "13:23:05", "R$ 10.00", "DINHEIRO"),
    (4, "2022-07-01", "13:30:07", "R$ 120.00", "CARTÃO"),
    (5, "2022-07-01", "13:32:16", "R$ 60.00", "PIX"),
    (6, "2022-07-01", "13:50:02", "R$ 23.50", "PIX")
`

function criaTabelaPedidos() {
    db.run(PEDIDOS_SCHEMA, (error) => {
        if (error) {
            console.log("Erro ao criar a tabela PEDIDOS")
        }
    })
}

function populaTabelaPedidos() {
    db.run(ADD_PEDIDOS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular a tabela PEDIDOS")
        }
    })
}

db.serialize(() => {
    criaTabelaPedidos()
    populaTabelaPedidos()
})