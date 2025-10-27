// Definindo a classe
class Transporte {
    constructor() {
        // Criação de duas variáveis de instância
        this.nome = "Avião";
        this.tipo = "Aéreo";
    }
}

// Definição da classe
class Usuario {
    constructor() {
        this.idade = 30;
        this.votou = false;
    }
}

// Uso da classe
let usuario = new Usuario();
console.log(usuario);

// Definição da classe Receita com construtor e variáveis de instância
class Receita {
    constructor(){
      this.tempoDeCozimento = 30;
      this.alergias = ["nozes"];
    }
}

// Uso da classe
let receita = new Receita();
console.log(receita);