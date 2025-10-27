function obterSomaDeTodasAsNotas(notas) {
  let soma = 0
  notas.forEach(function(nota){
    soma += nota
  })
  return soma
}

function obterMediaDeTodasAsNotas(notas) {
  let media = 0
  notas.forEach(function(nota){
    media += nota / notas.length
  })
  return media
}