export class Missao{
    constructor(titulo){
        this.titulo = titulo;
        this.herois = [];
    }

    adicionarHeroi(heroi){
        this.herois.push(heroi)
    }

    forcaDaEquipe(){
        let total = this.herois.reduce(function(total, heroi){
            return total + heroi.calcularMediaPontos(); // pego a media de cada heroi pra fazer uma media de todos os herois da equipe
        }, 0)

        return total
    }

    getResumo(){
        console.log(`Missao: ${this.titulo}`)
        //this.herois.getInfo
        console.log(`🔥 Forca total: ${this.forcaDaEquipe()}`)
    }
}