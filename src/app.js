import express from 'express'
import produtoController from './controller/produtos-controller.js'

const app = express()

app.use(express.json())

produtoController(app)

export default app