# API - Hamburgueria Devs and Dragons 🎲🍔🍟

Projeto final do Módulo 4 de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) no qual tivemos a oportunidade que desenvolver uma API de um aplicativo. Nós da Squad 2 escolhemos o tema Hamburgueria e disso surgiu a Hamburgueria Devs and Dragons!

Nesse projeto ficamos responsaveis por criar uma API REST no padrão MVC para a Hamburgueria Devs and Dragons, onde será possível realizar operações CRUD nas entidades abaixo:
- Clientes
- Produtos
- Funcionários
- Pedidos
- Pedido_Cliente
- Fornecedores

## 📝 Pré-Requisitos

- Ter o [![Git](https://img.shields.io/chocolatey/v/git.svg?label=Git&logo=git&style=flat)](https://git-scm.com/downloads) instalado.

- Ter o [![Chocolatey](https://img.shields.io/chocolatey/v/nodejs-lts.svg?label=Node&logo=Nodedotjs&style=flat)](https://nodejs.org/pt-br/download/) instalado - v.16.15.1

* NPM v.8.11.0

## 📦 Packages

* Express
* Nodemon
* SQLite

## 📤 Instalação da Aplicação

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

```
npm i express
```

```
npm i nodemon
```

Rodando o projeto:
```
npm start
```

## 📂Reinicialização do Banco de Dados
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

## 🚌 Rotas

Aqui estaremos usando o programa Isomnia para visualizarmos nossa API.
Utilize o caminho + a rota desejada para fazer as buscas.
```
http://localhost:2020/
```
---
## 🛣️ Rotas implementadas nas entidades

###Clientes
- **GET `http://localhost:2020/cliente`**

Retorna todos os clientes do banco de dados.
Exemplo de resposta:
```json
{
	"clientes": [
		{
			"id_cliente": 1,
			"nome_cliente": "Otávio Carlos Pereira",
			"email_cliente": "otavio-pereira71@maxilajes.com.br",
			"cpf_cliente": "14731789249",
			"telefone_cliente": "97993193248",
			"senha_cliente": "43873056"
		}]
}
```

- **GET `http://localhost:2020/cliente/id/10`**

Retorna o cliente com o id especificado.

Exemplo de resposta:
```json
{
	"clientes": {
		"id_cliente": 10,
		"nome_cliente": "Kaique Diego Fábio Almada",
		"email_cliente": "kaique_almada@corretora.com.br",
		"cpf_cliente": "89424557272",
		"telefone_cliente": "92988253376",
		"senha_cliente": "74573161"
	},
	"erro": false
}
```

- **GET `http://localhost:2020/cliente/nomeCompleto/Kaique Diego Fábio Almada`**

Retorna o cliente com o nome completo especificado.

Exemplo de resposta:
```json
{
	"clientes": [
		{
			"id_cliente": 10,
			"nome_cliente": "Kaique Diego Fábio Almada",
			"email_cliente": "kaique_almada@corretora.com.br",
			"cpf_cliente": "89424557272",
			"telefone_cliente": "92988253376",
			"senha_cliente": "74573161"
		}
	],
	"erro": false
}
```

- **GET `http://localhost:2020/cliente/email/kaique_almada@corretora.com.br`**

Retorna o cliente com o email especificado.

Exemplo de resposta:
```json
{
	"clientes": [
		{
			"id_cliente": 10,
			"nome_cliente": "Kaique Diego Fábio Almada",
			"email_cliente": "kaique_almada@corretora.com.br",
			"cpf_cliente": "89424557272",
			"telefone_cliente": "92988253376",
			"senha_cliente": "74573161"
		}
	],
	"erro": false
}
```

- **GET `http://localhost:2020/cliente/cpf/71124602208`**

Retorna o cliente com o CPF especificado.

Exemplo de resposta:
```json
{
	"clientes": [
		{
			"id_cliente": 2,
			"nome_cliente": "Isabela Ana Souza",
			"email_cliente": "isabela_campos@embalagens.com.br",
			"cpf_cliente": "71124602208",
			"telefone_cliente": "92998890175",
			"senha_cliente": "82090569"
		}
	],
	"erro": false
}
```

- **GET `http://localhost:2020/cliente/telefone/97993193248`**

Retorna o cliente com o telefone especificado.

Exemplo de resposta:
```json
{
	"clientes": [
		{
			"id_cliente": 1,
			"nome_cliente": "Otávio Carlos Pereira",
			"email_cliente": "otavio-pereira71@maxilajes.com.br",
			"cpf_cliente": "14731789249",
			"telefone_cliente": "97993193248",
			"senha_cliente": "43873056"
		}
	],
	"erro": false
}
```


- **GET `http://localhost:2020/cliente/senha/18657420`**

Retorna o cliente com a senha especificado.

Exemplo de resposta:
```json
{
	"clientes": [
		{
			"id_cliente": 3,
			"nome_cliente": "Catarina Sophia Ferreira",
			"email_cliente": "catarina_ferreira@ocaconsultoria.com",
			"cpf_cliente": "57990588285",
			"telefone_cliente": "92986071915",
			"senha_cliente": "18657420"
		}
	],
	"erro": false
}
```

- **POST `http://localhost:2020/cliente`**

Insere um cliente no banco de dados.

    Dados a serem enviados no body via POST


  `"nome_cliente"`: Nome do cliente;
   `"email_cliente"` : Email do cliente (string, obrigatório possuir o @);
  `"cpf_cliente"` :  CPF do cliente (número de 11 digitos);
  `"telefone_cliente"` : Telefone do cliente (número de telefone deve possuir 11 dígitos);
  `"senha_cliente"` : senha do cliente (deve possuir 8 ou mais dígitos).


Exemplo de body de requisição:
```json
{
  "nome_cliente": "Luana da Silva",
  "email_cliente": "luana@gmail.com",
  "cpf_cliente": "11111111110",
  "telefone_cliente": "99459784971",
  "senha_cliente": "12345678"
}
```

Exemplo de resposta:
```json
{
	"msg": "Cliente cadastrado com sucesso",
	"cliente": {
		"nome_cliente": "Luana da Silva",
		"email_cliente": "luana@gmail.com",
		"cpf_cliente": "11111111110",
		"telefone_cliente": "99459784971",
		"senha_cliente": "12345678"
	},
	"erro": false
}
```

- **PUT `http://localhost:2020/cliente/id/02`**

Escolha o cliente pelo seu id para realizar a atualização do banco de dados.

Exemplo de body de requisição:
```json
{
	"nome_cliente": "Isabella dos Anjos Ana Souza",
	"email_cliente": "isabella@embalagens.com.br",
	"cpf_cliente": "71124602208",
	"telefone_cliente": "92998890175",
	"senha_cliente": "8290569"
}
```
Esquema de Resposta:
```json
{
	"msg": "Cliente atualizado com sucesso",
	"cliente": {
		"nome_cliente": "Isabela Ana Souza",
		"email_cliente": "isabela_campos@embalagens.com.br",
		"cpf_cliente": "71124602208",
		"telefone_cliente": "92998890175",
		"senha_cliente": "82090569"
	},
	"erro": false
}
```

- **DELETE `http://localhost:2020/cliente/id/15`**

Escolha o cliente pelo seu id para realizar a exclusão do banco de dados.

Esquema de Resposta:
```json
{
	"msg": "Usuário 15 deletado com sucesso",
	"erro": false
}
```

###Produtos
- **GET `http://localhost:2020/produto`**

Retorna todos os produtos do banco de dados.
Exemplo de resposta:
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

- **GET `http://localhost:2020/produto/id/1`**

Retorna o cliente com o id especificado.

Exemplo de resposta:
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

- **GET `http://localhost:2020/produto/nome/Vinho Alma Negra`**

Retorna o produto com o nome especificado.

Exemplo de resposta:
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

- **GET `http://localhost:2020/produto/fornecedor/Distribuidora do Zeca`**

Retorna o fornecedor com o nome especificado.

Exemplo de resposta:
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

- **GET `http://localhost:2020/produto/tipo/vinhos`**

Retorna o tipo do produto especificado.

Exemplo de resposta:
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

- **POST `http://localhost:2020/produto`**

Insere um produto no banco de dados.

Exemplo de body de requisição:
```json
{
   "nome_produto": "Fanta lata 350ml",
   "valor_produto": 4,
   "qtd_produto": 10,
   "fornecedor_produto": "Distribuidora do Zeca",
   "tipo_produto": "refrigerante"
}
```

Exemplo de resposta:
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

- **PUT `http://localhost:2020/cliente/id/02`**

Escolha o produto pelo seu id para realizar a atualização do banco de dados.

Exemplo de body de requisição:
```json
{
	"id_produto": 2,
	"nome_produto": "coca lata 350ml",
	"valor_produto": 4,
	"qtd_produto": 5,
	"fornecedor_produto": "Distribuidora do Zeca",
	"tipo_produto": "refrigerante em lata"
}
```
Esquema de Resposta:
```json
{
	"msg": "Produto atualizado com sucesso",
	"produto": {
		"nome_produto": "coca lata 350ml",
		"valor_produto": 4,
		"qtd_produto": 5,
		"fornecedor_produto": "Distribuidora do Zeca",
		"tipo_produto": "refrigerante em lata"
	},
	"erro": false
}
```

- **DELETE `http://localhost:2020/produto/id/7`**

Escolha o produto pelo seu id para realizar a exclusão do banco de dados.

Esquema de Resposta:
```json
{
   "msg": "Produto 7 deletado com sucesso",
   "erro": false
}
```

###Funcionários
- **GET `http://localhost:2020/funcionario`**

Retorna todos os funcionarios do banco de dados.
Exemplo de resposta:
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

- **GET `http://localhost:2020/funcionario/id/2`**

Retorna o funcionario com o id especificado.

Exemplo de resposta:
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

- **POST `http://localhost:2020/funcionario`**

Insere um funcionário no banco de dados.

Exemplo de body de requisição:
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

Exemplo de resposta:
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

- **PUT `http://localhost:2020/funcionario/id/`**

Escolha o funcionário pelo seu id para realizar a atualização do banco de dados.

Exemplo de body de requisição:
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
Esquema de Resposta:
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

- **DELETE `http://localhost:2020/funcionarios/id/11`**

Escolha o funcionário pelo seu id para realizar a exclusão do banco de dados.

Esquema de Resposta:
```json
{
    "Msg": "Funcionario 11 deletado com sucesso",
    "erro": false
}
```

###Pedidos
- **GET `http://localhost:2020/pedido`**

Retorna todos os pedidos do banco de dados.
Exemplo de resposta:
```json
{
	"pedidos": [
		{
			"id_pedido": 1,
			"data_do_pedido": "2022-07-01",
			"hora_do_pedido": "12:30:17",
			"valor_final": "R$ 30.00",
			"forma_de_pagamento": "PIX"
		}
```

- **GET `http://localhost:2020/pedido/data/`**

Retorna o pedido pela data especificada.

Exemplo de resposta:
```json
{
	"pedidos": {
		"id_pedido": 3,
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "13:23:05",
		"valor_final": "R$ 10.00",
		"forma_de_pagamento": "DINHEIRO"
	},
	"erro": false
}
```

- **GET `http://localhost:2020/pedido/hora/`**

Retorna o pedido pela hora especificada.


Exemplo de resposta:
```json
{
	"pedidos": {
		"id_pedido": 3,
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "13:23:05",
		"valor_final": "R$ 10.00",
		"forma_de_pagamento": "DINHEIRO"
	},
	"erro": false
}
```

- **GET `http://localhost:2020/pedido/valor/`**

Retorna o pedido pelo valor especificado.

Exemplo de resposta:
```json
{
	"pedidos": {
		"id_pedido": 3,
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "13:23:05",
		"valor_final": "R$ 10.00",
		"forma_de_pagamento": "DINHEIRO"
	},
	"erro": false
}
```

- **GET `http://localhost:2020/pedido/forma/`**

Retorna pela forma de pagamento especificada.

Exemplo de resposta:
```json
{
	"pedidos": {
		"id_pedido": 3,
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "13:23:05",
		"valor_final": "R$ 10.00",
		"forma_de_pagamento": "DINHEIRO"
	},
	"erro": false
}
```

- **POST `http://localhost:2020/pedido`**

Insere um pedido no banco de dados.

Exemplo de body de requisição:

```json
{
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "12:30:17",
		"valor_final": "R$ 30.00",
		"forma_de_pagamento": "PIX"

}
```

Exemplo de resposta:
```json
{
	"msg": "Pedido criado !",
	"pedidos": {
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "12:30:17",
		"valor_final": "R$ 30.00",
		"forma_de_pagamento": "PIX"
	},
	"erro": false
}
```

- **PUT `http://localhost:2020/pedido/id/`**

Escolha o pedido pelo seu id para realizar a atualização do banco de dados.

Exemplo de body de requisição:
```json
{
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "13:50:02",
		"valor_final": "R$ 23.50",
		"forma_de_pagamento": "PIX"
}
```
Esquema de Resposta:
```json
{
	"msg": "Pedido atualizado com sucesso",
	"pedidos": {
		"data_do_pedido": "2022-07-01",
		"hora_do_pedido": "13:50:02",
		"valor_final": "R$ 23.50",
		"forma_de_pagamento": "PIX"
	},
	"erro": false
}
```

- **DELETE `http://localhost:2020/pedido/id/2`**

Escolha o pedido pelo seu id para realizar a exclusão do banco de dados.

Esquema de Resposta:
```json
{
	"msg": "Pedido 2 deletado com sucesso",
	"erro": false
}
```

###Pedido-cliente
- **GET `http://localhost:2020/pedido-cliente`**

Retorna todos os pedido-cliente do banco de dados.
Exemplo de resposta:
```json
{
    "pedido_cliente": [
        {
            "ID": 1,
            "id_pedido": 2,
            "id_cliente": 4,
            "produto": "Sprite lata 350ml",
	    "quantidade":1
        }
    ]
    "erro": false
}

```

- **GET `http://localhost:2020/pedido-cliente/id/1`**

Retorna o pedido-cliente com o id especificado.

Exemplo de resposta:
```json
{
    "pedido_cliente": [
        {
            "ID": 1,
            "id_pedido": 2,
            "id_cliente": 4,
            "produto": "Sprite lata 350ml",
	    "quantidade":1
        }
    ]
    "erro": false
}
```

- **GET `http://localhost:2020/pedido-cliente/idpedido/`**

Retorna o pedido-cliente pelo idpedido especificado.

Exemplo de resposta:
```json
{
    "id_pedido": [
        {
            "Id": 2,
            "id_pedido": 2,
            "id_cliente": 4,
            "produto": "Coca-Cola lata 350ml",
	    "quantidade":1
        }
    ]
    "erro": false
}

```

- **GET `http://localhost:2020/pedido-cliente/idcliente/`**

Retorna o pedido-cliente pelo idcliente especificado.

Exemplo de resposta:
```json
{
    "id_cliente": [
        {
            "Id": 4,
            "id_pedido": 3,
            "id_cliente": 1,
            "produto": "Hamburguer Vegano",
	    "quantidade":1
        }
    ]
    "erro": false
}

```

- **GET `http://localhost:2020/pedido-cliente/produto/`**

Retorna o pedido-cliente pelo produto especificado.

Exemplo de resposta:
```json
{
    "produtos ": [
        {
            "Id": 5,
            "id_pedido": 3,
            "id_cliente": 1,
            "produto": "Vinho Dv Catena Malbec",
	    "quantidade":2
        }
    ]
    "erro": false
}

```

- **POST `http://localhost:2020/pedido-cliente/`**

Insere um pedido-cliente no banco de dados.

Exemplo de body de requisição:
```json
{
  "id_pedido": 2,
  "id_cliente": 4,
  "produto": "Sprite lata 350ml",
  "quantidade": 1
}

```

Exemplo de resposta:
```json
{
    "msg": "Pedido cliente inserido com sucesso",
         "pedido-cliente": {
	  "id_pedido": 2,
	  "id_cliente": 4,
	  "produto": "Sprite lata 350ml"
},
"erro": false
}

```

- **PUT `http://localhost:2020/pedido-cliente/id/02`**

Escolha o pedido-cliente pelo seu id para realizar a atualização do banco de dados.

Exemplo de body de requisição:
```json
{
    "id_pedido": 2,
    "id_cliente": 4,
    "produto": "Coca-Cola lata 350ml",
    "quantidade":1

}

```
Esquema de Resposta:
```json
{
   "msg": "Pedido cliente atualizado com sucesso",
   "pedido_cliente": {
    "id_pedido": 2,
    "id_cliente": 4,
    "produto": "Coca-Cola lata 350ml",
    "quantidade":1
        },

    "erro": false
}

```

- **DELETE `http://localhost:2020/pedido-cliente/id/1`**

Escolha o pedido-cliente pelo seu id para realizar a exclusão do banco de dados.

Esquema de Resposta:
```json
{
    "msg": "Pedido cliente 1 deletado com sucesso",
	   "erro": false
}

```

###Fornecedores
- **GET `http://localhost:2020/fornecedor`**

Retorna todos os fornecedores do banco de dados.
Exemplo de resposta:
```json
{
    "Fornecedores": [
        {
            "id": 1,
            "nome": "José ",
            "cnpj": "53.948.343/0001-49 ",
            "email": "josel79@gmail.com”,
            "cidade": "Rio de Janeiro ",
            "endereço": "4243 Desiree Gateway Suite 854 – Concord, VT/ 68035 ",
            "produto": " papel higiênico",
        }
}

```

- **GET `http://localhost:2020/fornecedor/id/2`**

Retorna o fornecedor com o id especificado.

Exemplo de resposta:
```json
{
    "Fornecedores": [
        {
            "id": 2,
            "nome": "Carlos ",
            "cnpj": "69.886.035/0001-76 ",
            "email": " carlos96@hotmail.com”,
            "cidade": " Nova iguaçu",
            "endereço": " 242 Pietro Crescent Suite 291 – Folsom, MA / 87559 ",
            "produto": "pão brioche ",
        }
}

```

- **POST `http://localhost:2020/fornecedor`**

Insere um fornecedor no banco de dados.

Exemplo de body de requisição:
```json
{
            "nome": " Janaina",
            "cnpj": "50.540.372/0001-89 ",
            "email": " thania3026@uorak.com”,
            "cidade": "Volta Redonda ",
            "endereço": "Rua Azazes 661 ",
            "produto": "molhos ",
        }
}

```

Exemplo de resposta:
```json
{
    "msg": "Fornecedor validado com sucesso",
    "Fornecedores":
{
            "nome": " Janaina",
            "cnpj": "50.540.372/0001-89 ",
            "email": " thania3026@uorak.com”,
            "cidade": "Volta Redonda ",
            "endereço": "Rua Azazes 661 ",
            "produto": "molhos ",
  },
    "erro": false
}

```

- **PUT `http://localhost:2020/fornecedor/id/`**

Escolha o fornecedor pelo seu id para realizar a atualização do banco de dados.

Exemplo de body de requisição:
```json
{
            "nome": " Leandro",
            "cnpj": "66.512.970/0001-84 ",
            "email": " leandro21@hotmail.com”,
            "cidade": "Campo grande ",
            "endereço": "129 Koch Extensions Suite 247 -  Overland Parck, OR / 17251 ",
            "produto": " bebidas ",
}

```
Esquema de Resposta:
```json
{
    "msg": "Fornecedor 4 validado com sucesso",
    "Fornecedor":
{
            "nome": " Leandro",
            "cnpj": "66.512.970/0001-84 ",
            "email": " leandro21@hotmail.com”,
            "cidade": "Campo grande ",
            "endereço": "129 Koch Extensions Suite 247 -  Overland Parck, OR / 17251 ",
            "produto": " bebidas ",
    },
    "erro": false
}

```

- **DELETE `http://localhost:2020/fornecedores/id/`**

Escolha o fornecedor pelo seu id para realizar a exclusão do banco de dados.

Esquema de Resposta:
```json
{
    "Msg": "Fornecedor valido com sucesso",
    "erro": false
}

```

### 🏞️ Veja a nossa api hospedada no [Heroku](https://www.heroku.com)

[link]()

***

## 👨‍💻👩‍💻 Equipe de desenvolvedores  🤓:

<table align='center'>
  <tr>
    <td align="center"><a href="https://github.com/Liliana1609%22%3E<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101890670?v=4" width="100px;" alt=""/><br /><sub><b>Liliana Adalgiza</b></sub></a><br /><a href="https://github.com/Liliana1609" title="Liliana">⭐</a></td>
    <td align="center"><a href="https://github.com/danbaziewicz%22%3E<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102393531?v=4" width="100px;" alt=""/><br /><sub><b>Danylo Baziewicz</b></sub></a><br /><a href="https://github.com/danbaziewicz" title="Danylo">⭐</a></td>
    <td align="center"><a href="https://github.com/Talyssonbs%22%3E<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/84388795?v=4" width="100px;" alt=""/><br /><sub><b>Talysson Barbosa</b></sub></a><br /><a href="https://github.com/Talyssonbs" title="Talysson">⭐</a></td>
    <td align="center"><a href="https://github.com/igor-diego%22%3E<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/93949826?v=4" width="100px;" alt=""/><br /><sub><b>Igor Reis</b></sub></a><br /><a href="https://github.com/igor-diego" title="Igor">⭐</a></td>
    <td align="center"><a href="https://github.com/CarratiPatrick%22%3E<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102706093?v=4" width="100px;" alt=""/><br /><sub><b>Patrick Ferrari</b></sub></a><br /><a href="https://github.com/CarratiPatrick" title="Patrick">⭐</a></td>
    <td align="center"><a href="https://github.com/samuelcambraia%22%3E<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/96244673?v=4" width="100px;" alt=""/><br /><sub><b>Samuel Cambraia</b></sub></a><br /><a href="https://github.com/samuelcambraia" title="Samuel">⭐</a></td>
  </tr>

***


