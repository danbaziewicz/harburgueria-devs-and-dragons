import sqlite3 from "sqlite3";
sqlite3.verbose()

const db = new sqlite3.Database('devs-and-dragons.db');

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "id_cliente" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_cliente" varchar(64),
    "email_cliente" varchar(64),
    "cpf_cliente" varchar(64),
    "telefone_cliente" varchar(64),
    "senha_cliente" varchar(64)
);`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (id_cliente, nome_cliente, email_cliente, cpf_cliente, telefone_cliente, senha_cliente)
VALUES

    (1, 'Otávio Carlos Pereira', 'otavio-pereira71@maxilajes.com.br', 14731789249, 97993193248, 43873056),
    (2, 'Isabella Ana Campos', 'isabella_campos@embalagens.com.br', 71124602208, 92998890175, 82090569),
    (3, 'Catarina Sophia Ferreira', 'catarina_ferreira@ocaconsultoria.com', 57990588285, 92986071915, 18657420),
    (4, 'Oliver Kauê Almeida', 'oliver.kaue.almeida@origembr.com', 11439574235, 92985585189, 13023986),
    (5, 'Valentina Emilly Freitas', 'pietra_freitas@sinalmanaus.com.br', 25041635250, 92999637432, 65976955),
    (6, 'Julia Andreia Peixoto', 'julia-peixoto92@dc4.com.br', 59958596253, 92994241476, 14934429),
    (7, 'Kauê Sérgio Mário Farias', 'kaue_farias@danzarin.com.br', 21274857260, 92993413334, 95729243),
    (8, 'Geraldo Vinicius Jesus', 'geraldojesus@moncks.com.br', 58328489260, 92992793197, 53856567),
    (9, 'Gael Sebastião Sales', 'gael_sales@dmarquivo.com.br', 88622796205, 92998986451, 97748572),
    (10, 'Kaique Diego Fábio Almada', 'kaique_almada@corretora.com.br', 89424557272, 92988253376, 74573161)
`
function criaTabelaClientes() {
  db.run(CLIENTES_SCHEMA, (error)=>{
      if(error){
          console.log("Erro ao criar a tabela CLIENTES")
      }
  })
}

function populaTabelaClientes() {
  db.run(ADD_CLIENTES_DATA, (error)=>{
      if(error){
          console.log("Erro ao popular a tabela CLIENTES")
      }
  })
}

db.serialize(()=>{
  criaTabelaClientes()
  populaTabelaClientes()
})
