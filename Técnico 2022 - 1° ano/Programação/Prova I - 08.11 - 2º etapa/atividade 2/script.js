var alturas = [];
var larguras = [];
function process(){
    let altura = document.getElementById("alt").value;
    let largura = document.getElementById("larg").value;
    alturas.push(parseFloat(altura));
    larguras.push(parseFloat(largura));

    //media:
    let somaL = 0;
    let somaA = 0;
    let mediaA;
    let mediaL;
    for(i in larguras){
        somaL = somaL + larguras[i];
    }
    for(i in alturas){
        somaA = somaA + alturas[i];
    }
    mediaA = somaA / alturas.length;
    mediaL = somaL / larguras.length;

    //prints

    let listaA = document.getElementById("alts");
    let listaL = document.getElementById("largs");

    listaA.innerHTML = alturas;
    listaL.innerHTML = larguras;

    let mediaAlt = document.getElementById("malts");
    let medialarg = document.getElementById("mlargs");

    mediaAlt.innerHTML = mediaA.toFixed(2);
    medialarg.innerHTML = mediaL.toFixed(2);

    limpar()
}
function limpar(){
    document.getElementById("alt").value = "";
    document.getElementById("larg").value = "";
}