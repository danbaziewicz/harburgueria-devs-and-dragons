let id = 0
class ClientesModel {
  constructor(id, nomeCliente, cpfCliente, emailCliente, senhaCliente, telefoneCliente){
   this.id = id,
   this.nomeCliente = nomeCliente,
   this.cpfCliente = cpfCliente,
   this.emailCliente = emailCliente ? this.validaEmail(emailCliente) : undefined
   this.telefoneCliente = telefoneCliente,
   this.senhaCliente = senhaCliente ? this.validaSenha(senhaCliente) : undefined
    }
}

