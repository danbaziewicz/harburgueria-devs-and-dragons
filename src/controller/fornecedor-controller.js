import fornecedorModel from "../model/fornecedor-model.js";
import { criaFornecedor } from "../services/validação-fornecedor"; 

const fornecedorController = (app) => {

    app.get('/fornecedor', async (req, res)=>{
        try {
            const todosfornecedor = await fornecedorModel.pegaFornecedor()
            res.json({
                "fornecedores" : todosfornecedor,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/fornecedor/id/:id', async (req, res)=>{
        const fornecedorId = req.params.id
        try {
            const fornecedor = await fornecedorModel.pegaFornecedorById(fornecedorId)
            res.json({
                "fornecedores" : fornecedor,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.get('/fornecedor/nome/:nome', async (req, res)=>{
        const fornecedorNome = req.params.nome
        try {
            const fornecedor = await fornecedorModel.pegaFornecedorByNome(fornecedorNome)
            res.json({
                "fornecedores" : fornecedor,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    
    app.get('/fornecedor/cnpj/:cnpj', async (req, res)=>{
        const fornecedorCnpj = req.params.cnpj
        try {
            const fornecedor = await fornecedorModel.pegaFornecedorByCnpj(fornecedorCnpj) 
            res.json({
                "fornecedores" : fornecedor,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.post('/fornecedor', async (req, res)=>{
        const body = req.body
        try {
            const novoFornecedor = criaFornecedor(body.nome_forncedor, body.cnpj_fornecedor, body.email_fornecedor, body.cidade_fornecedor, body.endereço_fornecedor, body.produto_fornecedor );
            await fornecedorModel.insereFornecedor(novoFornecedor)
            res.json({
                "msg" : " Fornecedor cadastrado com sucesso",
                "produto" : novoFornecedor,
                "erro" : false
            })
        } catch (erro) {
            res.json({
                "msg" : erro.message,
                "erro" : true
            })
        }
    })

    app.delete('/fornecedor/id/:id', async (req, res)=>{
        const id = req.params.id
        try {
            await fornecedorModel.deletaFornecedor(id)

            res.json(
                {"msg" : `Fornecedor ${id} deletado com sucesso`,
                "erro" : false}
            )
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })
    
    app.put('/fornecedor/id/:id', async (req, res)=>{
        const body = req.body
        const id = req.params.id
        try {
            const novoFornecedor = criaFornecedor(body.nome_forncedor, body.cnpj_fornecedor, body.email_fornecedor, body.cidade_fornecedor, body.endereço_fornecedor, body.produto_fornecedor);
            console.log(novoFornecedor)
            await fornecedorModel.atualizaFornecedor(id, novoFornecedor)
            res.json({
                "msg" : "Fornecedor atualizado",
                "fornecedor" : novoFornecedor,
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
export default fornecedorController