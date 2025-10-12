/*adicionarItem() deve adicionar o item que recebe como parâmetro à matriz de itens que 
também é recebida como parâmetro. Depois, deve retornar essa matriz.
exportarMinusculasCSV() deve retornar uma string contendo todos os itens da matriz recebida 
como parâmetro. Nessa string, os itens devem estar em letras minúsculas e separados por uma 
vírgula e um caractere de espaço.*/

function adicionarItem(itens, item) {
  itens.push(item)
  return itens
}
 
function exportarMinusculasCSV(itens) {
  let lista = itens.map(function(item){
    return item.toLowerCase()
  }).join(", ")
  return lista
}