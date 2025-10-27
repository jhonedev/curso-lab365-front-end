function ultimaTemperatura(temperaturas){
    let ultimaTemperatura = temperaturas.length -1
    return `A última temperatura está na posição ${ultimaTemperatura}`
}

console.log(ultimaTemperatura([-5, 12, 15])) // "A última temperatura está na posição 2"
console.log(ultimaTemperatura([13, 10])) // "A última temperatura está na posição 1"