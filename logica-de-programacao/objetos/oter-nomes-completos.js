function obterNomesCompletos(usuarios) {
  let nomeCompleto = usuarios.map(function(usuario){
    return `${usuario.nome} ${usuario.sobrenome}`
  })
  return nomeCompleto
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Bárbara",
    sobrenome: "Silva",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Bonaparte",
    idade: 38,
  }
];

console.log(obterNomesCompletos(usuarios));