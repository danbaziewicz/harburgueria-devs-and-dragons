//IMPORTAR DB
const db = [];
const dao = {
    
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
            db.get(PEGA_PRODUTO_NOME, nomeProduto, (error, row)=>{
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
            db.get(PEGA_PRODUTO_FORNECEDOR, fornecedorProduto, (error, row)=>{
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
            db.get(PEGA_PRODUTO_TIPO, tipoProduto, (error, row)=>{
                if(error){
                    reject(error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    



}