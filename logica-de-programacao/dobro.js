function dobro(valor){
    return valor * 2
}

function executarDobro(operacao, valor){
    if(operacao === "dobro"){
        return dobro(valor)
    }
}

console.log(executarDobro("dobro", 5))