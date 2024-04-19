var salarios = [];
var nomes = [];

function calc(){
    let nome = document.getElementById("nome").value;
    let salario = document.getElementById("salario").value;
    nomes.push(nome);
    salarios.push(parseFloat(salario));

    console.log(salarios);
    console.log(nomes);
    limparCampos();

    let resultN = document.getElementById("LNome");
    resultN.innerHTML = nomes;
    let resultS = document.getElementById("Lsala");
    resultS.innerHTML = salarios;
}

function media(){
let media = 0;
let soma = 0;
    for (i in salarios){
        soma = soma + salarios[i];
   }
media = soma/salarios.length;
let result = document.getElementById("mediaR");
result.innerHTML = media;   
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("salario").value = "";
}

function Limpar(){
    salarios = [];
    nomes = [];
    console.log(salarios);
    console.log(nomes);

    let resultN = document.getElementById("LNome");
    resultN.innerHTML = nomes;
    let resultS = document.getElementById("Lsala");
    resultS.innerHTML = salarios;  
}

function mostrar(){
    console.log(salarios);
    console.log(nomes);
    
    let resultN = document.getElementById("LNome");
    resultN.innerHTML = nomes;
    let resultS = document.getElementById("Lsala");
    resultS.innerHTML = salarios;
}