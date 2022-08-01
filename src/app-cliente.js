import express from 'express'
import clienteController from './controller/Clientes-controller.js'

const app = express()

app.use(express.json())

clienteController(app)

export default app
