//personagem
//heroi
//missao
//liga
//import, export...
import { Heroi } from "./Heroi.js";

let batman = new Heroi("Batman",
    "Filantropia noturna e planejamento exagerado.",
    [8, 10, 9, 31, 7, 10, 1, 2, 21]
);

let flash = new Heroi("Flash",
    "Entrega antes do prazo",
    [60, 80, 90, 95, 100])

//console.log(batman)
//console.log(batman.getInfo()) // suas informacoes
console.log(batman.calcularMediaPontos()) //mostra a media
console.log(batman.classificar()) //mostra sua classificacao +> iniciante, intermediario ou lendario

console.log(flash.calcularMediaPontos())
console.log(flash.classificar())