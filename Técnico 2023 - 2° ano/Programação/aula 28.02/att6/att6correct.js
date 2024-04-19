function verifica(x, y){
    let soma = x + y;
    if(x == 50 || y == 50 || soma == 50){///verdadeira
        return true
    } 
    else{
        return false
    }

}
console.log(verifica(40,60));//false
console.log(verifica(50,60));//true
console.log(verifica(40,10));//true