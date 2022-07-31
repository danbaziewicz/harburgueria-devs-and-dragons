import db from '../database/db-sqlite.js'

const funcionariosDao = {
    mostraTodosFuncionarios : () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM FUNCIONARIOS', (erro, rows) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(rows)
                }
            })
        })
    },

    mostraUmFuncionario : (id) => {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM FUNCIONARIOS WHERE id = ?', id, (erro, dados) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(dados)
                }
            })
        })
    },
    
    insereFuncionarios : (funcionarios) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO FUNCIONARIOS (nome, cpf, email, telefone, cargo, dataDeAdmissao, salario)
            VALUES(?, ?, ?, ?, ?, ?, ?)`, 
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
                        resolve('Funcionario inserido com sucesso.')
                    }
                })
        })
    },
    
    atualizaFuncionarios : (id, novosDados) => {
        const query = (novosDados) => {
            let nome = ''
            let cpf = ''
            let email = ''
            let telefone = ''
            let cargo = ''
            let dataDeAdmissao = ''
            let salario = ''
            if(novosDados.nome) {
                nome = `nome = ?`
            }
            if(novosDados.cpf) {
                cpf = `cpf = ?`
            }
            if(novosDados.email) {
                email = `email = ?`
            }
            if(novosDados.telefone) {
                telefone = `telefone = ?`
            }
            if(novosDados.cargo) {
                cargo = `cargo = ?`
            }
            if(novosDados.dataDeAdmissao) {
                dataDeAdmissao = `dataDeAdmissao = ?`
            }
            if(novosDados.salario) {
                salario = `salario = ?`
            }

            return `UPDATE FUNCIONARIOS SET ${nome} ${cpf} ${email} ${telefone} ${cargo} ${dataDeAdmissao} ${salario}
            WHERE id = ?`
        }

        return new Promise((resolve, reject) => {
            db.run(query(novosDados), ...Object.values(novosDados),id,
            (erro) => {
                if(erro) {
                    reject(erro)
                }else {
                    resolve(`Usuario com id ${id} atualizado com sucesso`)
                }
            })
        })
    }, 
    
    
    deletaFuncionarios : (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM FUNCIONARIOS WHERE id = ?`, id, (erro) => {
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