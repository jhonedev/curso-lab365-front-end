function notasTriplicadas(notas){
    let novasNotas = notas.map(function(nota){
        return nota * 3
    })
    return novasNotas
}

function dobreNumeros(numeros) {
  let numerosDobrados = numeros.map(function(numero){
    return numero * 2
  })
  return numerosDobrados
}

function aumentarTemperaturasEm5(temperaturas) {
  let temperaturaAumentada = temperaturas.map(function(temperatura){
    return temperatura + 5
  })
  return temperaturaAumentada
}


// Não modifique as linhas abaixo
console.log(notasTriplicadas([10, 20])) // [30, 60]
console.log(notasTriplicadas([5, 12, 20, 10])) // [15, 36, 60, 30]

// Não modifique as linhas abaixo
console.log(dobreNumeros([10, 20])) // [20, 40]
console.log(dobreNumeros([5, 12, 20, 10])) // [10, 24, 40, 20]

// Não modifique as linhas abaixo
console.log(aumentarTemperaturasEm5([-5, 12, -15, 18, 13])) // [0, 17, -10, 23, 18]
console.log(aumentarTemperaturasEm5([5, 20, 10])) // [10, 25, 15]