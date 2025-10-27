let ListaDeNumeros = [3, 12, 45, 21]

function somaDeNumeros(numeros){
    let soma = 0
    numeros.forEach(function(numero){
        soma += numero
    })
    return soma
}

console.log(somaDeNumeros(ListaDeNumeros))