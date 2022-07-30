import funcionarios from '../model/funcionarios.js'
import validacaoFuncionarios from '../services/validacaoFuncionarios.js'


const funcionariosController = (app) => {
    app.get('/funcionarios', async (req, res) => {
        try {
            const todosFuncionarios = await funcionarios.mostrafuncionarios()
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
            const funcionario = await funcionarios.mostraUmFuncionario(idFuncionarios)
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
            const funcionarioNovo = await funcionarios.insereFuncionarios(funcionarioNovo)
            res.json({
                "Funcionarios" : funcionarioNovo,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "erro" : erro.message,
                "erro" : true
            })
        }
    })

    app.put('/funcionarios/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novosFuncionario = (body.nome, body.cpf, body.email, body. telefone, body.cargo, body.dataDeAdmissao, body.salario)
            const funcionarioNovo = await funcionarios.atualizaFuncionarios(id, novosFuncionario) 
            res.json({
                "Funcionario" : 'Funcionario atualizado com sucesso',
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "erro" : erro.message,
                "erro" : true
            })
        }
    })

    app.delete('/funcionarios/id/:id', async (req,res) => {
        const id = req.params.id
        try {
            await funcionarios.deletaFuncionarios(id)
            res.json({
                "Msg" : 'Funcionario deletado com sucesso',
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "erro" : erro.message,
                "erro" : true
            })
        }
    })
}



export default funcionariosController

