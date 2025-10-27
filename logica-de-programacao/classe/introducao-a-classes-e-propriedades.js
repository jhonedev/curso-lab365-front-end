class Pessoa {
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
        this.ativo = false
    }
}

let listaDeObjetos = [
    new Pessoa ("Jonathan", 29),
    new Pessoa ("Paulo", 27)
]

console.log(listaDeObjetos)