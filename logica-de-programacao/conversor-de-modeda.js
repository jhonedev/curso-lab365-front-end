function converterRealParaDolar(valor) {
    // criar a logica para converter
    let dolar = 5.31;
    // converter
    let total = dolar * valor
    //apresentar em tela
    console.log("Total da conversão:")
    console.log("$" + total.toFixed(2))
}

converterRealParaDolar(12)