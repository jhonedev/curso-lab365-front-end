import { Personagem } from "./Personagem.js";
//extends [nome da classe]
export class Heroi extends Personagem {
    constructor(nome, poder, pontos) {
        //super
        super(nome, poder)
        this.pontos = pontos; // somente os herois que tem os pontos ex: [1,2,3]
    }

    //calcularMediaPontos
    calcularMediaPontos(){
        //ordenar
        let pontosOrdenados = []
        //sort
        if(this.pontos){ // se existir pelo menos 1 ponto entra na condicao para receber os pontos ordenados
            pontosOrdenados = this.pontos.sort(function(a, b){ //ordenando os numeros com o sort
                return a - b
            });
        }
        //5 - fatiar a lista
        //slice
        let pontosValidos = pontosOrdenados.slice(0, 5) //pegando 5 primeiros numeros da lista dos pontos ordenados
        let soma = pontosValidos.reduce(function(total, ponto){
            return total + ponto
        }, 0)
        
        let media = soma / pontosValidos.length

        return media
    }

    //classificar
    classificar(){
        let media = this.calcularMediaPontos();

        if (media <= 30){
            return "Iniciante"
        }

        if (media <= 70){
            return "Intermediario"
        }

        return "Lendario"
    }
    //getResumo
}