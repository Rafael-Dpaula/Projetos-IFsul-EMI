function testar(){
    let valorIdade = document.getElementById("idade").value;
    let idade = parseInt(valorIdade);
    console.log(idade);
    let result = isPar(idade);
    console.log(result);
}
function isPar(numero){
    if(numero%2==0){
        return "é par";
    }
    else{
        return "é ímpar";
    }
}