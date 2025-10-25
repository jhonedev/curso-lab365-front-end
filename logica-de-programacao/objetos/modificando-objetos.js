function obterNomeDoCurso(curso) {
  return curso.nome
}

// Não modifique as linhas abaixo
let curso1 = {
  nome: "Aprenda lógica de programação",
  estaCompleto: true
};
let curso2 = {
  nome: "Aprenda JavaScript",
  estaCompleto: false
};

console.log(obterNomeDoCurso(curso1)); // "Aprenda lógica de programação"
console.log(obterNomeDoCurso(curso2)); // "Aprenda JavaScript"

function obterTema(config) {
    return config.tema
}

// Não modifique as linhas abaixo
obterTema({
    tema: "escuro",
    moeda: "real"
}); // "escuro"

obterTema({
    tema: "claro",
    moeda: "dólar"
}); // "claro"

function atualizarUsuario(usuario) {
  usuario.pagou = true
}

// Não modifique as linhas abaixo
atualizarUsuario({nome: "fred", pagou: false});
atualizarUsuario({nome: "elisa", pagou: false});