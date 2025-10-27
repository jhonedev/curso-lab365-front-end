function adicionarNota(notas, nota) {
  notas.push(nota)
  return notas
}

function obterTotalDeNotas(notas) {
  return notas.length
}

function obterPrimeiraNota(notas) {
  return notas[0]
}

function obterUltimaNota(notas) {
  return notas[notas.length - 1]
}

function obterSomaDasNotas(notas) {
  let soma = 0
  notas.forEach(function(nota){
    soma += nota
  })
  return soma
}

function obterMediaDasNotas(notas) {
  let media = 0
  notas.forEach(function(nota){
    media += nota / notas.length
  })
  return media
}

function obterNotasAumentadasEm2(notas) {
  let notasDobradas = notas.map(function(nota){
    return nota + 2
  })
  return notasDobradas
}