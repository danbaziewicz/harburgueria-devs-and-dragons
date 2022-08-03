export const validaCpf = (cpfFornecedor)=>{
    if(cpfFornecedor) {
        if(cpfFornecedor.length === 11) {
            return cpfFornecedor
        }
    }else {
        throw new Error("O CPF precisa conter 11 dígitos")
    }
}

export const validaCnpj = (cnpjFornecedor)=>{
    if(cnpjFornecedor) {
        if(cnpjFornecedor.length === 14) {
            return tcnpjFornecedor
        }else {
            throw new Error("CNPJ inválido")
        }
    }else {
        throw new Error("O CNPJ precisa conter 14 dígitos")
    }
}

export const validaEmail = (emailFornecedor)=>{
    if(emailFornecedor){
        if(!emailFornecedor.includes("@")){
            throw new Error("Email inválido, tente novamente")
        }
    }else{
        throw new Error("Insira um email")
    }

}

export const criaClientes = (cpf, cnpj, email)=>{
    validaCpf(cpf)
    validaCnpj(cnpj)
    validaEmail(email)
    

    return{

        "nome_cliente" : nome,
        "email_cliente" : email,
        "cpf_cliente" : cpf,
        "cnpj_cliente": telefone,
        
    }
}