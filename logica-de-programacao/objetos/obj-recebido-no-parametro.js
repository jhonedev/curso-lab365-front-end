function objetoNoLog(obj) {
    console.log(obj)
}

// Não modifique as linhas abaixo
let pessoa = {
    nome: "Samuel",
    sobrenome: "Duarte",
    idade: 21,
    email: "samuelduarte@email.com",
    estaVerificado: true
};

let config = {
    tema: "escuro",
    moeda: "real"
};

objetoNoLog(pessoa);
objetoNoLog(config);

// Criar objeto restaurante
let restaurante = {
  nome: "barucPizzas",
  classificacao: 5,
  abertoNasSegundas: true
}

console.log(restaurante)


function obterMensagemDeVotacao(usuario) {
    if(usuario.idade >= 16){
        return "Você pode votar";
    }
    return "Você não pode votar";
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "Samanta",
    sobrenome: "Duarte",
    idade: 15
};

let usuario2 = {
    nome: "Carla",
    sobrenome: "Fortes",
    idade: 31
};

console.log(obterMensagemDeVotacao(usuario1)); // "Você não pode votar"
console.log(obterMensagemDeVotacao(usuario2)); // "Você pode votar"

function adicionarQuantidadeDeAulas(curso, total) {
    curso.quantidadeDeAulas = total
}

// Não modifique as linhas abaixo
let curso1 = {
    nome: "Aprenda a programar",
    estaCompleto: true
};

let curso2 = {
    nome: "Aprenda JavaScript",
    estaCompleto: false
};

adicionarQuantidadeDeAulas(curso1, 80); // deve adicionar quantidadeDeAulas: 80 ao objeto curso1
adicionarQuantidadeDeAulas(curso2, 60); // deve adicionar quantidadeDeAulas: 60 ao objeto curso2