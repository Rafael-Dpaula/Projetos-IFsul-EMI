/*
//pegar o elemento pelo id
var valor = document.getElementById("valor");

//pegar um elemento pelo nome
var teste = document.getElementsByName("teste");

//pegar pelo nome da class
var divClass = document.getElementsByClassName("classe");

//pegar pelo nome da tag
var titulo = document.getElementsByTagName("h2");

valor.value = "teste aula"
//alterando o primeiro objeto com o name teste

teste[0].innerHTML = "alterando conteudo da div de name teste";
//alterando o primeiro objeto com class = classe

divClass[0].innerHTML = "alterando o conteudo da div de class = classe";
//alterando o titulo de nível h2

titulo[0].innerHTML = "alterando o primeiro título";
titulo[1].innerHTML = "alterando o segundo título";
console.log(titulo.length);

for(i = 0; i < titulo.length; i++){
    titulo[i].innerHTML = "titulo h2 - " + i;
}
*/

//pegar pelo id
valor = document.querySelector("#valor");

//pegar pelo name
teste = document.querySelector("input[name='valor']");

//pegar pela classe
divClass = document.querySelector(".classe");

//pegar pela tag
titulo = document.querySelector("h2");

//------------------------------------------------------------------------------------//

valor.value = "teste aula"
//alterando o primeiro objeto com o name teste

teste.value = "teste com name";

teste.innerHTML = "alterando conteudo da div de name teste";
//alterando o primeiro objeto com class = classe

divClass.innerHTML = "alterando o conteudo da div de class = classe";
//alterando o titulo de nível h2

titulo.innerHTML = "alterando o primeiro título";

//----------------------------------------------------------------------------------//

var botao = document.querySelector("#botao");

function alterar(){
var tabela = document.querySelector("#tabela");
var valor = document.querySelector("#valor").value;
//criar uma linha
var linha = document.createElement("tr");
//criar uma coluna
var coluna = document.createElement("rd");

//atribuir conteudo a colna
coluna.appendChild(document.createTextNode(valor));
//adiciona uma linha
linha.appendChild(coluna);
//adiciona a linha a tabela
tabela.appendChild(linha)
}

botao.addEventListener('click', alterar);