// Definindo a classe
class Transporte {
    constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}
}

// Definição da classe
class Usuario {
    constructor(nome, sobrenome, idade){
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }
}

// Uso da classe
let samuel = new Usuario("Samuel", "Bueno", 19);
console.log(samuel);

let carla = new Usuario("Carla", "Diniz", 30);
console.log(carla);

// Definição da classe
class Receita {
    constructor(nome, calorias){
      this.nome = nome;
      this.calorias = calorias;
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log(macarrao);

let salada = new Receita("Salada", 400);
console.log(salada);

// Definição da classe
class Funcionario {
    constructor(nome, idade, cargo){
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
}

// Uso da classe
let marcos = new Funcionario("Marcos Bueno", 30, "Fundador");
console.log(marcos);

let alice = new Funcionario("Alice Silva", 24, "Marketing");
console.log(alice);