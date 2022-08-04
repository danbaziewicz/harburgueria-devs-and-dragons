import express from 'express'
import produtoController from './controller/produtos-controller.js'
import clienteController from './controller/clientes-controller.js'
import funcionariosController from './controller/funcionarios-controller.js'
import pedidoClienteController from './controller/pedido-cliente-controller.js'
import pedidosController from './controller/pedidos-controller.js'
import fornecedorController from './controller/fornecedor-controller.js'

const app = express()

app.use(express.json())

produtoController(app)
clienteController(app)
funcionariosController(app)
pedidoClienteController(app)
pedidosController(app)
fornecedorController(app)

export default app