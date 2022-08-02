export const checaData = (data) => {
    if (data) {
        if (data == "") {
            throw new Errow('Data vazia')
        }
    } else {
        throw new Error('Insira um pedido')
    }
}

export const checaHora = (hora) => {
    if (hora) {
        if (hora == "") {
            throw new Errow('Hora não declarada')
        }
    } else {
        throw new Error('Insira uma data para o pedido')
    }
}

export const checaValor = (valor) => {
    if (valor) {
        if (valor == "") {
            throw new Errow('Necessário declarar um valor')
        }
    } else {
        throw new Error('Insira um valor para o pedido')
    }
}

export const checaForma = (forma) => {
    if (forma) {
        if (forma == "") {
            throw new Errow('É necessaria uma forma de pagamento')
        }
    } else {
        throw new Error('Insira uma forma de pagamento')
    }
}

export const criaPedido = (data_do_pedido, hora_do_pedido, valor_final, forma_de_pagamento) => {
    checaData(data_do_pedido)
    checaHora(hora_do_pedido)
    checaValor(valor_final)
    checaForma(forma_de_pagamento)

    return {
        "data_do_pedido": data_do_pedido,
        "hora_do_pedido": hora_do_pedido,
        "valor_final": valor_final,
        "forma_de_pagamento": forma_de_pagamento
    }
}