import funcionariosModel from '../model/funcionarios.js'
import {criaFuncionarios} from '../services/validacaoFuncionarios.js' 


const funcionariosController = (app) => {
    app.get('/funcionarios', async (req, res) => {
        try {
            const todosFuncionarios = await funcionariosModel.mostrafuncionarios()
            res.json({
                "Funcionarios": todosFuncionarios,
                "erro": false        
            })
        } catch (erro) {
            res.json({
                "Msg" : erro.message,
                "erro" : true
            })
        }
    })


    app.get('/funcionarios/id/:id', async (req, res) => {
        const idFuncionarios = req.params.id
        try {
            const funcionario = await funcionariosModel.mostraUmFuncionario(idFuncionarios)
            res.json({
                "Funcionario" : funcionario,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "Msg" : erro.message,
                "erro" : true
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
                "Funcionarios" : funcionarioNovo,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.put('/funcionarios/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novosFuncionario = criaFuncionarios(body.nome, body.cpf, body.email, body.telefone, body.cargo, body.dataDeAdmissao, body.salario)
            console.log(novosFuncionario)
            await funcionariosModel.atualizaFuncionarios(id, novosFuncionario) 
            res.json({
                "msg": `Funcionario ${id} atualizado com sucesso`,
                "Funcionario" : novosFuncionario,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.delete('/funcionarios/id/:id', async (req,res) => {
        const id = req.params.id
        try {
            await funcionariosModel.deletaFuncionarios(id)
            res.json({
                "Msg" : `Funcionario ${id} deletado com sucesso`,
                "erro" : false
            })
        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })
}



export default funcionariosController