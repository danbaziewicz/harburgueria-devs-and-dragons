import Pedidos from "../model/pedidos-model.js";
import { criaPedido } from "../services/valida-pedidos.js";
const pedidosController = (app) => {

    app.get('/pedido', async (req, res) => {
        try {
            const todosPedidos = await Pedidos.pegaPedidos()
            res.json({
                "pedidos": todosPedidos,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido/id/:id', async (req, res) => {
        const pedidoId = req.params.id
        try {
            const pedido = await Pedidos.pedidoPeloId(pedidoId)
            res.json({
                "pedidos": pedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido/data/:data', async (req, res) => {
        const dataPedido = req.params.data
        try {
            const pedido = await Pedidos.pedidoPelaData(dataPedido)
            res.json({
                "pedidos": pedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido/hora/:hora', async (req, res) => {
        const horaPedido = req.params.hora
        try {
            const pedido = await Pedidos.pedidoPelaHora(horaPedido)
            res.json({
                "pedidos": pedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido/valor/:valor', async (req, res) => {
        const valorPedido = req.params.valor
        try {
            const pedido = await Pedidos.pedidoPeloValor(valorPedido) //@@@@@@@@@@@@@@@ LOWER
            res.json({
                "pedidos": pedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })
    app.get('/pedido/forma/:forma', async (req, res) => {
        const formaPagamento = req.params.forma
        try {
            const pedido = await Pedidos.pedidoPelaFormaPagamento(formaPagamento)
            res.json({
                "pedidos": pedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.post('/pedido', async (req, res) => {
        const body = req.body
        try {
            const novoPedido = criaPedido(body.data_do_pedido, body.hora_do_pedido, body.valor_final, body.forma_de_pagamento);
            await Pedidos.inserePedido(novoPedido)
            res.json({
                "msg": "Pedido criado !",
                "pedidos": novoPedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.delete('/pedido/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await Pedidos.deletarPedido(id)

            res.json({
                "msg": `Pedido ${id} deletado com sucesso`,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/pedido/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoPedido = criaPedido(body.data_do_pedido, body.hora_do_pedido, body.valor_final, body.forma_de_pagamento);
            await Pedidos.atualizaPedido(id, novoPedido)
            res.json({
                "msg": "Pedido atualizado com sucesso",
                "pedidos": novoPedido,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}
export default pedidosController