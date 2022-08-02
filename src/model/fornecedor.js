import daofornecedores from "../DAO/fornecedores-DAO.js"

const fornecedorModel = {
    insereFornecedor : async (fornecedor) => {
        return await daoFornecedores.insereFornecedor()
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

    
    deletaFornecedor : async (idFornecedor) => {
        return await daoFornecedor.deletaFornecedor(idFornecedor)
    },

    atualizaFornecedor : async (idFornecedor, novosDados) => {
        const fornecedorAtual = await produtosModel.pegaFornecedorById(idFornecedor)
        if(fornecedorAtual){
            const FornecedorAtualizado = {
                "nome_fornecedor" : novosDados.nome_fornecedor || fornecedoresAtual.nome_fornecedor,
                "cnpj_fornecedor" : novosDados.cnpj_fornecedor || fornecedoresAtual.cnpj_fornecedor,
                "email_fornecedor" : novosDados.email_fornecedor || fornecedoresAtual.email_fornecedor,
                "cidade_fornecedor" : novosDados.cidade_fornecedor || fornecedoresAtual.cidade_fornecedor,
                "endereço_fornecedor" : novosDados.endereço_fornecedor || fornecedoresAtual.endereço_fornecedor,
                "produto_fornecedor" : novosDados.produto_fornecedor || fornecedoresAtual.produtos_fornecedor 
            }
            return await daoFornecedores.atualizaFornecedor(idFornecedor, fornecedorAtualizado)
        } else {
            throw new Error("Fornecedor não cadastrado")
        }
    }
}

export default fornecedoresModel