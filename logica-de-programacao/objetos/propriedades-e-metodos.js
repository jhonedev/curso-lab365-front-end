let professor = {
    nome: "Luana",
    sobrenome: "Borges",
    fazerChamada: function(alunos) {
        alunos.map(function(aluno) {
            console.log(`${aluno}`)
        })
    }
};


//Qual a maneira correta de chamar o método fazerChamada()?

professor.fazerChamada(["Maria", "Zenélia", "Jonatão", "Henrique"]);