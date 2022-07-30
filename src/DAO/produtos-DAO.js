import db from "../database/conect.js"

const daoProdutos = {
    
    pegaTodosProdutos : () =>{
        const PEGA_PRODUTOS = 'SELECT * FROM PRODUTOS'
        return new Promise((resolve, reject)=>{
            db.all(PEGA_PRODUTOS, (error, row)=>{
                if (error){
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pegaProdutoById : (produtoId) => {
        const PEGA_PRODUTO_ID = 'SELECT * FROM PRODUTOS WHERE id_produto = ?'

        return new Promise((resolve, reject)=>{
            db.get(PEGA_PRODUTO_ID, produtoId, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaProdutoByNome : (nomeProduto) => {
        const PEGA_PRODUTO_NOME = 'SELECT * FROM PRODUTOS WHERE nome_produto = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_PRODUTO_NOME, nomeProduto, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaProdutoByFornecedor : (fornecedorProduto) => {
        const PEGA_PRODUTO_FORNECEDOR = 'SELECT * FROM PRODUTOS WHERE fornecedor_produto = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_PRODUTO_FORNECEDOR, fornecedorProduto, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    pegaProdutoByTipo : (tipoProduto) => {
        const PEGA_PRODUTO_TIPO = 'SELECT * FROM PRODUTOS WHERE tipo_produto = ?'

        return new Promise((resolve, reject)=>{
            db.all(PEGA_PRODUTO_TIPO, tipoProduto, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    insereProduto : (produto)=>{
        const INSERE_PRODUTO = `
        INSERT INTO PRODUTOS (nome_produto, valor_produto, qtd_produto, fornecedor_produto, tipo_produto)
        VALUES (?, ?, ?, ?, ?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_PRODUTO, produto.nome_produto, produto.valor_produto, produto.qtd_produto, produto.fornecedor_produto, produto.tipo_produto,
                (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve(produto)
                    }
                }
            )
        })
    },
    
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    //verificar problema de execução.
    deletaProduto : (id)=>{
        const DELETA_PRODUTO = `DELETE FROM PRODUTOS WHERE id_produto = ?`

        return new Promise((resolve, reject)=>{
            db.get(DELETA_PRODUTO, id, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (`Produto ${id} deletado com sucesso`)
                }
            })
        })
    },

    atualizaProduto : (id_produto, novoProduto)=>{
        const ATUALIZA_PRODUTO = `UPDATE PRODUTOS SET nome_produto = ?, valor_produto = ?, qtd_produto = ?, fornecedor_produto = ?, tipo_produto = ?`
         
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_PRODUTO, novoProduto.nome_produto, novoProduto.valor_produto, novoProduto.qtd_produto, novoProduto.fornecedor_produto, novoProduto.tipo_produto, id_produto,
                (error)=>{
                    if(error){
                      reject(error)
                    } else {
                        resolve (novoProduto)
                    }
                })
        })
    }
}

export default daoProdutos