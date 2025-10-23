/*

Retornando à questão do chocolate... Agora, imagine que você só poderá levar o chocolate se a sua mãe permitir e se 
você estiver regular na sua dieta.
*/

if(minhaMaePermiteACompraDoChocolate && estouRegularNaDieta)
    console.log("Posso comprar o chocolate!")

function mensagemDeVotacao(idade) {
  if(idade >= 16 && idade <= 30){
    return "Você pode votar"
  }else{
    return "Você não pode votar"
  }
}

// Não modifique as linhas abaixo
console.log(mensagemDeVotacao(15)) // "Você não pode votar"
console.log(mensagemDeVotacao(20)) // "Você pode votar"
console.log(mensagemDeVotacao(35)) // "Você não pode votar"

function estaPronto(temperatura) {
  if (temperatura >= 100 && temperatura <= 150){
    return true
  }
  return false
}

// Não modifique as linhas abaixo
console.log(estaPronto(90)) // false
console.log(estaPronto(100)) // true
console.log(estaPronto(160)) // false

//desconto de 50% para essas idades
function obterPrecoDoBilhete(idade) {
  if (idade < 18 || idade > 60){
    return 2000
  }
  return 4000
}

// Não modifique as linhas abaixo
console.log(obterPrecoDoBilhete(15)) // 2000
console.log(obterPrecoDoBilhete(30)) // 4000
console.log(obterPrecoDoBilhete(45)) // 4000
console.log(obterPrecoDoBilhete(75)) // 2000

function podeVisualizarArtigo(tipo, ehAutor) {
  if (tipo === "admin" || ehAutor === true){
    return true
  }
  return false
}

// Não modifique as linhas abaixo
console.log(podeVisualizarArtigo("admin", false)) // true
console.log(podeVisualizarArtigo("admin", true)) // true
console.log(podeVisualizarArtigo("user", true)) // true
console.log(podeVisualizarArtigo("user", false)) // false

function obterPlanoDoUsuario(pagou, desafiosCompletos) {
  if (pagou && desafiosCompletos >= 10){
    return "profissional"
  }
  return "gratuito"
}

// Não modifique as linhas abaixo
console.log(obterPlanoDoUsuario(true, 5)) // "gratuito"
console.log(obterPlanoDoUsuario(true, 20)) // "profissional"
console.log(obterPlanoDoUsuario(false, 5)) // "gratuito"
console.log(obterPlanoDoUsuario(false, 20)) // "gratuito"