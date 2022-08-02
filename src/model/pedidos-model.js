import daoPedidos from "../DAO/pedidosDAO.js"

const Pedidos = {
    inserePedido: async (pedido) => {

        return await daoPedidos.inserePedido(pedido)
    },

    pegaPedidos: async () => {
        return await daoPedidos.pegaPedidos()
    },

    pedidoPeloId: async (pedidoId) => {
        return await daoPedidos.pedidoPeloId(pedidoId)
    },

    pedidoPelaData: async (dataPedido) => {
        return await daoPedidos.pedidoPelaData(dataPedido)
    },

    pedidoPelaHora: async (horaPedido) => {
        return await daoPedidos.pedidoPelaHora(horaPedido)
    },

    pedidoPeloValor: async (valorPedido) => {
        return await daoPedidos.pedidoPeloValor(valorPedido)
    },
    pedidoPelaFormaPagamento: async (formaPagamento) => {
        return await daoPedidos.pedidoPelaFormaPagamento(formaPagamento)
    },

    deletarPedido: async (id) => {
        return await daoPedidos.deletarPedido(id)
    },

    atualizaPedido: async (id_pedido, novoPedido) => {
        const pedidoAtual = await Pedidos.pedidoPeloId(id_pedido)
        if (pedidoAtual) {
            const pedidoAtualizado = {
                "data_do_pedido": novoPedido.data_do_pedido || pedido.data_do_pedido,
                "hora_do_pedido": novoPedido.hora_do_pedido || pedido.hora_do_pedido,
                "valor_final": novoPedido.valor_final || pedido.valor_final,
                "forma_de_pagamento": novoPedido.forma_de_pagamento || pedido.forma_de_pagamento
            }
            return await daoPedidos.atualizaPedido(id_pedido, pedidoAtualizado)
        } else {
            throw new Error("Pedido não existe")
        }
    }
}

export default Pedidos