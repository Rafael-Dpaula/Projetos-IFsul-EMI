var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");

function LimparTabela(){

    var tabela = document.getElementById("tabela");
    tabela.innerHTML = " ";
}

function testar(){

    var texto = document.getElementById("valor").value;
    var tabela = document.getElementById("tabela");
    var linha = document.createElement("tr");
    var coluna = document.createElement("td");

    
    coluna.appendChild(document.createTextNode(texto));
    linha.appendChild(coluna);
    tabela.appendChild(linha);

}

botao.addEventListener("click", testar);
limpar.addEventListener("click", LimparTabela)