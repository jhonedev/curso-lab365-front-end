function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
    console.log("Primeiro Retângulo", primeiroRetangulo)
    console.log("Segundo Retângulo", segundoRetangulo)
    let primeiro = primeiroRetangulo[0] * primeiroRetangulo[1]
    let segundo = segundoRetangulo[0] * segundoRetangulo[1]
    let diferenca = primeiro - segundo

    return diferenca
}