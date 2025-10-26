function obterSomaDeTodasAsNotas(notas) {
  let somaNotas = notas.reduce(function(total, nota){
    return total + nota.nota
  }, 0)
  return somaNotas
}

// Não modifique as linhas abaixo
let notas = [
  {
    nome: "Sandra Assis",
    nota: 8
  },
  {
    nome: "Érica Blanck",
    nota: 3
  }
];

console.log(obterSomaDeTodasAsNotas(notas));

function obterSomaDeNotasAninhadas(estudantes) {
  let somaNotas = estudantes.reduce(function(total, nota){
    return total + nota.aprendizagemDeProgramacao.nota
  }, 0)
  return somaNotas
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Diana Kelling",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Marcelo Kioski",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterSomaDeNotasAninhadas(estudantes));