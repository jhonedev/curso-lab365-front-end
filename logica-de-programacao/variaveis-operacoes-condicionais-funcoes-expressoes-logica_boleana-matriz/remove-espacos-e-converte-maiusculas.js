function pegueNome(nome) {
    nome = nome.toUpperCase()
    nome = nome.trim()
    return nome
}

console.log(pegueNome(" bruno"))
console.log(pegueNome(" alex  "))