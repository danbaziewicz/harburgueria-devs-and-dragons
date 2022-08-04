export const validaIdPedido = (idPedido)=>{
    if(idPedido){
        if(idPedido == ""){
            throw new Errow('O  id_pedido não pode estar vazio')
        }
    } else {
        throw new Error('Insira id_pedido')
    }
}

export const validaIdCliente = (idCliente)=>{
    if(idCliente){
        if(idCliente == ""){
            throw new Errow('O id_cliente não pode estar vazio')
        }
    } else {
        throw new Error('Insira um id_cliente')
    }
}

export const validaProduto = (produto)=>{
    if(produto){
        if(produto == ""){
            throw new Errow('O produto não pode estar vazio')
        }
    } else {
        throw new Error('Insira um produto')
    }
}

export const criaPedidoCliente = (idPedido, idCliente, produto) =>{
    validaIdPedido(idPedido)
    validaIdCliente(idCliente)
    validaProduto(produto)
    
        
    return {
        "id_pedido": idPedido,
        "id_cliente": idCliente,
        "produto": produto
    }
}