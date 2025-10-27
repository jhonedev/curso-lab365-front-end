function converterParaFormatoCSV(notas){
    notasCsv = notas.join(";")
    return notasCsv
}

function exportaCSV(usuarios) {
  let usuario = usuarios.join(", ")
  return usuario
}

// Não modifique as linhas abaixo
console.log(exportaCSV(["Alice", "Bruno", "Sara", "Augusto"])) // "Alice, Bruno, Sara, Augusto"
console.log(exportaCSV(["Samuel", "Alexandre", "Carla"])) // "Samuel, Alexandre, Carla"



console.log(converterParaFormatoCSV([10, 15, 13, 19])) // "10;15;13;19"
console.log(converterParaFormatoCSV([7, 13, 20, 15])) // "7;13;20;15"