function codigoPromocionalValido(codigo){
    if(codigo.length >=5 && codigo.length <= 10){
        return true
    }
    else{
        return false
    }
}

console.log(codigoPromocionalValido("bicicleta"))