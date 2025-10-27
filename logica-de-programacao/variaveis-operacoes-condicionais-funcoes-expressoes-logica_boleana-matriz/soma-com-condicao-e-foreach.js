let notas = [9, 4, 6, 8, 2]

function somaNotasIguaisOuAcimaDe6(notas){
    let soma = 0
    notas.forEach(function(nota){
       if(nota >= 6){
        soma += nota
       } 
    })
    return soma
}

function somaDeTemperaturasNaoCongelantes(temperaturas) {
  let soma = 0
  temperaturas.forEach(function(temperatura){
    if (temperatura > 0){
      soma += temperatura
    }
  })
  return soma
}

// Não modifique as linhas abaixo
console.log(somaNotasIguaisOuAcimaDe6(notas))
console.log(somaDeTemperaturasNaoCongelantes([-13, 5, -8, -3, 0, 3, 5])) // deveria retornar 13
console.log(somaDeTemperaturasNaoCongelantes([12, -4, 9, -20, 8])) // deveria retornar 29
