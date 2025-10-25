let professor = {
    nome: "Leandro",
    sobrenome: "Soares",
    cursoMinistrado: {
        nome: "DEVstart",
        instituicao: "SENAI",
        concluido: false
    }
};

function obterAno(estudante) {
    return estudante.curso.ano
}

function obterNota(estudante) {
   return estudante.curso.nota 
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Andres",
    idade: 24,
    curso: {
        ano: 2020,
        nota: 8
    }
};

console.log(obterAno(estudante)); // 2020
console.log(obterNota(estudante)); // 8

function obterNomeCompleto(tweet) {
    return `${tweet.author.details.firstName} ${tweet.author.details.lastName}`
}

// Não modifique as linhas abaixo
let tweet = {
    number: 4941484847594802124051,
    message: `A programação é uma arte rara.
    Quem a entender, vai dominar o mundo.`,
    link: "www.wikipedia.org",
    created_at: "2022-01-03 11:46:00",
    author: {
        number: 40493848,
        details: {
            firstName: "Mara",
            lastName: "Siqueira",
        },
        handle: "MaraSiq"
    }
};

console.log(obterNomeCompleto(tweet)); // "Mara Siqueira"