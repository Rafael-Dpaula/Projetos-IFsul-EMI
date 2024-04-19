var idades = [];
var alturas = [];

function adicionar(){
    let alt = document.getElementById("altura").value;
    let idad = document.getElementById("idade").value;
    idades.push(parseInt(idad));
    alturas.push(parseFloat(alt));
    console.log(idades);
    console.log(alturas);
    limparCampos();

    let resultI = document.getElementById("Lida");
    let resultA = document.getElementById("Lalt");
    resultI.innerHTML = idades;
    resultA.innerHTML = alturas;
}
function limparCampos(){
    document.getElementById("altura").value = "";
    document.getElementById("idade").value = "";
}
function limpar(){
    idades = [];
    alturas = [];
    console.log(idades);
    console.log(alturas);

    let resultI = document.getElementById("Lida");
    let resultA = document.getElementById("Lalt");
    resultI.innerHTML = idades;
    resultA.innerHTML = alturas;
} 
function Midades(){
    let media = 0;
    let soma = 0;
    for(i in idades){
        soma = soma + idades[i];
    }
    media = soma/idades.length;
    let result = document.getElementById("mida");
    result.innerHTML = media;
}
function Malturas(){
    let media = 0;
    let soma = 0;
    for(i in alturas){
        soma = soma + alturas[i];
    }
    media = soma/alturas.length;
    console.log(media);

    let result = document.getElementById("malt");
    result.innerHTML = media;
}
function mostrar(){
    let resultI = document.getElementById("Lidad");
    let resultA = document.getElementById("Lalt");
    resultI.innerHTML = idades;
    resultA.innerHTML = alturas;
}