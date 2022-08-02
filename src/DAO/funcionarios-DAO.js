import db from '../database/db-sqlite.js'

const funcionariosDao = {

    mostraTodosFuncionarios : () => {
        const MOSTRA_FUNCIONARIOS = 'SELECT * FROM FUNCIONARIOS'
        return new Promise((resolve, reject) => {
            db.all(MOSTRA_FUNCIONARIOS, (erro, rows) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(rows)
                }
            })
        })
    },

    mostraUmFuncionario : (id) => {
        const MOSTRA_CLIENTE_ID = 'SELECT * FROM FUNCIONARIOS WHERE id = ?'
        return new Promise((resolve, reject) => {
            db.get(MOSTRA_CLIENTE_ID, id, (erro, dados) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(dados)
                }
            })
        })
    },
    
    insereFuncionarios : (funcionarios) => {
        const INSERE_FUNCIONARIOS = `INSERT INTO FUNCIONARIOS (nome, cpf, email, telefone, cargo, dataDeAdmissao, salario)
        VALUES(?, ?, ?, ?, ?, ?, ?)`
        return new Promise((resolve, reject) => {
            db.run(INSERE_FUNCIONARIOS, 
                funcionarios.nome,
                funcionarios.cpf,
                funcionarios.email,
                funcionarios.telefone,
                funcionarios.cargo,
                funcionarios.dataDeAdmissao,
                funcionarios.salario,
                
                (erro) => {
                if(erro) {
                        reject(erro)
                    }else {
                        resolve(funcionarios)
                    }
                })
        })
    },
    
    atualizaFuncionarios : (id, novosDados) => {
        const ATUALIZA_FUNCIONARIO = `UPDATE FUNCIONARIOS SET
        nome = ?,
        cpf = ?,
        email = ?,
        telefone = ?,
        cargo = ?,
        dataDeAdmissao = ?,
        salario = ?
        WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_FUNCIONARIO, novosDados.nome, novosDados.cpf, novosDados.email, novosDados.telefone, novosDados.cargo, novosDados.dataDeAdmissao, novosDados.salario, id,
            (erro) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(novosDados)
                }
            })
        })
    }, 
    
    
    deletaFuncionarios : (id) => {
        const DELETA_FUNCIONARIO = `DELETE FROM FUNCIONARIOS WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.run(DELETA_FUNCIONARIO, id, (erro) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(`Funcionario ${id} deletado com sucesso`)
                }
            })
        })
    }
    
}

export default funcionariosDao