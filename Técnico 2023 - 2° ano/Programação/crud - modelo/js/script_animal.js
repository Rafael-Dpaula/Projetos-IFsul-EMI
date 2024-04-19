var botao = document.getElementById('botao');
var limpar = document.getElementById('limpar');

//vetores

var animais = [];

//outras variaveis
var linha = "";

function submeterForm() {
    var nome = document.getElementById('nome').value;
    var classe = document.getElementById('classe').value;
    var nascimento = document.getElementById('nascimento').value;
    var raca = document.getElementById('raca').value;
    var porte = document.getElementById('porte').value;
    var genero = document.getElementById('genero').value;
    var cor = document.getElementById('cor').value;
    var peso = document.getElementById('peso').value;
    var anamnese = document.getElementById('anamnese').value;
    var tutor = document.getElementById('tutor').value;
    var erros = document.getElementById('erros');

    if (nome.length == 0 || classe.length == 0 || nascimento.length == 0 || raca.length == 0 || peso.length == 0 || porte.length == 0 || genero.length == 0 || cor.length == 0 || anamnese.lenght == 0 || tutor.length == 0) {
        erros.innerHTML = "Todos os campos devem ser informados";
        return;
    }

    var animal = new Animal(gerarID(), nome, classe, nascimento, raca, porte, genero, cor, peso, anamnese, tutor);

    if (linha != "") {// alteracao
        gravarAlteracao(animal);
    } else { //inclusao
        animais.push(animal);
        addLinha(animal);
    }
    gravarNavegador();
    limparCampos();
}

function gravarNavegador() {
    var dados = JSON.stringify(animais)
    localStorage.setItem('animais', dados);
}

function gravarAlteracao(animal) {
    var ind = linha.rowIndex - 1;
    animais[ind] = animal;
    linha.cells[0].innerHTML = animal.nome;
    linha = "";
}

function addLinha(animal) {
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); // cria linha
    //cria coluna
    var campoNome = document.createElement("td");
    var campoAlergias = document.createElement("td");
    var alterar = document.createElement("td");
    var excluir = document.createElement("td");
    // atribuir dados
    campoNome.innerHTML = animal.nome;
    campoAlergias.innerHTML = "";
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
    linha.appendChild(campoAlergias);
    linha.appendChild(alterar);
    linha.appendChild(excluir);

    //adiciona linha na tabela
    tabela.appendChild(linha);
}

function Alterar() {
    linha = this.parentElement.parentElement;
    var ind = linha.rowIndex - 1;
    var animal = animais[ind];

    document.getElementById('nome').value = animal.nome;
    document.getElementById('classe').value = animal.classe;
    document.getElementById('nascimento').value = animal.nascimento;
    document.getElementById('raca').value = animal.raca;
    document.getElementById('porte').value = animal.porte;
    document.getElementById('genero').value = animal.genero;
    document.getElementById('cor').value = animal.peso;
    document.getElementById('anamnese').value = animal.anamnese;
    document.getElementById('tutor').value = animal.tutor;

}

function Excluir() {
    if (confirm("você realmente deseja excluir o animal?")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        //excluir do vetor
        animais.splice(ind - 1, 1);
        //excluir da tabela
        document.getElementById("lista").deleteRow(ind);
        gravarNavegador();
    }

}

function gerarID() {
    var id = 0;
    animais.forEach(function (a) {
        if (a.id > id) {
            id = a.id;
        }
    })
    return id + 1;
}

function mostrarTabela() {
    //verificar se tem dados no local storage
    if (localStorage.hasOwnProperty("animais")) {
        animais = JSON.parse(localStorage.getItem("animais"));
        animais.forEach(animal => { addLinha(animal); });
    }
}

function limparCampos() {
    document.getElementById('form').reset();
    linha = "";
}

mostrarTabela();
botao.addEventListener('click', submeterForm);
limpar.addEventListener('click', limparCampos);