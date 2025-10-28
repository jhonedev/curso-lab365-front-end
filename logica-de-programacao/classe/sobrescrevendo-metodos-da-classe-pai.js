// Definição da classe
class Veiculos {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    marcaEAno() {
        return `Este veículo é de ${this.ano}, da marca ${this.marca}`;
    }
}

class Carro extends Veiculos {
    marcaEAno() {
        return `Este carro é de ${this.ano}, da marca ${this.marca}`;
    }
}

// Classe Usuario
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    podeVotar() {
        return this.idade >= 16;
    }
}

// Implemente a classe Escritor
// Ela será filha da classe Usuario
class Escritor extends Usuario{
    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome} [escritor]`;
    }

    publicarArtigo(){
        return "Artigo publicado"
    }
}

// Testando a classe
let escritora = new Escritor ("Helena", "Silva", 22);
console.log(escritora.obterNomeCompleto());
escritora.publicarArtigo();

// Definição da classe Funcionario
class Funcionario {
    constructor(nome, sobrenome, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cargo = cargo;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    obterIniciais() {
        return this.nome[0] + this.sobrenome[0];
    }

    obterPosicao() {
        return `${this.nome} trabalha como ${this.cargo}`;
    }
}

// Defina aqui a classe Gerente
// Lembre-se de usar herança de classe
class Gerente extends Funcionario{
    obterPosicao(){
        return `${this.nome} é o gerente`
    }
}

// Uso da classe Funcionario
let sueli = new Funcionario("Sueli", "Borges", "desenvolvedora");
console.log(sueli.obterNomeCompleto());
console.log(sueli.obterPosicao());

// Uso da classe Gerente
let carlos = new Gerente("Carlos", "Santos", "gerente");
console.log(carlos.obterNomeCompleto());
console.log(carlos.obterPosicao());