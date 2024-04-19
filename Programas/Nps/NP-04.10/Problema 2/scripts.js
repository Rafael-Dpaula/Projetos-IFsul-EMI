
var lista = [];
function inserir(){
    let nota = document.getElementById("notas").value;
    let result = document.getElementById("resultado");
    lista.push(nota);
    result.innerHTML = lista;
    console.log(lista);

}
function remover(){
    let result = document.getElementById("resultado");
    lista.pop();
    result.innerHTML = lista;
    console.log(lista);
}
function maior(){
    let nota = document.getElementById("notas").value;
    let result = document.getElementById("maior");
    let maior = Math.max(...lista);
        result.innerHTML = maior;
    console.log("O maior é: "+maior);
}
function menor(){
    let nota = document.getElementById("notas").value;
    let menor = Math.min(...lista);
    let result = document.getElementById("menor");
    result.innerHTML = menor;
    console.log("O menor é: "+menor);
}