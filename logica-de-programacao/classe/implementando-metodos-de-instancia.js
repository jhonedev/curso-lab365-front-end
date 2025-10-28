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

// Definição da classe
class Receita {
    constructor(nome, calorias) {
        this.nome = nome;
        this.calorias = calorias;
    }
    
    // Implemente os métodos de instância ehBaixaCaloria() e ehAltaCaloria()
    ehBaixaCaloria(){
        return this.calorias <= 400;
    }

    ehAltaCaloria(){
        return this.calorias >= 600
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 700);
console.log(macarrao.ehBaixaCaloria());
console.log(macarrao.ehAltaCaloria());

let salada = new Receita("Salada", 350);
console.log(salada.ehBaixaCaloria());
console.log(salada.ehAltaCaloria());

// Definição da classe
class Usuario {
    /* 
        Implemente os métodos: 
        1. constructor 
        2. obterNomeCompleto 
        3. obterIniciais 
        4. podeVotar
    */
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    obterIniciais(){
        return `${this.nome[0]}${this.sobrenome[0]}`
    }

    podeVotar(){
        return this.idade >= 16;
    }
}

// Uso da classe
let sara = new Usuario("Sara", "Gomes", 17);
let cesar = new Usuario("César", "Assis", 13);
console.log("---");