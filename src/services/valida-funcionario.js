export const validaNome = (nomeFuncionario)=>{
    if(nomeFuncionario){
        if(nomeFuncionario == ""){
            throw new Errow('O campo nome não pode estar vazio')
        }
    } else {
        throw new Error('Insira um nome')
    }
}

export const validaCpf = (cpf) => {
    if(cpf) {
        if(cpf.length === 11) {
            return cpf
        }
    }else {
        throw new Error('O CPF precisa conter 11 digitos')
    }
}

export const validaEmail = (email) => {
    if(email) {
        if(email.includes('@')) {
            return email
        }else {
            throw new Error('Email inválido')
        }
    }else {
        throw new Error('Insira um email')
    }
}

export const validaTelefone = (telefone) => {
    if(telefone) {
        if(telefone.length === 9) {
            return telefone
        }else {
            throw new Error('Telefone invalido')
        }
    }else {
        throw new Error('Insira um telefone')
    }
}

export const criaFuncionarios = (nome, cpf, email, telefone, cargo, dataDeAdmissao, salario)=>{
    validaNome(nome)
    validaEmail(email)
    validaCpf(cpf)
    validaTelefone(telefone)

    return{
        "nome": nome,
        "cpf": cpf,
        "email": email,
        "telefone": telefone,
        "cargo": cargo,
        "dataDeAdmissao": dataDeAdmissao,
        "salario": salario
    }
}
