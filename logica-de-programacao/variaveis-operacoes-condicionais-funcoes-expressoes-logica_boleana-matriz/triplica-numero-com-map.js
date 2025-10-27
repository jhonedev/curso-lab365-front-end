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

function nomesEmMinusculas(nomes) {
  let nomesMinusculos = nomes.map(function(nome){
    return nome.toLowerCase()
  })
  return nomesMinusculos
}

function nomesEmMaiusculas(nomes) {
  let maiusculas = nomes.map(function(nome){
    return nome.toUpperCase()
  })
  return maiusculas
}

function obterIniciais(nomes) {
  let novaMatriz = nomes.map(function(nome){
    return nome[0]
  })
  return novaMatriz
}

function obterUltimoCaractere(nomes) {
  let novaMatriz = nomes.map(function(nome){
    return nome[nome.length -1]
  })
  return novaMatriz
}

// Não modifique as linhas abaixo
console.log(obterUltimoCaractere(["Alice", "Bruno", "Samuel", "Augusto"])) // ["e", "o", "l", "o"]
console.log(obterUltimoCaractere(["samara", "alexandre", "carla"])) // ["a", "e", "a"]
// Não modifique as linhas abaixo
console.log(obterIniciais(["Alice", "Bruno", "Samuel", "Augusto"])) // ["A", "B", "S", "A"]
console.log(obterIniciais(["samara", "alexandre", "carla"])) // ["s", "a", "c"]

// Não modifique as linhas abaixo
console.log(nomesEmMaiusculas(["Alice", "Bruno", "Samuel", "Augusto"])) // ["ALICE", "BRUNO", "SAMUEL", "AUGUSTO"]
console.log(nomesEmMaiusculas(["samuel", "alice", "cARLa"])) // ["SAMUEL", "ALICE", "CARLA"]

// Não modifique as linhas abaixo
console.log(nomesEmMinusculas(["Alice", "Bruno", "Samuel", "Augusto"])) // ["alice", "bruno", "samuel", "augusto"]
console.log(nomesEmMinusculas(["SAMARA", "ALEXANDRE", "CARLA"])) // ["samara", "alexandre", "carla"]

// Não modifique as linhas abaixo
console.log(notasTriplicadas([10, 20])) // [30, 60]
console.log(notasTriplicadas([5, 12, 20, 10])) // [15, 36, 60, 30]

// Não modifique as linhas abaixo
console.log(dobreNumeros([10, 20])) // [20, 40]
console.log(dobreNumeros([5, 12, 20, 10])) // [10, 24, 40, 20]

// Não modifique as linhas abaixo
console.log(aumentarTemperaturasEm5([-5, 12, -15, 18, 13])) // [0, 17, -10, 23, 18]
console.log(aumentarTemperaturasEm5([5, 20, 10])) // [10, 25, 15]