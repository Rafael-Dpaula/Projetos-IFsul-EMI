//Escreva uma função que recebe dois valores e retorna  true se um dos
//números for 50 ou se a soma for 50.

function testar(){
    var A = parseInt(document.getElementById("aa").value);
    var B = parseInt(document.getElementById("bb").value);

    var soma = A + B;
    if(A == 50){
        console.log("True");
    }
    else if(B == 50){
        console.log("True");
    }
    else if(soma == 50){
        console.log("True");
    }
    else{
        console.log("False");
    }
    return
}