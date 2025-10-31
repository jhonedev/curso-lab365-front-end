//exportacao nomedada
//import {personagem} from...

export class Personagem {
    constructor(nome, poder){
        this.nome = nome;
        this.poder = poder;
    }

    getInfo(){
        return `${this.nome} - ${this.poder}`
    }
}