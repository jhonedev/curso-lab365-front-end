function localizacaoDaLoja(localidade){
    return `A loja está localizada em ${localidade[0]}, ${localidade[1]}`
}

console.log(localizacaoDaLoja([5.123, 2.374]))
console.log(localizacaoDaLoja([-2.207, 9.319]))