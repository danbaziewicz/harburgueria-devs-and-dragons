export default class ClientesModel{

  // Inserindo o Cliente no banco de dados
  insereClientes = (idCliente, nomeCliente, emailCliente, senhaCliente, telefoneCliente)=>{
      bd.cliente.push(idCliente)
      bd.nome.push(nomeCliente)
      bd.email.push(emailCliente)
      bd.senha.push(senhaCliente)
      bd.telefone.push(telefoneCliente)
  }

  // Pegando todos os Clientes do banco de dados
  pegaCliente = ()=>{
      return bd.cliente
  }
  // Buscar um Cliente do banco de dados
  pegaUmCliente = (emailCliente)=>{

      return bd.cliente.filter(cliente=>cliente.emailCliente===emailCliente)
  }
// Deleta o Cliente do banco de dados
  deletaCliente = (emailCliente)=>{
      const newDB = bd.cliente.filter(cliente=>cliente.emailCliente!==emailCliente)
      bd.cliente = newDB
  }

  atualizaCliente = (emailCliente, inserindoDados)=>{
    const newDb = bd.cliente.map(cliente=>{
        if(cliente.emailCliente === emailCliente){
            return {
                "id": cliente.id,
                "nome" : inserindoDados.nomeCliente || cliente.nomeCliente,
                "cpf" :  inserindoDados.cpfCliente  || cliente.cpfCliente,
                "telefone" : inserindoDados.telefoneCliente || cliente.telefoneCliente,
                "email" : inserindoDados.emailCliente || cliente.emailCliente,
                "senha" : inserindoDados.senha || cliente.senha,
            }
        }
        return cliente
    })

    bd.cliente = newDb

}

}
