//objeto literal

let jogador1 = {
    //pripriedades
    nome: "Jonathan",
    idade: 29,
    time: "flamengo",
    //acoes
    chutaProGol: function(){
        console.log("Chotou para o gol")
    },

    toca: function(){
        console.log("Tocou para o amigo")
    },
}

let jogador2 = {
    //pripriedades
    nome: "Zico",
    idade: 72,
    time: "flamengo",
    //acoes
    chutaProGol: function(){
        //console.log("Chotou para o gol")
    },

    toca: function(){
        //console.log("Tocou para o amigo")
    },
}

//console.log(jogador1.nome)
//console.log(jogador2.nome)
//jogador1.chutaProGol()

//estrutura de declaracao de classes
//Pascal Case
//metodo especial se chama constructor

class Jogador {
    constructor(nome, idade, time){
        //console.log(nome, idade, time)
        this.nome = nome;
        this.idade = idade;
        this.time = time;
    }
}

let zicoObjeto = new Jogador("Zico", 72, "Flamengo");
let romarioObjeto = new Jogador("Romario", 65, "Palmeiras")
let cristianoRonado = new Jogador("Cristiano Ronaldo", 37, "Portugal")

let listaDeJogadores = [
    zicoObjeto,
    romarioObjeto,
    cristianoRonado,
]

console.log(listaDeJogadores)
console.log(zicoObjeto)


class Aluno {
    constructor(nome, notas){
        let dados = {
            nomeCompleto: "",
            notas: [],
        }

        if (nome !== ""){
            dados.nomeCompleto = nome
        }

        if (notas !== undefined && notas.length > 0){
            dados.notas = notas
        }

        //console.log(dados)
    }
}

let aluno1 = new Aluno("Jonathan")