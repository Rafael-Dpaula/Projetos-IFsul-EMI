var arrayX = [];
var arrayy = [];
function calcular(){
    var nome = document.getElementById("nome").value;
    var renda = document.getElementById("renda").value;
    var soma = 0;
    var soma1 = soma;
    var soma2 = soma1;
    var soma3 = soma2;
    var soma4 = soma3;
    
    if(renda <= 1903.98 && renda > 0){
      soma = 0;
        console.log("Faixa 1");
        console.log("Isento");
        
        let result = document.getElementById("irpfcontri");
        result.innerHTML = "R$"+" "+soma.toFixed(2);
        
        let porcentagem = (soma / renda)*100; 
        let resultP = document.getElementById("irpfporcent");
        resultP.innerHTML = porcentagem.toFixed(2) + "%";
        console.log(porcentagem);

        arrayX = [renda,1903.98]; arrayy = [0,soma];
    }
    else if(renda >= 1903.99 && renda <= 2826.65 && renda > 0){  
        soma1 =  0.075 * (renda - 1903.98);
        soma = 0;
        console.log("Faixa 2");
        console.log(soma1);
        
        let result = document.getElementById("irpfcontri");
        result.innerHTML = "R$"+" "+soma1.toFixed(2);
        
        let porcentagem = (soma1 / renda)*100; 
        let resultP = document.getElementById("irpfporcent");
        resultP.innerHTML = porcentagem.toFixed(2) + "%";
        console.log(porcentagem);

        arrayX = [1000,1903.98,2826.65]; arrayy = [0,soma,soma1];
    }
    else if(renda >= 2829.66 && renda <= 3751.05 && renda > 0){
        soma2 = 69.20 + 0.15 * (renda - 2826.65);
        soma1 = 69.20;
        soma = 0;
        console.log("Faixa 3");
        console.log(soma2);
        
        let result = document.getElementById("irpfcontri");
        result.innerHTML = "R$"+" "+soma2.toFixed(2);
        
        let porcentagem = (soma2 / renda)*100; 
        let resultP = document.getElementById("irpfporcent");
        resultP.innerHTML = porcentagem.toFixed(2) + "%";
        console.log(porcentagem);

        arrayX = [1000,1903.98,2826.65,3751.05]; arrayy = [0,soma,soma1,soma2];
    }
    else if(renda >= 3751.06 && renda <= 4664.68 && renda > 0){
        soma3 = 207.86 + 0.225 * (renda - 3751.05);
        soma2 = 69.20 + 138.66;
        soma1 = 69.20;
        soma = 0;
        console.log("Faixa 4");
        console.log(soma3);
        
        let result = document.getElementById("irpfcontri");
        result.innerHTML = "R$"+" "+soma3.toFixed(2);
        
        let porcentagem = (soma3 / renda)*100; 
        let resultP = document.getElementById("irpfporcent");
        resultP.innerHTML = porcentagem.toFixed(2) + "%";
        console.log(porcentagem);

        arrayX = [1000,1903.98,2826.65,3751.05,4664.68]; arrayy = [0,soma,soma1,soma2,soma3];
    }
    else if(renda > 4664.68 && renda > 0){
        soma4 = 69.20 + 138.66 + 205.57 + 0.275 * (renda - 4664.68);
        soma3 = 69.20 + 138.66 + 205.57;
        soma2 = 69.20 + 138.66;
        soma1 = 69.20;
        soma = 0;
        console.log("Faixa 5");
        console.log(soma4);
        
        let result = document.getElementById("irpfcontri");
        result.innerHTML = "R$"+" "+soma4.toFixed(2);
        
        let porcentagem = (soma4 / renda)*100; 
        let resultP = document.getElementById("irpfporcent");
        resultP.innerHTML = porcentagem.toFixed(2) + "%";
        console.log(porcentagem);

        arrayy = [0,soma,soma1,soma2,soma3,soma4]; arrayX = [1000,1903.98,2826.65,3751.05,4664.68,renda];
    }
console.log(nome);
MathFunc();
let NOme = document.getElementById("NomeContri");
NOme.innerHTML = nome;

new Chart("meuGrafico", {
    type: "line",
    data: {
      labels: arrayX,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "green",
        data: arrayy
      }]
    },
    options: {
      legend: {display: false},
      scales: {
      }
    }
  });
}

   

function grafico(){
    
}      

function MathFunc(){
    faixa1 = document.getElementById("resultf1");
    faixa2 = document.getElementById("resultf2");
    faixa3 = document.getElementById("resultf3");
    faixa4 = document.getElementById("resultf4");
    faixa5 = document.getElementById("resultf5");
    faixa1.innerHTML = "Se X <= 1903.98, isento de impostos ==> Faixa 1"
    faixa2.innerHTML = "Se 1903.99 < X <= 2826.65, 0.075 * (X - 1903.98) ==> Faixa 2"
    faixa3.innerHTML = "Se 2826.66 < X <= 3751.05, 69.20 + 0.15 * (X - 2826.65) ==> Faixa 3"
    faixa4.innerHTML = "Se 3751,05 < X <= 4664.68, 207.86 + 0.225 * (X - 3751.05) ==> Faixa 4"
    faixa5.innerHTML = "Se X > 4664.68, 413.43 + 0.275 * (X - 4664.68) ==> Faixa 5"
    
}