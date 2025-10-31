//personagem
//heroi
//missao
//liga
//import, export...

//import { Personagem } from "./Personagem.js";
import { Heroi } from "./Heroi.js";

let batman = new Heroi("Batman",
    "Filantropia noturna e planejamento exagerado.",
    [8, 10, 9, 7, 10]
); // classe (model) => objeto

console.log(batman)
console.log(batman.getInfo())