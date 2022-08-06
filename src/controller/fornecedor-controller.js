import fornecedorModel from "../model/fornecedor-model.js";
import {criaFornecedor} from "../services/validacao-fornecedor.js";

const fornecedorController = (app) => {

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
    app.get('/fornecedor', async (req, res) => {
        try {
            const todosfornecedor = await fornecedorModel.pegafornecedores()
            res.json({
                "fornecedores": todosfornecedor,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/fornecedor/id/:id', async (req, res) => {
        const fornecedorId = req.params.id
        try {
            const fornecedor = await fornecedorModel.pegaFornecedorById(fornecedorId)
            res.json({
                "fornecedores": fornecedor,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.get('/fornecedor/nome/:nome', async (req, res) => {
        const fornecedorNome = req.params.nome
        try {
            const fornecedor = await fornecedorModel.pegaFornecedorByNome(fornecedorNome)
            res.json({
                "fornecedores": fornecedor,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })


    app.get('/fornecedor/cnpj/:cnpj', async (req, res) => {
        const fornecedorCnpj = req.params.cnpj
        try {
            const fornecedor = await fornecedorModel.pegaFornecedorByCnpj(fornecedorCnpj)
            res.json({
                "fornecedores": fornecedor,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.post('/fornecedor', async (req, res) => {
        const body = req.body
        try {
            const novoFornecedor = criaFornecedor(body.nome_fornecedor, body.cnpj_fornecedor, body.email_fornecedor, body.cidade_fornecedor, body.endereco_fornecedor, body.produto_fornecedor);
            await fornecedorModel.insereFornecedor(novoFornecedor)
            res.json({
                "msg": " Fornecedor cadastrado com sucesso",
                "produto": novoFornecedor,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.delete('/fornecedor/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await fornecedorModel.deletaFornecedor(id)

            res.json({
                "msg": `Fornecedor ${id} deletado com sucesso`,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/fornecedor/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoFornecedor = criaFornecedor(body.nome_fornecedor, body.cnpj_fornecedor, body.email_fornecedor, body.cidade_fornecedor, body.endereco_fornecedor, body.produto_fornecedor);
            await fornecedorModel.atualizaFornecedor(id, novoFornecedor)
            res.json({
                "msg": "Fornecedor atualizado",
                "fornecedor": novoFornecedor,
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
export default fornecedorController
