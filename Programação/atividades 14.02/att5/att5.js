//Escreva uma função que recebe dois valores inteiros e calcula a soma dos
//inteiros fornecidos. Se os dois valores forem iguais, retorna o triplo de sua
//soma.

function teste(){
    A = parseFloat(document.getElementById("aa").value);
    B = parseFloat(document.getElementById("bb").value);

    if(A == B && B == A){
        let soma = (A + B) * 3;
        console.log("Os valores registrados são iguais. Sua multiplicação por 3 da soma é de: " + soma);
    }
    else{
        let soma = A + B;
        console.log("Os valores digitados são diferentes. Sua soma é de: " + soma);
    }
    console.log("O número A foi registrado como: " + A);
    console.log("O número B foi registrado como: " + B);
    return
}