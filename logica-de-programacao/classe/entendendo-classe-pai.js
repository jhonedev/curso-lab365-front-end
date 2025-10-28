class Funcionario{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    objterIniciais(){
        return `${this.nome[0]}${this.sobrenome[0]}`
    }

}

class Administrador extends Funcionario{
    pagarSalario(){
        console.log("Pagando salario...")
    }
}

let regina = new Funcionario("Regina", "Silva");

regina.objterIniciais();
regina.obterNomeCompleto();
regina.pagarSalario();





// Definição da classe Usuario
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

// Insira aqui a definição da classe Escritor.
// Lembre-se de usar herança e de criar o método
// de instância publicarArtigo().

class Escritor extends Usuario {
    publicarArtigo(){
        return "Artigo publicado"
    }
}




// Classe Tarefa
class Tarefa {
    constructor(titulo, estaCompleta) {
        this.titulo = titulo;
        this.estaCompleta = estaCompleta;
    }

    obterFormatacao() {
        let status = "";
        if (this.estaCompleta) {
            status = "✅";
        } else {
            status = "⏳";
        }
        return `[${status}] ${this.titulo}`;
    }
}

// Implemente a classe TarefaMarcar
// Não se esqueça de herdar da classe Tarefa
class TarefaMarcar extends Tarefa{
    // Implemente o método de instância marcarComoConcluida()
    marcarComoConcluida(){
        return this.estaCompleta
    }
}

// Uso das classes
let tarefa = new Tarefa("Aprendizagem de Programação", false);
console.log(tarefa.obterFormatacao());

let tarefaMarcar = new TarefaMarcar("Aspirar o chão", false);
console.log(tarefaMarcar.obterFormatacao());

tarefaMarcar.marcarComoConcluida();

console.log(tarefaMarcar); // estaCompleta deve ser true
console.log(tarefaMarcar.obterFormatacao());