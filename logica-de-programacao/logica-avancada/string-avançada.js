let mensagem = "Você prefere um copo d'água ou um guaraná \"caçulinha\"?";

function obterDescritivoDaNota(nota, notaMaisAlta) {
  let X = nota
  let Y = notaMaisAlta - nota
  let Z = nota + 3

  return `Você tem ${X} como nota. Ou seja, ${Y} pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido ${Z}.`
}

// Não modifique as linhas abaixo
console.log(obterDescritivoDaNota(10, 18)) // Você tem 10 como nota. Ou seja, 8 pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido 13.
console.log(obterDescritivoDaNota(15, 20)) // Você tem 15 como nota. Ou seja, 5 pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido 18.