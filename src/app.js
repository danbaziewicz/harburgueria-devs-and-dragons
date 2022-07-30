import express from 'express'
//instalar e importar cors
import produtoController from './controller/produtos-controller.js'

//criar e importar autenticação

const app = express()

app.use(express.json())

//autenticação vai usar app

produtoController(app)

export default app