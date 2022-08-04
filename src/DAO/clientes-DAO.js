import db from "../database/conect.js"


const daoClientes = {

    pegaTodosClientes : () =>{
        const PEGA_CLIENTES = 'SELECT * FROM CLIENTES'
        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTES, (error, row)=>{
                if (error){
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaClienteId : (idCliente) => {
        const PEGA_CLIENTE_ID = 'SELECT * FROM CLIENTES WHERE id_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.get(PEGA_CLIENTE_ID, idCliente, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClienteNome : (nomeCliente) => {
        const PEGA_CLIENTE_NOME = 'SELECT * FROM CLIENTES WHERE nome_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTE_NOME, nomeCliente, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClienteEmail : (clienteEmail) => {
        const PEGA_CLIENTE_EMAIL = 'SELECT * FROM CLIENTES WHERE email_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTE_EMAIL, clienteEmail, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClienteCpf : (clienteCpf) => {
        const PEGA_CLIENTE_CPF = 'SELECT * FROM CLIENTES WHERE cpf_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTE_CPF, clienteCpf, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaClienteTelefone : (clienteTelefone) => {
        const PEGA_CLIENTE_TELEFONE = 'SELECT * FROM CLIENTES WHERE telefone_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTE_TELEFONE, clienteTelefone, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
           })
        })
    },

    pegaClienteSenha : (clienteSenha) => {
        const PEGA_CLIENTE_SENHA = 'SELECT * FROM CLIENTES WHERE senha_cliente = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTE_SENHA, clienteSenha, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    insereCliente : (cliente)=>{
        const INSERE_CLIENTE = `
        INSERT INTO CLIENTES (id_cliente, nome_cliente, email_cliente, cpf_cliente, telefone_cliente, senha_cliente)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_CLIENTE, cliente.id_cliente, cliente.nome_cliente, cliente.email_cliente, cliente.cpf_cliente, cliente.telefone_cliente, cliente.senha_cliente,
                (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve(cliente)
                    }
                }
            )
        })
    },

    deletaCliente : (idCliente)=>{
        const DELETA_CLIENTE = `DELETE FROM CLIENTES WHERE id_cliente = ?`

        return new Promise((resolve, reject)=>{
            db.get(DELETA_CLIENTE, idCliente, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (`Produto ${idCliente} deletado com sucesso`)
                }
            })
        })
    },

    atualizaCliente : (id_cliente, newDados)=>{
        const ATUALIZA_CLIENTE = `UPDATE CLIENTES
        SET nome_cliente = ?,
        email_cliente = ?,
        cpf_cliente = ?,
        telefone_cliente = ?,
        senha_cliente = ?
        WHERE id_cliente = ?`

        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_CLIENTE,
              newDados.nome_cliente,
              newDados.email_cliente,
              newDados.cpf_cliente,
              newDados.telefone_cliente, newDados.senha_cliente, id_cliente,
                (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve (newDados)
                    }
                })
        })
    }
}

export default daoClientes
