export const validaNome = (nomeFornecedor)=>{
    if(nomeFornecedor){
        if(nomeFornecedor == ""){
            throw new Errow('O  nome não pode estar vazio')
        }
    } else {
        throw new Error('Insira um nome')
    }
}

export const validaCnpj = (cnpjFornecedor)=>{
    if(cnpjFornecedor) {
        if(cnpjFornecedor.length === 18) {
            return cnpjFornecedor
        }else {
            throw new Error("CNPJ inválido")
        }
    }else {
        throw new Error("O CNPJ precisa conter 18 dígitos contendo pontos, barra e traço, conforme o exemplo: 00.000.000/0000-00")
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
export const validaEndereco = (enderecoFornecedor)=>{
    if(enderecoFornecedor){
        if(enderecoFornecedor === ""){
            throw new Errow('O endereço não pode estar vazio')
        }
    } else {
        throw new Error('Insira um endereço válido')
    }
    console.log(enderecoFornecedor)
}
export const validaProduto = (produtoFornecedor)=>{
    if(produtoFornecedor){
        if(produtoFornecedor == ""){
            throw new Errow('O tipo do produto não pode estar vazio')
        }
    } else {
        throw new Error('Insira um tipo para o produto')
    }
}

export const criaFornecedor = ( nome, cnpj, email, cidade, endereco, produto)=>{
    validaNome(nome)
    validaCnpj(cnpj)
    validaEmail(email)
    validaCidade(cidade)
    validaEndereco(endereco)
    validaProduto(produto)


    return{

        "nome_fornecedor" : nome,
        "email_fornecedor" : email,
        "cnpj_fornecedor": cnpj,
        "cidade_fornecedor": cidade,
        "endereço_fornecedor": endereco,
        "produto_fornecedor": produto

    }
}
