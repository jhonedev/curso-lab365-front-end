function senhaSemEspaco(senha){
    senha = senha.trim()
    if (senha.length >= 10){
        return true
    }
    else {
        return false
    }
}

console.log(senhaSemEspaco(" lazanha"))