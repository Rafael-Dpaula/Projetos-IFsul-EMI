var perimetros = [];
var areas = [];

function perim(){
    let calcP = document.getElementById("altura").value;
    let calcP2 = document.getElementById("base").value;
    let result = document.getElementById("resultado2");
    let perime = calcP * 2 + calcP2 * 2;
    perimetros.push(perime);
    console.log(perimetros);
    result.innerHTML = perimetros;
}
function area(){
    let calcA = document.getElementById("base").value;
    let calcA2 = document.getElementById("altura").value;
    let result = document.getElementById("resultado");
    let are = calcA * calcA2;
    areas.push(are);
    console.log(areas)
    result.innerHTML = areas;
}
function reset(){
    document.getElementById("base").value = [];
    document.getElementById("altura").value = [];
}
function maiorA(){
    let maior = Math.max(...areas);
    let result = document.getElementById("Marea");
    console.log("a maior area é: "+ maior);
    result.innerHTML = maior;
}
function menorA(){
    let menor = Math.min(...areas);
    let result = document.getElementById("MNarea");
    console.log("a menor area é: "+ menor);
    result.innerHTML = menor;
}
function maiorP(){
    let maior = Math.max(...perimetros);
    let result = document.getElementById("Mperim");
    console.log("o maior perimetro é: "+ maior);
    result.innerHTML = maior;
}
function menorP(){
    let menor = Math.min(...perimetros);
    let result = document.getElementById("MNperim");
    console.log("o menor perimetro é: "+ menor);
    result.innerHTML = menor;
}