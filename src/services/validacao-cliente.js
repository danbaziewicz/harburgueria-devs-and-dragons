export const validaSenha = (senhaCliente)=>{
    if(senhaCliente){
        if(senhaCliente.length >= 8){
            return senhaCliente}else{
            throw new Error("A senha precisa ter 8 ou mais caracteres")
        }
    }else{
        throw new Error("Insira uma senha com 8 ou mais caracteres")
    }
}

export const validaCpf = (cpfCliente)=>{
    if(cpfCliente) {
        if(cpfCliente.length === 11) {
            return cpfCliente
        }
    }else {
        throw new Error("O CPF precisa conter 11 dígitos")
    }
}

export const validaTelefone = (telefoneCliente)=>{
    if(telefoneCliente) {
        if(telefoneCliente.length === 11) {
            return telefoneCliente
        }else {
            throw new Error("Telefone inválido")
        }
    }else {
        throw new Error("Insira um telefone com o DDD, conforme modelo 99999999999")
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

export const criaClientes = (nome, email, cpf, telefone, senha)=>{
    validaEmail(email)
    validaCpf(cpf)
    validaTelefone(telefone)
    validaSenha(senha)

    return{

        "nome_cliente" : nome,
        "email_cliente" : email,
        "cpf_cliente" : cpf,
        "telefone_cliente": telefone,
        "senha_cliente" : senha
    }
}
