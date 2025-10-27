class Usuario {

    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    podeVotar(){
        return this.idade >= 16; //retorna true se a idade for maior ou igual a 16 anos e false se for menor que isso
    }
}

//criando um usuario
let usuario1 = new Usuario("Jonathan", "Borges");

usuario1.obterNomeCompleto();


class Carro {
    constructor (modelo, ano, marca){
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
    }

    marcaAno (){
        return `Este carro de modelo ${this.modelo} é do ano de ${this.ano}`
    }
}