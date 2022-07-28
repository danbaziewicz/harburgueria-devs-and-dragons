import ProdutosModel from "../model/produtos.js";
//importar base de dados


const produtoController = (app) => {
    //rotas ('/produto')

    
    const modelProdutos = new ProdutosModel()
    try {
        app.get('/produto', (req, res)=>{
            db.all('SELECT * FROM PRODUTOS',(erro, linhas)=>{
                console.log(linhas)
                console.log(erro)
            })
    
            const todosProdutos = modelProdutos.pegaProdutos
            
            res.json(
                {"produto" : todosProdutos,
                "erro" : false}
            )
        })
    } catch (error) {
        res.json(
            {"msg" : error.message,
             "erro" : true}
        )
    }
    

}

export default produtoController