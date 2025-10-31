//personagem
//heroi
//missao
//liga
//import, export...
import { Heroi } from "./Heroi.js";
import { Missao } from "./Missao.js";

// let batman = new Heroi("Batman",
//     "Filantropia noturna e planejamento exagerado.",
//     [8, 10, 9, 31, 7, 10, 1, 2, 21]
// );

// let flash = new Heroi("Flash",
//     "Entrega antes do prazo",
//     [60, 80, 90, 95, 100])

// //console.log(batman)
// //console.log(batman.getInfo()) // suas informacoes
// console.log(batman.calcularMediaPontos()) //mostra a media
// console.log(batman.classificar()) //mostra sua classificacao +> iniciante, intermediario ou lendario

// console.log(flash.calcularMediaPontos())
// console.log(flash.classificar())

const herois = [
  { nome: "Batman", poder: "Filantropia noturna", pontos: [80, 95, 88, 100, 60] },
  { nome: "Homem de Ferro", poder: "Riqueza infinita", pontos: [90, 92, 85, 70, 100] },
  { nome: "Hulk", poder: "Raiva produtiva", pontos: [60, 80, 90, 95, 100] },
  { nome: "Flash", poder: "Entrega antes do prazo", pontos: [100, 98, 95, 97, 99] },
  { nome: "Homem-Aranha", poder: "Procrastinação com estilo", pontos: [70, 75, 85, 60, 80] },
];

let missao = new Missao("Projeto liga de Herois")
herois.forEach(function(heroi){
    // console.log(heroi)
    let heroiObjeto = new Heroi(heroi.nome, heroi.poder, heroi.pontos)
    missao.adicionarHeroi(heroiObjeto)
})

missao.getResumo()