//Escreva uma função que retorne o valor gasto de energia elétrica por um 
//dispositivo. A função deve receber o valor do kw/h, a potência do dispositivo
//e quantas horas ficou ligado. Leia os valores de entrada
//e mostre na tela o valor gasto.

function gasto(){
    let kwh = document.getElementById("kwh").value;
    let potencia = document.getElementById("potencia").value;
    let tempo = document.getElementById("tempo").value;

    let consumo = (tempo * potencia)/1000;
    let gasto = consumo * kwh;

    console.log("o gasto deste dispositivo foi de: " + gasto.toFixed(2) + "R$");
    console.log("o dispositivo estava na potencia de: " + potencia + "w");
    console.log("foi usado durante o tempo estimado de: "+ tempo + " Horas");
    console.log("o kw/H está custando aproximadamente "+ kwh +"R$");
    console.log("o dispositivo teve um consumo aproximado de: "+ consumo + "kw/H");
    return
}