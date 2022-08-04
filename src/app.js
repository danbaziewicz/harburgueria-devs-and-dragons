import express from 'express'
import fornecedorController from './controller/fornecedor-controller.js'

const app = express()

app.use(express.json())

fornecedorController(app)

export default app