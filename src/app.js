import express from 'express'
import funcionariosController from './controller/funcionariosController.js'

const app = express()

app.use(express.json())


funcionariosController(app)

export default app
