// criar uma funcao para montar o convite
function montarConvite(dados, convidado){
    
    let textoPadrao = `Caro(a) ${convidado}!
    
    Você foi convidado(a) para o casamento de ${dados.noivo} e ${dados.noiva},
    a ser realizado no dia ${dados.data}, às ${dados.horas} horas.
    
    Contamos com a sua presença!
    
    Atencsiosamente,
    os noivos.`

    console.log(textoPadrao)
}

//dto - data transfer object
let dadosConvite = {
    noivo: "Augustinho",
    noiva: "Bebel",
    data: "17/10/2025",
    horas: 19,
    local: "Praia de Ipanema"
};

montarConvite(dadosConvite, "Jonathan")