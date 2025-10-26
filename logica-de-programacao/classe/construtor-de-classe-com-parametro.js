// Definindo a classe
class Transporte {
    constructor(nome, tipo) {
    console.log(`${nome} é do tipo ${tipo}`)
}
}


// Definindo a classe
class Usuario {
    constructor(nome, sobrenome) {
        console.log("Criando uma nova instância da classe Usuario");
        console.log(nome);
        console.log(sobrenome);
    }
}

// Usando a classe
let usuario1 = new Usuario("Samuel", "Dias");
console.log("------");
let usuario2 = new Usuario("Carla", "Bastos");
console.log("=======");

// Definição da classe. Insira o contrutor dentro dela
class Receita {
    constructor(nome, calorias){
      console.log(nome)
      console.log(calorias)
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log("---");
let salada = new Receita("Salada", 400);