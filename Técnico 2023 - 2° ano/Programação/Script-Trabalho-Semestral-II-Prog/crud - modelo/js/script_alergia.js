var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");

//vetor para armazenar objetos da classe alergia
var alergias = [];//vetor vazio
var linha = "";

function submeterform(){
    //chamado quando clicar no botao gravar
    var nome = document.getElementById("nome").value;

    //validar form

    //criar objeto alergia
    var alergia = new Alergia(gerarId(), nome);

    if(linha != ""){//alteração
        gravarAlteracao(alergia);
    }
    else{
        alergias.push(alergia);
        adicionaLinha(alergia);
    }
    console.log(alergias);

    gravarNavegador();
    limparCampos();
}

function gravarNavegador(){
    var dados = JSON.stringify(alergias);
    localStorage.setItem("alergias", dados);
}


function limparCampos(){
    document.getElementById("form").reset();//limpar form
}

function adicionaLinha(alergia){
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); //criar linha
    //criar colunas
    var campoNome = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");
    //atribuir dados
    campoNome.innerHTML = alergia.nome;
 //criar botoes
 var btnAlterar = document.createElement("input");
 var btnExcluir = document.createElement("input");
 btnAlterar.setAttribute("type", "button");
 btnExcluir.setAttribute("type", "button");
 btnAlterar.setAttribute("value", "Alterar");
 btnExcluir.setAttribute("value", "Excluir");
 btnAlterar.addEventListener("click", alterar);
 btnExcluir.addEventListener("click", excluir);
 //adicionar botoes nas colunas
 campoAlterar.appendChild(btnAlterar);
 campoExcluir.appendChild(btnExcluir);
 //adicionar colunas na linha
 linha.appendChild(campoNome);
  linha.appendChild(campoAlterar);
  linha.appendChild(campoExcluir);
  //adicionar linha na tabela
  tabela.appendChild(linha);

}

function gravarAlteracao(alergia){
    //cells para pegar as colunas da linha
    //cells [0] -> primeira coluna

    linha.cells[0].innerHTML = alergia.nome;
    var ind = linha.rowIndex - 1; //indice da linha da tabela
    alergias[ind] = alergia; //atualiza a alergia no vetor
    linha = ""; //deixa linha em branco pois terminou a alteração
}

function alterar(){
//this é o botão
//pega o pai do pai do botão

    linha = this.parentElement.parentElement;
    document.getElementById('nome').value = linha.cells[0].innerHTML;
}

function excluir(){
    if(confirm("Confirma a exclusão da alergia")){
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        //excluir do vetor
        alergias.splice(ind -1, 1);
        //excluir da tabela
        document.getElementById("lista").deleteRow(ind);
        gravarNavegador();
    }
}

function mostrarTabela(){
    //verificar se tem dados no localStorage
    if(localStorage.hasOwnProperty("alergias")){
        alergias = JSON.parse(localStorage.getItem("alergias"));
        alergias.forEach(alergia => {
            adicionaLinha(alergia);
            
        });
    }
}

function gerarId(){
    var id = 0;
    alergias.forEach(function(a){
        if (a.id > id)
        id = a.id;
    });
    return id + 1;
}
mostrarTabela();
botao.addEventListener("click", submeterform);
limpar.addEventListener("click", limparCampos);
































/*
var frutas = ["maças", "abacaxi", "pera", "abacate"];

var dados = JSON.stringify(frutas);//converter evtor para string
// no formato json
console.log("exemplo grvar dados no browser");
//gravar dados no localStorage
localStorage.setItem("frutas", dados);//chave, valor

var frutas2 = [];
//pegar dados gravados no localStorage e converter para vetor

frutas2 = JSON.parse(localStorage.getItem("frutas"));

console.log(frutas2);
*/