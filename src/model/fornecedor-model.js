import daoFornecedores from "../DAO/fornecedor-DAO.js"

const fornecedorModel = {
    insereFornecedor : async (fornecedores) => {
        return await daoFornecedores.insereFornecedor(fornecedores)
    },

    pegafornecedores : async () => {
        return await daoFornecedores.pegaTodosFornecedores()
    },

    pegaFornecedorById : async (idFornecedor) => {
        return await daoFornecedores.pegaFornecedorById(idFornecedor)
    },

    pegaFornecedorByNome : async (nomeFornecedor) => {
        return await daoFornecedores.pegaFornecedorByNome(nomeFornecedor)
    },

    pegaFornecedorByCnpj : async (cnpjFornecedor) => {
        return await daoFornecedores.pegaFornecedorByCnpj(cnpjFornecedor)
    },

    
    deletaFornecedor : async (idFornecedor) => {
        return await daoFornecedores.deletaFornecedor(idFornecedor)
    },

    atualizaFornecedor : async (idFornecedor, novosDados) => {
        const fornecedorAtual = await fornecedorModel.pegaFornecedorById(idFornecedor)
        if(fornecedorAtual){
            const fornecedorAtualizado = {
                "nome_fornecedor" : novosDados.nome_fornecedor || fornecedorAtual.nome_fornecedor,
                "cnpj_fornecedor" : novosDados.cnpj_fornecedor || fornecedorAtual.cnpj_fornecedor,
                "email_fornecedor" : novosDados.email_fornecedor || fornecedorAtual.email_fornecedor,
                "cidade_fornecedor" : novosDados.cidade_fornecedor || fornecedorAtual.cidade_fornecedor,
                "endereço_fornecedor" : novosDados.endereço_fornecedor || fornecedorAtual.endereço_fornecedor,
                "produto_fornecedor" : novosDados.produto_fornecedor || fornecedorAtual.produtos_fornecedor 
            }
            return await daoFornecedores.atualizaFornecedor(idFornecedor, fornecedorAtualizado)
        } else {
            throw new Error("Fornecedor não cadastrado")
        }
    }
}

export default fornecedorModel