import sqlite3 from "sqlite3";
sqlite3.verbose()

const db = new sqlite3.Database('devs-and-dragons.db');

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "id_fornecedor" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_fornecedor" text, 
    "cnpj_fornecedor" real, 
    "email_fornecedor" int, 
    "cidade_fornecedor" text, 
    "endereço_fornecedor" text,
    "produto_fornecedor" text
);`;

const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (id_fornecedor, nome_fornecedor, cnpj_fornecedor, email_fornecedor, cidade_fornecedor, endereço_fornecedor, produto_fornecedor)
VALUES
    (1, 'José', 53.948.343/0001-49, 'josel79@gmail.com', 'Rio de Janeiro', '4243 Desiree Gateway Suite 854 - Concord, VT / 68035', 'papel higiênico'),
    (2, 'Carlos', 69.886.035/0001-76, 'carlos96@hotmail.com', 'Nova Iguaçu', '224 Pietro Crescent Suite 291 - Folsom, MA / 87559', 'pão brioche'/),
    (3, 'Carla', 89.829.020/0001-83, 'fabricio_dicki84@yahoo.com', 'Nitoroi', '391 Wilber Cape Apt. 510 - Littleton, FL / 94156', 'molhos'),
    (4, 'Leandro', 66.512.970/0001-84, 'leandro21@hotmail.com', 'Campo grande', '129 Koch Extensions Suite 247 - Overland Park, OR / 17251', 'bebidas'),
    (5, 'Pedro', 70.162.115/0001-68, 'pedro77@yahoo.com', 'Caxias', '48372 Lucas Creek Suite 378 - Mankato, AK / 10925', 'produtos de limpeza'),
    (6, 'Paulo', 52.790.304/0001-01, 'paulo.stroman58@yahoo.com', 'Madureira', '3016 Lind Island Apt. 008 - Columbus, WY / 24337', 'embalagem'),
    (7, 'Janaina' , 50.540.372/0001-89 , 'thania3026@uorak.com', 'Volta Redonda' , 'Rua Autazes 661', 'molhos')
`

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
    criaTabelaFornecedores()
    populaTabelaFornecedores()
})