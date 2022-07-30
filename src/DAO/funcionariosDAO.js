import db from '../database/db-sqlite.js'

const funcionariosDao = {
    mostraTodosFuncionarios : () => {
        const mostraFuncionarios = 'SELECT * FROM FUNCIONARIOS'
        return new Promise((resolve, reject) => {
            db.all(mostraFuncionarios, (error, rows) => {
                if(error) {
                    reject(error)
                }else {
                    resolve(rows)
                }
            })
        })
    },

    mostraUmFuncionario : (id) => {
        const mostraFuncionarioId = 'SELECT * FROM FUNCIONARIOS WHERE id = ?'
        return new Promise((resolve, reject) => {
            db.get(mostraFuncionarioId, (error, row) => {
                if(error) {
                    reject(error)
                }else {
                    resolve(row)
                }
            })
        })
    },
    
    insereFuncionarios : (funcionarios) => {
        const insereFuncionario = `INSERT INTO FUNCIONARIOS (nome, cpf, email, telefone, cargo, dataDeAdmissao, salario)
        VALUES(?, ?, ?, ?, ?, ?, ?)`
        return new Promise((resolve, reject) => {
            db.run(insereFuncionario, funcionarios.nome,
                funcionarios.cpf,
                funcionarios.email,
                funcionarios.telefone,
                funcionarios.cargo,
                funcionarios.dataDeAdmissao,
                funcionarios.salario,
                
                (error) => {
                if(error) {
                        reject(error)
                    }else {
                        resolve(funcionarios)
                    }
                })
        })
    },
    
    atualizaFuncionarios : (id, atualizaFuncionarios) => {
        const atualizaFuncionario = `UPDATE FUNCIONARIOS SET nome = ?, cpf = ?, email = ?, telefone = ?, cargo = ?, dataDeAdmissao = ?, salario = ?`
        return new Promise((resolve, reject) => {
            db.run(atualizaFuncionario, atualizaFuncionarios.nome,
                atualizaFuncionarios.cpf,
                atualizaFuncionarios.telefone,
                atualizaFuncionarios.cargo,
                atualizaFuncionarios.dataDeAdmissao,
                atualizaFuncionarios.salario,
                (error) => {
                    if(error) {
                        reject(error)
                    }else {
                        resolve(atualizaFuncionarios)
                    }
                })
        })
    },
    
    
    deletaFuncionarios : (id) => {
        const deletaFuncionarios = `DELETE FROM FUNCIONARIOS WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.run(deletaFuncionarios, id, (error) => {
                if(error) {
                    reject(error)
                }else {
                    resolve(`Funcionario ${id} deletado com sucesso`)
                }
            })
        })
    }
    
}

export default funcionariosDao