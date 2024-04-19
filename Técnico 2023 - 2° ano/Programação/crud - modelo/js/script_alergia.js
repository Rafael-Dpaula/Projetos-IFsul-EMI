/*var Vfrutas = ["maça", "pera", "melancia", 'banana', 'laranja', 'manga', 'morango', 'bergamota']; 

var dados = JSON.stringify(Vfrutas); // converte vetor para string no formato JSON

console.log("exemplo de gravar dados no browser");
// gravar dados no local storage
localStorage.setItem("Vfrutas", dados); //chave, valor

var frutas2 = [];
//pegar dadps gravados no local storage

frutas2 = JSON.parse(localStorage.getItem("Vfrutas"));

console.log("exemplo de recuperar dados no browser:");
console.log(frutas2);*/

var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");

//vetor para armazenar objetos da classe alergia
var alergias = [];
var linha = "";

function submeterForm() {
    //chamado quando clica no botão gravar
    var nome = document.getElementById("nome").value;
    //validar formu 
    //criar objeto alergia
    var alergia = new Alergia(gerarID(), nome);
    if (linha != "") { // alteracao
        gravarAlteracao(alergia);
        }
        else{
            alergias.push(alergia);
            addLinha(alergia);
        }
        console.log(alergias);

    gravarNavegador();
    limparCampos();
}

function gravarNavegador() {
    var dados = JSON.stringify(alergias);
    localStorage.setItem("alergias", dados);
}

function limparCampos() {
    //chamado quando clica no botão limpar
    document.getElementById("form").reset(); // limpar formulário
}

function addLinha(alergia) {
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); // cria linha
    //cria coluna
    var campoNome = document.createElement("td");
    var alterar = document.createElement("td");
    var excluir = document.createElement("td");
    // atribuir dados
    campoNome.innerHTML = alergia.nome;
    //criar botoes
    var btnAlt = document.createElement("input");
    var btnDel = document.createElement("input");

    btnAlt.setAttribute("type", "button");
    btnDel.setAttribute("type", "button");
    btnAlt.setAttribute("value", "Alterar");
    btnDel.setAttribute("value", "Excluir");
    btnAlt.addEventListener("click", Alterar);
    btnDel.addEventListener("click", Excluir);
    // adicionar botoes nas colunas

    alterar.appendChild(btnAlt);
    excluir.appendChild(btnDel);

    //adiciona colunas na linha
    linha.appendChild(campoNome);
    linha.appendChild(alterar);
    linha.appendChild(excluir);

    //adiciona linha na tabela
    tabela.appendChild(linha);
}

function gravarAlteracao(alergia){
    //cells para pegar as colunas da linha
    //cells[0] -> primeira coluna
    linha.cells[0].innerHTML = alergia.nome;
    var ind = linha.rowIndex -1; //indice da linha da tabela
    alergias[ind] = alergia; //atualiza a alergia no vetor
    linha = ""; // deica linha me branco pois terminou a alteração
}

function Alterar() {
    // this é o botao
    // pega o pai do pai do botao
    linha = this.parentElement.parentElement;
    document.getElementById("nome").value = linha.cells[0].innerHTML;

}

function Excluir() {
    if (confirm("você realmente deseja excluir a alergia?")){
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        //excluir do vetor
        alergias.splice(ind -1, 1);
        //excluir da tabela
        document.getElementById("lista").deleteRow(ind);
        gravarNavegador();
    }

}

function mostrarTabela() {
    //verificar se tem dados no local storage
    if (localStorage.hasOwnProperty("alergias")) {
        alergias = JSON.parse(localStorage.getItem("alergias"));
        alergias.forEach(alergia => { addLinha(alergia); });
    }
}

function gerarID() {
    var id = 0;
    alergias.forEach(function (a) {
        if (a.id > id) {
            id = a.id;
        }
    })
    return id + 1;
}

mostrarTabela();

botao.addEventListener('click', submeterForm);
limpar.addEventListener('click', limparCampos);