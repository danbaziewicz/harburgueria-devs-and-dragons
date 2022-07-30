const validaCpf = (cpf) => {
    if(cpf) {
        if(cpf.length === 11) {
            return cpf
        }
    }else {
        throw new Error('O CPF precisa conter 11 digitos')
    }
}

const validaEmail = (email) => {
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

const validaTelefone = (telefone) => {
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


export default {validaCpf, validaEmail, validaTelefone}