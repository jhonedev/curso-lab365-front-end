function obterNomeCompleto(usuario) {
    return `${usuario.nome} ${usuario.sobrenome}`
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "Helena",
    sobrenome: "Mordaz",
    idade: 20
};

let usuario2 = {
    nome: "Bruno",
    sobrenome: "Antunes",
    idade: 31
};
console.log(obterNomeCompleto(usuario1)); // "Helena Mordaz"
console.log(obterNomeCompleto(usuario2)); // "Bruno Antunes"

function obterNomeCompletoFormatado(usuario) {
    return `${usuario.nome} ${usuario.sobrenome.toUpperCase()}`
}

// Não modifique as linhas abaixo
let usuario3 = {
    nome: "Samanta",
    sobrenome: "Damaris",
    idade: 20
};

let usuario4 = {
    nome: "Charlinson",
    sobrenome: "Santos",
    idade: 31
};
console.log(obterNomeCompletoFormatado(usuario3)); // "Samanta DAMARIS"
console.log(obterNomeCompletoFormatado(usuario4)); // "Charlinson SANTOS"

function obterIniciais(usuario) {
    return `${usuario.nome[0]}${usuario.sobrenome[0]}`
}

// Não modifique as linhas abaixo
let usuario5 = {
    nome: "João",
    sobrenome: "Ramiris",
    idade: 20
};

let usuario6 = {
    nome: "Júlia",
    sobrenome: "Pereira",
    idade: 31
};
console.log(obterIniciais(usuario5)); // "JR"
console.log(obterIniciais(usuario6)); // "JP"

function obterDescricaoPessoal(person) {
  return `${person.name} (${person.id}) é um ${person.bio} que vive em ${person.location} com ${person.followers} seguidores.`
    //return "X1 (X2) é um X3 que vive em X4 com X5 seguidores.";
}

// Não modifique as linhas abaixo
let person = {
  "login": "janainajunqueira",
  "id": 3948477,
  "type": "User",
  "name": "Janaína Junqueira",
  "blog": "https://blogjanajuju.online",
  "location": "Florianópolis",
  "bio": "Google Developer Expert • Microsoft MVP • Web Consultant",
  "public_repos": 451,
  "public_gists": 11,
  "followers": 837,
  "following": 294,
  "created_at": "2012-09-12T11:12:34Z",
};

console.log(obterDescricaoPessoal(person));