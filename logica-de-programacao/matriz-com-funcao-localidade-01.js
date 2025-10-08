function localizacaoDaLoja(nome, localidade){
    return `${nome}, localiza-se em ${localidade[0]}, ${localidade[1]}`
}

console.log(localizacaoDaLoja("O supermercado", [5.123, 2.374]))
console.log(localizacaoDaLoja("A academia", [-2.207, 9.319]))