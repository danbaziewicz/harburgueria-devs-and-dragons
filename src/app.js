import express from 'express'

import pedidosController from './controller/pedidosController.js'

const app = express()

app.use(express.json())

pedidosController(app)

export default app