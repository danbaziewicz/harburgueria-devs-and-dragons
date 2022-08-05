import db from "../database/conect.js"

const daoFornecedores = {

    pegaTodosFornecedores : () =>{
        const PEGA_FORNECEDORES = 'SELECT * FROM FORNECEDORES'
        return new Promise((resolve, reject)=>{
            db.all(PEGA_FORNECEDORES, (error, row)=>{
                if (error){
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaFornecedorById : (fornecedorId) => {
        const PEGA_FORNECEDOR_ID = 'SELECT * FROM FORNECEDORES WHERE id_fornecedor = ?'

        return new Promise((resolve, reject)=>{
            db.get(PEGA_FORNECEDOR_ID, fornecedorId, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaFornecedorByNome : (nomeFornecedor) => {
        const PEGA_FORNECEDOR_NOME = 'SELECT * FROM FORNECEDORES WHERE nome_fornecedor = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_FORNECEDOR_NOME, nomeFornecedor, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaFornecedorByCnpj : (cnpjFornecedor) => {
        const PEGA_FORNECEDOR_CNPJ = 'SELECT * FROM FORNECEDORES WHERE cnpj_fornecedor = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_FORNECEDOR_CNPJ, cnpjFornecedor, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaFornecedorByProduto : (produtoFornecedor) => {
        const PEGA_FORNECEDOR_PRODUTO = 'SELECT * FROM FORNECEDORES WHERE produto_fornecedor = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_FORNECEDOR_PRODUTO, produtoFornecedor, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    insereFornecedor : (fornecedor)=>{
        const INSERE_FORNECEDOR = `
        INSERT INTO FORNECEDORES (nome_fornecedor, cnpj_fornecedor, email_fornecedor, cidade_fornecedor, endereco_fornecedor, produto_fornecedor)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_FORNECEDOR, fornecedor.nome_fornecedor, fornecedor.cnpj_fornecedor, fornecedor.email_fornecedor, fornecedor.cidade_fornecedor, fornecedor.endereco_fornecedor, fornecedor.produto_fornecedor,
                (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve(fornecedor)
                    }
                }
            )
        })
    },

    deletaFornecedor : (id)=>{
        const DELETA_FORNECEDOR = `DELETE FROM FORNECEDORES WHERE id_fornecedor = ?`

        return new Promise((resolve, reject)=>{
            db.get(DELETA_FORNECEDOR, id, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (`Fornecedor ${id} deletado com sucesso`)
                }
            })
        })
    },

    atualizaFornecedor : (id_fornecedor, novoFornecedor)=>{
        const ATUALIZA_FORNECEDOR = `UPDATE FORNECEDOR
        SET nome_fornecedor = ?,
        cnpj_fornecedor = ?,
        email_fornecedor = ?,
        cidade_fornecedor = ?,
        endereco_fornecedor = ?,
        produto_fornecedor = ?
        WHERE id_fornecedor= ?`

        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_FORNECEDOR, novoFornecedor.nome_fornecedor, novoFornecedor.cnpj_fornecedor, novoFornecedor.email_fornecedor, novoFornecedor.cidade_fornecedor, novoFornecedor.endereco_fornecedor, novoFornecedor.produto_fornecdor, id_fornecedor,
                (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve (novoFornecedor)
                    }
                })
        })
    }
}

export default daoFornecedores
