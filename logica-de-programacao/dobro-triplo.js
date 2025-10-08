function dobro(valor){
    return valor *2
}

function triplo(valor){
    return valor * 3
}

function executar(operacao, valor){
    if(operacao === "dobro"){
        return dobro(valor)
    }
    if(operacao === "triplo"){
        return triplo(valor)
    }
}

console.log(executar("triplo", 15))
console.log(executar("dobro", 10))