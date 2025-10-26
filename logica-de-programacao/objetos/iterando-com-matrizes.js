let usuarios = [
    {
        nome: "Jonathan",
        sobrenome: "Borges"
    },
    {
        nome: "Jessica",
        sobrenome: "Borges"
    },
    {
        nome: "Agnes",
        sobrenome: "Valentina"
    }
]

usuarios.forEach(function(usuario){
    console.log(usuario);
});


let receitas = [
    {
        titulo: "Macarronada",
        alergias: ["chocolate"],
        minutosDePreparo: 15,
        classificacao: 4.5,
    },
    {
        titulo: "Feijoada",
        alergias: ["tempero", "calabreza"],
        minutosDePreparo: 45,
        classificacao: 5,
    },
    {
        titulo: "Pizza",
        alergias: ["oregano", "ovo"],
        minutosDePreparo: 15,
        classificacao: 4.5,
    },
];

let titulos = receitas.map(function(receita){
    //console.log(receita);
    return receita.titulo;
});

console.log(titulos)