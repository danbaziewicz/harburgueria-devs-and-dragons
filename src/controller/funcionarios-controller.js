import funcionariosModel from '../model/funcionarios-model.js'
import {
    criaFuncionarios
} from '../services/valida-funcionario.js'


const funcionariosController = (app) => {
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
    app.get('/funcionarios', async (req, res) => {
        try {
            const todosFuncionarios = await funcionariosModel.mostrafuncionarios()
            res.json({
                "Funcionarios": todosFuncionarios,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "Msg": erro.message,
                "erro": true
            })
        }
    })


    app.get('/funcionarios/id/:id', async (req, res) => {
        const idFuncionarios = req.params.id
        try {
            const funcionario = await funcionariosModel.mostraUmFuncionario(idFuncionarios)
            res.json({
                "Funcionario": funcionario,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "Msg": erro.message,
                "erro": true
            })
        }
    })


    app.post('/funcionarios', async (req, res) => {
        const body = req.body
        try {
            const funcionarioNovo = criaFuncionarios(body.nome, body.cpf, body.email, body.telefone, body.cargo, body.dataDeAdmissao, body.salario);
            await funcionariosModel.insereFuncionarios(funcionarioNovo)
            res.json({
                "msg": "Funcionário cadastrado com sucesso",
                "Funcionarios": funcionarioNovo,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.put('/funcionarios/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novosFuncionario = criaFuncionarios(body.nome, body.cpf, body.email, body.telefone, body.cargo, body.dataDeAdmissao, body.salario)
            await funcionariosModel.atualizaFuncionarios(id, novosFuncionario)
            res.json({
                "msg": `Funcionario ${id} atualizado com sucesso`,
                "Funcionario": novosFuncionario,
                "erro": false
            })
        } catch (erro) {
            res.json({
                "msg": erro.message,
                "erro": true
            })
        }
    })

    app.delete('/funcionarios/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await funcionariosModel.deletaFuncionarios(id)
            res.json({
                "Msg": `Funcionario ${id} deletado com sucesso`,
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



export default funcionariosController