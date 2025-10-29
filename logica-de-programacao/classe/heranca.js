//classe base (PAI)
class Jogador{
    constructor(nome, idade, time, energia){
        this.nome = nome;
        this.idade = idade;
        this.time = time;
        this.energia = energia;
    }

    chutouProGol(){
        this.energia = this.energia - 10;
        console.log(`${this.nome} chutou para o gol... ENERGIA: ${this.energia}`);
    }

    desncasar(){
        this.energia = this.energia + 5;
        console.log(`${this.nome} descansou e recuperou energia. ENERGIA: ${this.energia}`);
    }

}

//classe (FILHA)
class Goleiro extends Jogador {

    //sobrescrita => pilar do polimorfismo (POO)
    chutouProGol(){
        this.energia = this.energia - 35;
        console.log(`${this.nome} chutou e agora tem ${this.energia} de energia`)
    }

    agarrar(){
        this.energia = this.energia - 10;
        console.log(`${this.nome} agarrou e agora tem ${this.energia} de energia`)
    }
}

let jogador1 = new Jogador("Zico", 72, "Flamengo", 250);
let goleiro1 = new Goleiro("Marcos", 33, "Botafogo", 850);

// --- jogador
jogador1.chutouProGol();
jogador1.chutouProGol();
jogador1.desncasar();
jogador1.chutouProGol();

// -- goleiro
goleiro1.chutouProGol();
goleiro1.agarrar();