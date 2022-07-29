let id = 0

export const validaSenha = (senhaCliente)=>{
    if(senhaCliente.length >= 8){
        return senhaCliente
    }else{
        throw new Error("Insira uma senha acima de 8 caracteres!")
    }

}
