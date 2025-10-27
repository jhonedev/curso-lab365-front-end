const listaConvidados = [
    "Ana Silva",
    "Carlos Oliveira", 
    "Marina Santos",
    "Pedro Costa",
    "Julia Fernandes"
];

let existeFulano = false
let entradaUsuario = "Ana silvas"

listaConvidados.forEach(function(convidado){
    //console.log(convidado)
    let convidadoEmMinusculo = convidado.toLowerCase()
    let entradaUsuarioMinusculo = entradaUsuario.toLowerCase()
    
    if(convidadoEmMinusculo.includes(entradaUsuarioMinusculo)){
        existeFulano = true
    }
})

console.log(existeFulano)