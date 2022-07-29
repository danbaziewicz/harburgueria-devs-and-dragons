let id = 0

export const validaSenha = (senhaCliente)=>{
    if(senhaCliente.length >= 8){
        return senhaCliente
    }else{
        throw new Error("Insira uma senha acima de 8 caracteres!")
    }

}

export const validaEmail = (emailCliente)=>{
  if(emailCliente){
      if(!emailCliente.includes("@")){
          throw new Error("Email inválido, tente novamente")
      }
  }else{
      throw new Error("Insira um email")
  }

}

export const criaUsuario = (nomeCliente, emailCliente, senhaCliente)=>{
  validaEmail(emailCliente)
  validaSenha(senhaCliente)

  return{
      "id": id++,
      "nome" : nomeCliente,
      "email" : emailCliente,
      "senha" : senhaCliente
  }
}
