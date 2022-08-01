import funcionariosDao from '../DAO/funcionariosDAO.js' 

const funcionariosModel = {

   insereFuncionarios : async (funcionario) => {
      return await funcionariosDao.insereFuncionarios(funcionario)
   },

   
   mostrafuncionarios : async () => {
      return await funcionariosDao.mostraTodosFuncionarios()
   },


   mostraUmFuncionario : async (id) => {
      return await funcionariosDao.mostraUmFuncionario(id)
   },


   atualizaFuncionarios : async (id, novosDados) => {
      const funcionarioAtual = await funcionariosModel.mostraUmFuncionario(id)
      if(funcionarioAtual) {
         const  funcionarioAtualizado = {
            "nome" : novosDados.nome || funcionarioAtual.nome,
            "cpf" : novosDados.cpf || funcionarioAtual.cpf,
            "email" : novosDados.email || funcionarioAtual.email,
            "telefone" : novosDados.telefone || funcionarioAtual.telefone,
            "cargo" : novosDados.cargo || funcionarioAtual.cargo,
            "dataDeAdmissao" : novosDados.dataDeAdmissao || funcionarioAtual.dataDeAdmissao,
            "salario" : novosDados.salario || funcionarioAtual.salario
         }
         return await funcionariosDao.atualizaFuncionarios(id, funcionarioAtualizado)
      }else {
         throw new Error('Funcionario não encontrado')
      }
   },


   deletaFuncionarios : async (id) => {
      return await funcionariosDao.deletaFuncionarios(id)
   }
}

export default funcionariosModel