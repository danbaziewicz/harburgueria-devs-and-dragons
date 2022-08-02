import clientesModel from "../model/clientes-model";
import { criaClientes } from "../services/validacao-cliente.js";

const clienteController = (app) => {

    app.get('/cliente', async (req, res)=>{
        try {
            const todosClientes = await clientesModel.pegaCliente()
            res.json({
                "clientes" : todosClientes,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/cliente/id/:id', async (req, res)=>{
        const idCliente = req.params.id
        try {
            const cliente = await clientesModel.pegaClienteId(idCliente)
            res.json({
                "clientes" : cliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/cliente/nome/:nome', async (req, res)=>{
        const nomeCliente = req.params.nome
        try {
            const cliente = await clientesModel.pegaClienteNome(nomeCliente)
            res.json({
                "clientes" : cliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/cliente/email/:email', async (req, res)=>{
        const clienteEmail = req.params.email
        try {
            const cliente = await clientesModel.pegaClienteEmail(clienteEmail)
            res.json({
                "clientes" : cliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/cliente/cpf/:cpf', async (req, res)=>{
        const clienteCpf = req.params.cpf
        try {
            const cliente = await clientesModel.pegaClienteCpf(clienteCpf)
            res.json({
                "clientes" : cliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/cliente/telefone/:telefone', async (req, res)=>{
        const clienteTelefone = req.params.telefone
        try {
            const cliente = await clientesModel.pegaClienteTelefone(clienteTelefone)
            res.json({
                "clientes" : cliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/cliente/senha/:senha', async (req, res)=>{
        const clienteSenha = req.params.senha
        try {
            const cliente = await clientesModel.pegaClienteSenha(clienteSenha)
            res.json({
               "clientes" : cliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.post('/cliente', async (req, res)=>{
        const body = req.body
        try {
            const newCliente = criaClientes(body.nome_cliente, body.email_cliente, body.cpf_cliente, body.telefone_cliente, body.senha_cliente);
            await clientesModel.insereCliente(newCliente)
            res.json({
                "msg" : "Cliente cadastrado com sucesso",
                "cliente" : newCliente,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.delete('/cliente/id/:id', async (req, res)=>{
        const idCliente = req.params.id
        try {
            await clientesModel.deletaCliente(idCliente)

            res.json(
                {"msg" : `Usuário ${idCliente} deletado com sucesso`,
                "erro" : false}
            )
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })

    app.put('/cliente/id/:id', async (req, res)=>{
        const body = req.body
        const idCliente = req.params.id
        try {
            const newCliente = criaClientes(body.nome_cliente, body.email_cliente, body.cpf_cliente, body.telefone_cliente, body.senha_cliente);
            console.log(newCliente)
            await clientesModel.atualizaCliente(idCliente, newCliente)
            res.json({
                "msg" : "Cliente atualizado com sucesso",
                "cliente" : newCliente,
                "erro" : false
            })
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })
}
export default clienteController
