import fornecedoresModel from "../model/fornecedor-model.js";
//import { criafornecedor } from "../services/valida-fornecedor.js";

const fornecedorController = (app) => {

    app.get('/fornecedor', async (req, res)=>{
        try {
            const todosfornecedor = await fornecedoresModel.pegaFornecedor()
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
            const fornecedor = await fornecedoresModel.pegaFornecedorById(fornecedorId)
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
            const fornecedor = await fornecedoresModel.pegaFornecedorByNome(fornecedorNome)
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

    
    app.get('/fornecedor/tipo/:tipo', async (req, res)=>{
        const forncedorTipo = req.params.tipo
        try {
            const fornecedor = await fornecedoresModel.pegaFornecedorByTipo(forncedorTipo) 
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

    // app.post('/fornecedor', async (req, res)=>{
    //     const body = req.body
    //     try {
    //         const novofornecedor = criaFornecedor(body.nome_forncedor, body.cnpj_fornecedor, body.email_fornecedor, body.cidade_fornecedor, body.endereço_fornecedor, body.produto_fornecedor );
    //         await fornecedoresModel.insereFornecedor(novofornecedor)
    //         res.json({
    //             "msg" : " Fornecedor cadastrado com sucesso",
    //             "produto" : novofornecedor,
    //             "erro" : false
    //         })
    //     } catch (erro) {
    //         res.json({
    //             "msg" : erro.message,
    //             "erro" : true
    //         })
    //     }
    // })

    app.delete('/fornecedor/id/:id', async (req, res)=>{
        const id = req.params.id
        try {
            await fornecedoresModel.deletaFornecedor(id)

            res.json(
                {"msg" : `Usuário ${id} deletado com sucesso`,
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
            await fornecedoresModel.atualizaFornecedor(id, novoFornecedor)
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