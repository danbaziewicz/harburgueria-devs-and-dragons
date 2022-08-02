import daoClientes from "../DAO/clientes-DAO.js"

const clientesModel = {
    insereCliente : async (cliente) => {
        return await daoClientes.insereCliente(cliente)
    },

    pegaCliente : async () => {
        return await daoClientes.pegaTodosClientes()
    },

    pegaClienteId : async (idCliente) => {
        return await daoClientes.pegaClienteId(idCliente)
    },

    pegaClienteNome : async (nomeCliente) => {
        return await daoClientes.pegaClienteNome(nomeCliente)
    },

    pegaClienteEmail : async (clienteEmail) => {
        return await daoClientes.pegaClienteEmail(clienteEmail)
    },

    pegaClienteCpf : async (clienteCpf) => {
      return await daoClientes.pegaClienteCpf(clienteCpf)
    },

    pegaClienteTelefone : async (clienteTelefone) => {
      return await daoClientes.pegaClienteTelefone(clienteTelefone)
    },

    pegaClienteSenha : async (clienteSenha) => {
        return await daoClientes.pegaClienteSenha(clienteSenha)
    },

    deletaCliente : async (idCliente) => {
        return await daoClientes.deletaCliente(idCliente)
    },

    atualizaCliente : async (idCliente, newDados) => {
        const ClientePresente = await clientesModel.pegaClienteId(idCliente)
        if(ClientePresente){
            const clienteAtualizado = {
                "id_cliente" : newDados.id_cliente || ClientePresente.id_cliente,
                "nome_cliente" : newDados.nome_cliente || ClientePresente.nome_cliente,
                "email_cliente" : newDados.email_cliente || ClientePresente.email_cliente,
                "cpf_cliente" : newDados.cpf_cliente || ClientePresente.cpf_cliente,
                "telefone_cliente" : newDados.telefone_cliente || ClientePresente.telefone_cliente,
                "senha_cliente" : newDados.senha_cliente || ClientePresente.senha_cliente
            }
            return await daoClientes.atualizaCliente(idCliente, clienteAtualizado)
        } else {
            throw new Error("Cliente não encontrado!!")
        }
    }
}
export default clientesModel
