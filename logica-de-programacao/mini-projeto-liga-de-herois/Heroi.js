import { Personagem } from "./Personagem.js";
//extends [nome da classe]
export class Heroi extends Personagem {
    constructor(nome, poder, pontos) {
        //super
        super(nome, poder)
        this.pontos = pontos; // somente os herois que tem os pontos
    }
}