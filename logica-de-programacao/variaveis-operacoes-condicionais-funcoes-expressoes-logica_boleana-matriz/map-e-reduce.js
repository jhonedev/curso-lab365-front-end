//foreach

//.map
let convidados  = ["Ana", "Carlos", "Pedro"]

let convites = convidados.map(function(convidado, indice){
    // console.log(`Item: ${convidado}`)
    return `${indice + 1} - Caro ${convidado}, voce esta convidado(a) para o casamento`
})

console.log(convidados)
console.log(convites)

//.reduce

let custos = [1500, 2300, 50, 123]

let somaCustos = custos.reduce(function(acumulador, custoAtual){ // metodo reduce consigo fazer a soma da lista
    return acumulador + custoAtual // caso nao use o return, o retorno vai ser underfinid
}, 0)

console.log(somaCustos)