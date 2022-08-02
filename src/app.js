import express from 'express'
import funcionariosController from './controller/funcionarios-controller.js'

const app = express()

app.use(express.json())


funcionariosController(app)

export default app
