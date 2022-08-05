import pedidoClienteModel from "../model/pedido-cliente-model.js";
import {
    criaPedidoCliente
} from "../services/valida-pedido-cliente.js";

const pedidoClienteController = (app) => {

    app.get('/', (req, res) => {
        res.send(`
        <div style="padding-left: 0.938rem; padding-right: 0.938rem;">

            <h1>Bem vindo(a) à API - Hamburgueria Devs and Dragons </h1>

            <ul>

                <li  style="font-size: 1.25rem;">Para ver os clientes, basta por /cliente após o fim da url.</li>
                <br>
                <li  style="font-size: 1.25rem;">Para ver os produtos, basta por /produto após o fim da url.</li>
                <br>
                <li  style="font-size: 1.25rem;">Para ver os funcionários, basta por /funcionarios após o fim da url.</li>
                <br>
                <li  style="font-size: 1.25rem;">Para ver os pedidos, basta por /pedido após o fim da url.</li>
                <br>

                <br>
                <li  style="font-size: 1.25rem;">Para ver os pedido-cliente, basta por /pedido-cliente após o fim da url.</li>
                <br>
                <li  style="font-size: 1.25rem;">Para ver os fornecedores, basta por /fornecedor após o fim da url.</li>
                <br>


            </ul>

            <br>

            <p><a href="https://github.com/danbaziewicz/harburgueria-devs-and-dragons" target="_blank">Repositório da api</a></p>

            <br>

            <p>Api criada por: Squad 2 - Resília</p>

        </div>
        `)
    })
    app.get('/pedido-cliente', async (req, res) => {
        try {
            const todosPedidoCliente = await pedidoClienteModel.pegaPedidoCliente()
            res.json({
                "pedido_cliente": todosPedidoCliente,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido-cliente/id/:id', async (req, res) => {
        const pedidoClienteId = req.params.id
        try {
            const pedidoCliente = await pedidoClienteModel.pegaPedidoClienteById(pedidoClienteId)
            res.json({
                "Pedido Cliente": pedidoCliente,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido-cliente/idpedido/:id_pedido', async (req, res) => {
        const pedidoClienteIdPedido = req.params.id_pedido
        try {
            const IdPedido = await pedidoClienteModel.pegaPedidoClienteByIdPedido(pedidoClienteIdPedido)
            res.json({
                "id_pedido": IdPedido,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido-cliente/idcliente/:id_cliente', async (req, res) => {
        const pedidoClienteIdCliente = req.params.id_cliente
        try {
            const idCliente = await pedidoClienteModel.pegaPedidoClienteByIdCliente(pedidoClienteIdCliente)
            res.json({
                "id_cliente": idCliente,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/pedido-cliente/produto/:produto', async (req, res) => {
        const pedidoClienteProduto = req.params.produto
        try {
            const produto = await pedidoClienteModel.pegaPedidoClienteByProduto(pedidoClienteProduto)
            res.json({
                "produtos": produto,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.post('/pedido-cliente', async (req, res) => {
        const body = req.body
        try {
            const novoPedidoCliente = criaPedidoCliente(body.id_pedido, body.id_cliente, body.produto, body.quantidade);
            await pedidoClienteModel.inserePedidoCliente(novoPedidoCliente)
            res.json({
                "msg": "Pedido cliente inserido com sucesso",
                "pedido-cliente": novoPedidoCliente,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.delete('/pedido-cliente/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await pedidoClienteModel.deletaPedidoCliente(id)

            res.json({
                "msg": `Pedido cliente ${id} deletado com sucesso`,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/pedido-cliente/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoPedidoCliente = criaPedidoCliente(body.id_pedido, body.id_cliente, body.produto, body.quantidade);
            await pedidoClienteModel.atualizaPedidoCliente(id, novoPedidoCliente)
            res.json({
                "msg": "Pedido cliente atualizado com sucesso",
                "pedido-cliente": novoPedidoCliente,
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
export default pedidoClienteController