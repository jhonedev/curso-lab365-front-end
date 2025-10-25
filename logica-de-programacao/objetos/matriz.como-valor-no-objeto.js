let aluno = {
    nome: "Renata", //string
    sobrenome: "Almeida", // string
    notas: [5, 8, 4, 7], // matriz de números
};

aluno.notas = aluno.notas.map(function(nota) {
    return nota + 2;
})

console.log(aluno)

function obterNumeroDeRotulos(jogo) {
    return jogo.rotulos.length
}

// Não modifique as linhas abaixo
let jogo = {
    nome: "Banco Imobiliário",
    rotulos: ["Estratégia", "Dinheiro", "Família"],
    anoDeLancamento: 1935
};

console.log(obterNumeroDeRotulos(jogo)); // 3

function obterPrimeiraNota(estudante) {
    return estudante.notas[0]
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Diego",
    idade: 24,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterPrimeiraNota(estudante)); // 3

function obterUltimaNota(estudante) {
   return estudante.notas[estudante.notas.length - 1]
}

// Não modifique as linhas abaixo
let estudante1 = {
    nome: "Samara Dias",
    idade: 24,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterUltimaNota(estudante1));

function obterSomaDasNotas(estudante) {
    return estudante.notas.reduce(function(total, nota){
        let notaFinal = total + nota
        return notaFinal
    }, 0)
}

// Não modifique as linhas abaixo
let estudante2 = {
    nome: "Evandro Carneiro",
    idade: 16,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterSomaDasNotas(estudante2));