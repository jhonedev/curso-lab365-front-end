let notas = [6, 9, 4, 3]

function somaDeNotas(notas){
    let soma = notas.reduce(function(total, nota){
        return total + nota
    }, 0)
    return soma
}

function somaNumeros(numeros) {
  let soma = numeros.reduce(function(total, atual){
    return total + atual
  },0)
  return soma
}

function multipliqueNumeros(numeros) {
  let multiplicacao = numeros.reduce(function(total, inicial){
    return total * inicial
  }, 1)
  return multiplicacao
}

// Não modifique as linhas abaixo:
console.log(somaDeNotas(notas))
console.log(somaNumeros([10, 20, 30])) // 60
console.log(somaNumeros([2, 4, 2, 10])) // 18
console.log(multipliqueNumeros([10, 20, 30])) // 6000
console.log(multipliqueNumeros([2, 4, 2, 10])) // 160
