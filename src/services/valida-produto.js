export const validaNome = (nome)=>{
    if(nome){
        if(nome == ""){
            throw new Errow('O nome do produto não pode ser vazio')
        }
    } else {
        throw new Error('Insira um produto')
    }
}

export const validaPreco = (preco)=>{
    if(preco){
        if(preco == ""){
            throw new Errow('O valor do produto não pode ser vazio')
        }
    } else {
        throw new Error('Insira um valor para o produto')
    }
}

export const validaQtd = (qtd)=>{
    if(qtd){
        if(qtd == ""){
            throw new Errow('A quantidade do produto não pode ser vazia')
        }
    } else {
        throw new Error('Insira uma quantidade para o produto')
    }
}

export const validaFornecedor = (fornecedor)=>{
    if(fornecedor){
        if(fornecedor == ""){
            throw new Errow('O fornecedor do produto não pode ser vazio')
        }
    } else {
        throw new Error('Insira um fornecedor para o produto')
    }
}

export const validaTipo = (tipo)=>{
    if(tipo){
        if(tipo == ""){
            throw new Errow('O tipo do produto não pode ser vazio')
        }
    } else {
        throw new Error('Insira um tipo para o produto')
    }
}

export const criaProduto = (nome_produto, valor_produto, qtd_produto, fornecedor_produto, tipo_produto) =>{
    validaNome(nome_produto)
    validaPreco(valor_produto)
    validaQtd(qtd_produto)
    validaFornecedor(fornecedor_produto)
    validaTipo(tipo_produto)
    
    return {
        "nome_produto": nome_produto,
        "valor_produto": valor_produto,
        "qtd_produto": qtd_produto,
        "fornecedor_produto": fornecedor_produto,
        "tipo_produto": tipo_produto
    }
}