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
const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "cpf" varchar(64),
    "email" varchar(64),
    "telefone" text,
    "cargo" varchar(64),
    "dataDeAdmissao" varchar(64),
    "salario" int
);`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (id, nome, cpf, email, telefone, cargo, dataDeAdmissao, salario)
VALUES 
    (1, 'Olívia Ribeiro', '03088863698', 'olivia.ribeiro@yahoo.com.br', '999994545', 'Gerente', '10/05/2020', 3500),
    (2, 'Eugênio Oliveira', '15874236921', 'eugenio.oliveira@hotmail.com.br', 987874554, 'Subgerente', '06/12/2020', 3000),
    (3, 'Carolina Lima', '23698741353', 'carolina-l@gmail.com', 974783121, 'Operadora de caixa', '12/11/2021', 1550),
    (4, 'Gustavo Marques', '01088896577', 'gustavo@gmail.com', 984849696, 'Motoboy', '12/11/2021', 1800),
    (5, 'José Andrade', '11211311487', 'joseandrade77@outlook.com', 972369874, 'Cozinheiro', '18/02/2020', 2110),
    (6, 'Tatiana Costa', '78563247896', 'tati22@gmail.com', 988556699, 'operadora de caixa', '13/12/2021', 1550),
    (7, 'Amanda maria', '74126589611', 'amandac2020@yahoo.com.br', 998741236, 'Auxiliar de cozinha', '11/05/2022', 1750),
    (8, 'Luzia Aparecida', '23698741256', 'luziaa@gmail.com', 974745239, 'Atendente', '20/07/2021', 1600),
    (9, 'Fernando Herique', '32158746983', 'fernandoH10@hotmail.com', 977521394, 'Motoboy', '15/10/2021', 1800),
    (10, 'Yuri Francisco', '47963512877', 'yurifral@gmail.com', 986952531, 'Atendente', '14/01/2022', 1600),
    (11, 'Sandra Almeida', '78963241173', 'Sandra-l@yahoo.com', 996312255, 'Serviços Gerais', '01/08/2021', 1500)
`
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

const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "id_produto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_produto" text, 
    "valor_produto" real, 
    "qtd_produto" int, 
    "fornecedor_produto" text, 
    "tipo_produto" text
);`;

const ADD_PRODUTOS_DATA = `
INSERT INTO PRODUTOS (id_produto, nome_produto, valor_produto, qtd_produto, fornecedor_produto, tipo_produto)
VALUES
    (1, 'Coca-Cola lata 350ml', 4.00, 5, 'Distribuidora do Zeca', 'refrigerante'),
    (2, 'Sprite lata 350ml', 4.00, 5, 'Distribuidora do Zeca', 'refrigerante'),
    (3, 'Hamburguer de Costela', 23.00, 10, 'Devs and Dragons', 'hamburguer'),
    (4, 'Hamburguer Vegano', 27.00, 15, 'Devs and Dragons', 'hamburguer'),
    (5, 'Vinho Dv Catena Malbec', 230.00, 13, 'Imports S.A.', 'vinhos'),
    (6, 'Vinho Alma Negra', 250.00, 15, 'Imports S.A.', 'vinhos')
`
const PEDIDO_CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDO_CLIENTE" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "id_pedido" int, 
    "id_cliente" int,  
    "produto" text,
    "quantidade" int
);`;

const ADD_PEDIDO_CLIENTE_DATA = `
INSERT INTO PEDIDO_CLIENTE (id , id_pedido, id_cliente, produto, quantidade)
VALUES
    (1, 2, 4, 'Sprite lata 350ml',1),
    (2, 2, 4, 'Coca-Cola lata 350ml',1),
    (3, 2, 4,'Hamburguer de Costela',1),
    (4, 3, 1, 'Hamburguer Vegano',1),
    (5, 3, 1, 'Vinho Dv Catena Malbec',2)
    `
const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "id_fornecedor" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_fornecedor" text, 
    "cnpj_fornecedor" text, 
    "email_fornecedor" text, 
    "cidade_fornecedor" text, 
    "endereço_fornecedor" text,
    "produto_fornecedor" text
    );`;
    
const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (id_fornecedor, nome_fornecedor, cnpj_fornecedor, email_fornecedor, cidade_fornecedor, endereço_fornecedor, produto_fornecedor)
VALUES
    (1, 'José', '53.948.343/0001-49', 'josel79@gmail.com', 'Rio de Janeiro', '4243 Desiree Gateway Suite 854 - Concord, VT / 68035', 'papel higiênico'),
    (2, 'Carlos', '69.886.035/0001-76', 'carlos96@hotmail.com', 'Nova Iguaçu', '224 Pietro Crescent Suite 291 - Folsom, MA / 87559', 'pão brioche'),
    (3, 'Carla', '89.829.020/0001-83', 'fabricio_dicki84@yahoo.com', 'Niteroi', '391 Wilber Cape Apt. 510 - Littleton, FL / 94156', 'molhos'),
    (4, 'Leandro', '66.512.970/0001-84', 'leandro21@hotmail.com', 'Campo grande', '129 Koch Extensions Suite 247 - Overland Park, OR / 17251', 'bebidas'),
    (5, 'Pedro', '70.162.115/0001-68', 'pedro77@yahoo.com', 'Caxias', '48372 Lucas Creek Suite 378 - Mankato, AK / 10925', 'produtos de limpeza'),
    (6, 'Paulo', '52.790.304/0001-01', 'paulo.stroman58@yahoo.com', 'Madureira', '3016 Lind Island Apt. 008 - Columbus, WY / 24337', 'embalagem'),
    (7, 'Janaina', '50.540.372/0001-89', 'thania3026@uorak.com', 'Volta Redonda' , 'Rua Autazes 661', 'molhos')
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

function criaTabelaFuncionario() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
        if (error) {
            console.log(`Erro ao criar tabela de funcionarios${error}`)
        }
    })
}


function populaTabelaFuncionarios() {
    db.run(ADD_FUNCIONARIOS_DATA, (error) => {
        if (error) {console.log(`Erro ao popular tabela de funcionarios${error}`)
        }
    })
}

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

function criaTabelaProdutos() {
    db.run(PRODUTOS_SCHEMA, (error)=>{
        if(error){
            console.log("Erro ao criar a tabela PRODUTOS")
        }
    })
}

function populaTabelaProdutos() {
    db.run(ADD_PRODUTOS_DATA, (error)=>{
        if(error){
            console.log("Erro ao popular a tabela PRODUTOS")
        }
    })
}

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

function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (error)=>{
        if(error){
            console.log("Erro ao criar a tabela FORNECEDORES")
        }
    })
}

function populaTabelaFornecedores() {
    db.run(ADD_FORNECEDORES_DATA, (error)=>{
        if(error){
            console.log("Erro ao popular a tabela FORNECEDORES")
        }
    })
}

db.serialize(()=>{
    criaTabelaClientes()
    populaTabelaClientes()
    criaTabelaFuncionario()
    populaTabelaFuncionarios()
    criaTabelaPedidos()
    populaTabelaPedidos()
    criaTabelaProdutos()
    populaTabelaProdutos()
    criaTabelaPedidoCliente()
    populaTabelaPedidoCliente()
    criaTabelaFornecedores()
    populaTabelaFornecedores()
})
