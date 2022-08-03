export const validaNome = (nomeFornecedor)=>{
    if(nomeFornecedor){
        if(nomeFornecedor == ""){
            throw new Errow('Nome não existe')
        }
    } else {
        throw new Error('Insira um nome valido')
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
export const validaCidade = (cidadeFornecedor)=>{
    if(cidadeFornecedor){
        if(cidadeFornecedor == ""){
            throw new Errow('Cidade não localizada')
        }
    } else {
        throw new Error('Insira cidade')
    }
}
export const validaEndereço = (endereçoFornecedor)=>{
    if(endereçoFornecedor){
        if(endereçoFornecedor == ""){
            throw new Errow('Endereço não encontrado')
        }
    } else {
        throw new Error('Insira um endereço')
    }
}
export const validaProduto = (produtoFornecedor)=>{
    if(produtoFornecedor){
        if(produtoFornecedor == ""){
            throw new Errow('O tipo do produto não pode ser vazio')
        }
    } else {
        throw new Error('Insira um tipo para o produto')
    }
}

export const criaFornecedor = ( cnpj, email)=>{
    validaCnpj(cnpj)
    validaEmail(email)
    

    return{

        "nome_fornecedor" : nome,
        "email_fornecedor" : email,
        "cnpj_fornecedor": cnpj,
        "cidade_fornecedor": cidade,
        "endereço_fornecedor": endereço,
        "produto_fornecedor": produto
        
    }
}