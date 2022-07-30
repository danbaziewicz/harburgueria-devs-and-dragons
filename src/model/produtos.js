import daoProdutos from "../DAO/produtos-DAO.js"

const produtosModel = {
    insereProduto : async (produto) => {
        //inserir produto na base de dados CREATE - POST
        return await daoProdutos.insereProduto(produto)
    },

    pegaProdutos : async () => {
        return await daoProdutos.pegaTodosProdutos()
    },

    pegaProdutoById : async (idProduto) => {
        return await daoProdutos.pegaProdutoById(idProduto)
    },

    pegaProdutoByNome : async (nomeProduto) => {
        return await daoProdutos.pegaProdutoByNome(nomeProduto)
    },

    pegaProdutoByFornecedor : async (fornecedorProduto) => {
        return await daoProdutos.pegaProdutoByFornecedor(fornecedorProduto)
    },

    pegaProdutoByTipo : async (tipoProduto) => {
        return await daoProdutos.pegaProdutoByTipo(tipoProduto)
    },

    deletaProduto : async (idProduto) => {
        return await daoProdutos.deletaProduto(idProduto)
    },

    atualizaProduto : async (idProduto, novosDados) => {
        const produtoAtual = await produtosModel.pegaProdutoById(idProduto)
        if(produtoAtual){
            const produtoAtualizado = {
                "nome_produto" : novosDados.nome_produto || produtoAtual.nome_produto,
                "valor_produto" : novosDados.valor_produto || produtoAtual.valor_produto,
                "qtd_produto" : novosDados.qtd_produto || produtoAtual.qtd_produto,
                "fornecedor_produto" : novosDados.fornecedor_produto || produtoAtual.fornecedor_produto,
                "tipo_produto" : novosDados.tipo_produto || produtoAtual.tipo_produto
            }
            return await daoProdutos.atualizaProduto(idProduto, produtoAtualizado)
        } else {
            throw new Error("Produto não encontrado")
        }
    }
}

export default produtosModel