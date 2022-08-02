import db from "../database/conectar.js"

const daoPedidos = {

    pegaPedidos: () => {
        const PEGA_PEDIDOS = 'SELECT * FROM PEDIDOS'
        return new Promise((resolve, reject) => {
            db.all(PEGA_PEDIDOS, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pedidoPeloId: (pedidoId) => {
        const PEGA_PEDIDO_ID = 'SELECT * FROM PEDIDOS WHERE id_pedido = ?'

        return new Promise((resolve, reject) => {
            db.get(PEGA_PEDIDO_ID, pedidoId, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pedidoPelaData: (dataPedido) => {
        const PEGA_PEDIDO_DATA = 'SELECT * FROM PEDIDOS WHERE data_do_pedido = ?'

        return new Promise((resolve, reject) => {
            db.all(PEGA_PEDIDO_DATA, dataPedido, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pedidoPelaHora: (horaPedido) => {
        const PEGA_PEDIDO_HORA = 'SELECT * FROM PEDIDOS WHERE hora_do_pedido = ?'

        return new Promise((resolve, reject) => {
            db.all(PEGA_PEDIDO_HORA, horaPedido, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    pedidoPeloValor: (valorPedido) => {
        const PEGA_PEDIDO_VALOR = 'SELECT * FROM PEDIDOS WHERE valor_final = ?'

        return new Promise((resolve, reject) => {
            db.all(PEGA_PEDIDO_VALOR, valorPedido, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },
    pedidoPelaFormaPagamento: (formaPagamento) => {
        const PEGA_PEDIDO_FORMA = 'SELECT * FROM PEDIDOS WHERE forma_de_pagamento = ?'

        return new Promise((resolve, reject) => {
            db.all(PEGA_PEDIDO_FORMA, formaPagamento, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    inserePedido: (pedido) => {
        const INSERE_PEDIDO = `
        INSERT INTO PEDIDOS (data_do_pedido, hora_do_pedido, valor_final, forma_de_pagamento)
        VALUES (?, ?, ?, ?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_PEDIDO, pedido.data_do_pedido, pedido.hora_do_pedido, pedido.valor_final, pedido.forma_de_pagamento, (error) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(pedido)
                }
            })
        })
    },

    deletarPedido: (id) => {
        const DELETA_PEDIDO = `DELETE FROM PEDIDOS WHERE id_pedido = ?`

        return new Promise((resolve, reject) => {
            db.get(DELETA_PEDIDO, id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(`Pedido ${id} foi deletado com sucesso !`)
                }
            })
        })
    },

    atualizaPedido: (id_pedido, novoPedido) => {
        const ATUALIZA_PEDIDO = `UPDATE PEDIDOS SET data_do_pedido = ?, hora_do_pedido = ?, valor_final = ?, forma_de_pagamento = ? WHERE id_pedido = ?`

        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_PEDIDO, novoPedido.data_do_pedido, novoPedido.hora_do_pedido, novoPedido.valor_final, novoPedido.forma_de_pagamento, id_pedido,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(novoPedido)
                    }
                })
        })
    }
}

export default daoPedidos