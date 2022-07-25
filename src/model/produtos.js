//receber base de dados

export default class ProdutosModel{
    insereProduto = (idProduto, nomeProduto, valorProduto, fornecedorProduto, tipoProduto) => {
        //inserir produto na base de dados CREATE - POST
    }

    pegaProdutoById = (idProduto) => {
        //busca produto pela ID - READ - GET
    }

    pegaProdutoByNome = (nomeProduto) => {
        //busca produto pelo nome - READ - GET
    }

    pegaProdutoByFornecedor = (fornecedorProduto) => {
        //busca produto pelo fornecedor - READ - GET
    }

    pegaProdutoByTipo = (tipoProduto) => {
        //busca produto pelo tipo - READ - GET
    }

    deletaProduto = () => {
        //delta produto DELETE
    }

}