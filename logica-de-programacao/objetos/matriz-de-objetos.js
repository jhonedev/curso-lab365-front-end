function obterNomeCompletoDoUltimoUsuario(usuarios) {
  let nomeCompleto = `${usuarios[1].nome} ${usuarios[1].sobrenome}`
  return  nomeCompleto  
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Samuel",
    sobrenome: "Bastos",
    idade: 21,
  },
  {
    nome: "Carla",
    sobrenome: "Nogueira",
    idade: 38,
  }
];

console.log(obterNomeCompletoDoUltimoUsuario(usuarios));

function obterNotaDoPrimeiroAluno(estudantes) {
  return estudantes[0].aprendizagemDeProgramacao.nota   
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Samuel Dias",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Carla Ferreira",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterNotaDoPrimeiroAluno(estudantes));