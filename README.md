# API - Hamburgueria Devs and Dragons

Projeto de final do Módulo 4 de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

##  :pencil2: Pré-Requisitos

* Node.js  v.16.15.1
* NPM v.8.11.0

## :outbox_tray: Packages

* Express
* Nodemon
* SQLite

## :outbox_tray: Instalação da Aplicação

Abra o terminal Git ou Powershell e execute os seguintes comandos:

Clonando o repositório:
```
git clone https://github.com/danbaziewicz/harburgueria-devs-and-dragons.git
```

Certifique-se de estar na pasta raiz:
```
cd harburgueria-devs-and-dragons
```

Instalação dos pacotes:
```
npm i
```

Rodando o projeto:
```
npm start
```

## :open_file_folder: Reinicialização do Banco de Dados
Para iniciar um novo banco de dados delete o arquivo devs-and-dragons.db
Em seguida execute o comando
Caso o server ainda esteja executando aperte Ctrl+C no terminal e depois S para finalizar o servidor
```
npm run populate
```
Depois de populado você deve fazer a inicialização do servidor para que possa consumir a API.
```
npm start
```

## :trolleybus: Rotas

Aqui estaremos usando o programa Isomnia para visualizarmos nossa API.
Utilize o caminho + a rota desejada para fazer as buscas.
```
http://localhost:2020/
```

### FUNCIONARIOS

* __GET /funcionarios__
Esquema da resposta
```json
{
   "Funcionarios":
   {
      "id": 1,
      "nome": "Olívia Ribeiro",
      "cpf": "03088863698",
      "email": "olivia.ribeiro@yahoo.com.br",
      "telefone": "999994545",
      "cargo": "Gerente",
      "dataDeAdmissao": "10/05/2020",
      "salario": 3500
   },
   "erro": false
}
```
* __GET /funcionarios/id/:id__
Esquema da resposta
```json
{
   "Funcionario":
   {
      "id": 2,
      "nome": "Eugênio Oliveira",
      "cpf": "15874236921",
      "email": "eugenio.oliveira@hotmail.com.br",
      "telefone": "987874554",
      "cargo": "Subgerente",
      "dataDeAdmissao": "06/12/2020",
      "salario": 3000
   },
   "erro": false
}
```
* __POST /funcionarios__
Esquema da requisição
```json
{
   "nome": "Igor Diego",
   "cpf": "26874136952",
   "email": "igor@email.com",
   "telefone": "987896333",
   "cargo": "Supervisor",
   "dataDeAdmissao": "02/08/2022",
   "salario": 2510
}
```
Esquema da resposta
```json
{
   "msg": "Funcionário cadastrado com sucesso",
   "Funcionarios": 
   {
      "nome": "Igor Diego",
      "cpf": "26874136952",
      "email": "igor@email.com",
      "telefone": "987896333",
      "cargo": "Supervisor",
      "dataDeAdmissao": "02/08/2022",
      "salario": 2510
   },
   "erro": false
}
```
* __PUT /funcionarios/id/:id__
Esquema da requisição
```json
{
   "nome": "novo funcionario",
   "cpf": "26874136952",
   "email": "funcionarionovo@gmail.com",
   "telefone": "987634933",
   "cargo": "Comprados",
   "dataDeAdmissao": "02/08/2022",
   "salario": 2000
}
```
Esquema de resposta
```json
{
   "msg": "Funcionario 15 atualizado com sucesso",
   "Funcionario": 
   {
      "nome": "novo funcionario",
      "cpf": "26874136952",
      "email": "funcionarionovo@gmail.com",
      "telefone": "987634933",
      "cargo": "Comprados",
   }
}
```

### PRODUTOS
* __GET  /produto__
Esquema da resposta
```json
{
   "produtos": [
   {
      "id_produto": 1,
      "nome_produto": "Coca-Cola lata 350ml",
      "valor_produto": 4,
      "qtd_produto": 5,
      "fornecedor_produto": "Distribuidora do Zeca",
      "tipo_produto": "refrigerante"
   }],
   "erro": false
}
```
* __GET  /produto/id/:id__
Esquema da resposta
```json
{
   "produtos":
   {
      "id_produto": 1,
      "nome_produto": "Coca-Cola lata 350ml",
      "valor_produto": 4,
      "qtd_produto": 5,
      "fornecedor_produto": "Distribuidora do Zeca",
      "tipo_produto": "refrigerante"
   },
   "erro": false
}
```
* __GET  /produto/nome/:nome__
Esquema da resposta
```json
{
   "produtos":
   {
      "id_produto": 6,
      "nome_produto": "Vinho Alma Negra",
      "valor_produto": 250,
      "qtd_produto": 15,
      "fornecedor_produto": "Imports S.A.",
      "tipo_produto": "vinhos"
   },
   "erro": false
}
```
* __GET  /produto/fornecedor/:fornecedor__
Esquema da resposta
```json
{
   "produtos":
   {
      "id_produto": 2,
      "nome_produto": "Sprite lata 350ml",
      "valor_produto": 4,
      "qtd_produto": 5,
      "fornecedor_produto": "Distribuidora do Zeca",
      "tipo_produto": "refrigerante"
      },
   "erro": false
}
```
* __GET  /produto/tipo/:tipo__
Esquema da resposta
```json
{
   "produtos":
   {
      "id_produto": 5,
      "nome_produto": "Vinho Dv Catena Malbec",
      "valor_produto": 230,
      "qtd_produto": 13,
      "fornecedor_produto": "Imports S.A.",
      "tipo_produto": "vinhos"
   },
   "erro": false
}
```
* __POST  /produto__
Esquema da requisição
```json
{
   "nome_produto": "Fanta lata 350ml",
   "valor_produto": 4,
   "qtd_produto": 10,
   "fornecedor_produto": "Distribuidora do Zeca",
   "tipo_produto": "refrigerante"
}
```
Esquema da resposta
```json
{
   "msg": "Produto atualizado com sucesso",
   "produto": 
   {
      "nome_produto": "Fanta lata 350ml",
      "valor_produto": 4,
      "qtd_produto": 10,
      "fornecedor_produto": "Distribuidora do Zeca",
      "tipo_produto": "refrigerante"
   },
   "erro": false
}
```
* __PUT  /produto/id/:id__
Esquema da requisição
```json
{
   "nome_produto": "Fanta lata 350ml",
   "valor_produto": 4,
   "qtd_produto": 10,
   "fornecedor_produto": "Distribuidora do Zeca",
   "tipo_produto": "refrigerante"
}
```
Esquema da resposta
```json
{
   "msg": "Produto atualizado com sucesso",
   "produto": 
   {
      "nome_produto": "Fanta lata 350ml",
      "valor_produto": 4,
      "qtd_produto": 10,
      "fornecedor_produto": "Distribuidora do Zeca",
      "tipo_produto": "refrigerante"
   },
   "erro": false
}
```
* __DELETE  /produto/id/:id__
Esquema da respsota
```json
{
   "msg": "Produto 7 deletado com sucesso",
   "erro": false
}
```
