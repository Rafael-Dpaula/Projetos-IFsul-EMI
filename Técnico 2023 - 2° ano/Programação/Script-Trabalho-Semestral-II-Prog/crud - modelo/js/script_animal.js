var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");
var botaoAlergia = document.getElementById("adicionaAlergia");
var selectalergia = document.getElementById("alergias");

//vetores

var animais = [];
var vTodasAlergias = []; //vetor com todas as alergias cadastradas
var vAlergiasAnimal = [];// vetor para alergias do animal

//outras variaveis
var linha = "";

function submeterForm() {
    var nome = document.getElementById("nome").value;
    var classe = document.getElementById("classe").value;
    var nascimento = document.getElementById("nascimento").value
    var raca = document.getElementById("raca").value;
    var porte = document.getElementById("porte").value;
    var genero = document.getElementById("genero").value;
    var cor = document.getElementById("cor").value;
    var peso = document.getElementById("peso").value;
    var anamnese = document.getElementById("anamnese").value;
    var tutor = document.getElementById("tutor").value;
    var erros = document.getElementById("erros");
    if (nome.length == 0) {
        erros.innerHTML = "O campo nome deve ser informado";
        return;
    }
    var animal = new Animal(gerarId(), nome, classe, nascimento, raca, porte, genero, cor, peso, anamnese, tutor);

    // gravar no objeto animal as suas alergias
    animal.alergias = vAlergiasAnimal;

    if (linha != "") {//alteração
        gravarAlteracao(animal);
    }
    else {//Inclusão
        animais.push(animal);
        adicionaLinha(animal);
    }
    gravarNavegador();
    limparCampos();
}

function gravarNavegador() {
    var dados = JSON.stringify(animais);
    localStorage.setItem("animais", dados);
}

function gravarAlteracao(animal) {
    var ind = linha.rowIndex - 1;
    animais[ind] = animal;
    linha.cells[0].innerHTML = animal.nome;
    linha.cells[1].innerHTML = mostrarAlergias(animal);
}

function adicionaLinha(animal) {
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); //criar linha
    //criar colunas
    var campoNome = document.createElement("td");
    var campoAlergias = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");
    //atribuir dados
    campoNome.innerHTML = animal.nome;
    campoAlergias.innerHTML = mostrarAlergias(animal);
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
    linha.appendChild(campoAlergias);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);
    //adicionar linha na tabela
    tabela.appendChild(linha);

}

function alterar() {
    linha = this.parentElement.parentElement; // pai do pai do botão
    var ind = linha.rowIndex - 1;
    var animal = animais[ind];
    console.log(animal);
    document.getElementById("nome").value = animal.nome;
    document.getElementById("classe").value = animal.classe;
    document.getElementById("nascimento").value = animal.nascimento;
    document.getElementById("raca").value = animal.raca;
    document.getElementById("porte").value = animal.porte;
    document.getElementById("genero").value = animal.genero;
    document.getElementById("cor").value = animal.cor;
    document.getElementById("peso").value = animal.peso;
    document.getElementById("anamnese").value = animal.anamnese;
    document.getElementById("tutor").value = animal.tutor;
    vAlergiasAnimal = animal.alergias;
    mostrarAlergiasAnimal();

}

function excluir() {
    if (confirm("Confirma a exclusão do animal")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        //excluir do vetor
        animais.splice(ind - 1, 1);
        //excluir da tabela
        document.getElementById("lista").deleteRow(ind);
        gravarNavegador();
    }

}

function gerarId() {
    var id = 0;
    animais.forEach(function (a) {
        if (a.id > id)
            id = a.id;
    });
    return id + 1;
}

function limparCampos() {
    document.getElementById("form").reset();
    vAlergiasAnimal = [];
    document.getElementById("alergias").innerHTML = "";
    linha = "";
}

function mostrarTabela() {
    //verificar se tem dados no localStorage
    if (localStorage.hasOwnProperty("animais")) {
        animais = JSON.parse(localStorage.getItem("animais"));
        animais.forEach(animal => {
            adicionaLinha(animal);

        });
    }
}

function mostrarTodasAlergias() {
    //verificar se tem dados no localStorage
    if (localStorage.hasOwnProperty("alergias")) {
        vTodasAlergias = JSON.parse(localStorage.getItem("alergias"));
        var caixa = document.getElementById("listaAlergias");
        caixa.innerHTML = "<option></option>";
        vTodasAlergias.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op); //adiciona a alergia na caixa de seleção
        });
    }
}

function adicionaAlergia() {
    var id = document.getElementById("listaAlergias").value;

    if (verificaAlergia(id)) { //encontrou a alergia no vetor
        alert('Alergia já foi incluída');
        return;
    }

    vTodasAlergias.forEach(function (a) {
        //percorrer o vetor para achar o objeto
        if (id == a.id) {//objeto encontrado
            vAlergiasAnimal.push(a);
            console.log(a);
            var caixa = document.getElementById("alergias");
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
        }
    });
}

function mostrarAlergias(animal) {
    var lista = "";
    animal.alergias.forEach(function (a) {
        lista += a.nome + ", ";
    });
    return lista;
}

function mostrarAlergiasAnimal() {
    var caixa = document.getElementById("alergias");
    caixa.innerHTML = "";
    vAlergiasAnimal.forEach(function (a) {
        var op = document.createElement("option");
        op.text = a.nome;
        op.value = a.id;
        caixa.add(op);
    });
}

function remove_alergia() {
    let ind = selectalergia.selectedIndex;
    selectalergia.options[ind].remove();

    vAlergiasAnimal.splice(ind, 1);
    console.log(vAlergiasAnimal)
}

function verificaAlergia(id) {
    var log = 0;
    vAlergiasAnimal.forEach(function (a) {
        if (id == a.id) {
            log = 1;
        }
    });
    if (log == 1){
        return true;
    }else{
        return false
}}

mostrarTodasAlergias();
mostrarTabela();
selectalergia.addEventListener('dblclick', remove_alergia);
botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);
botaoAlergia.addEventListener("click", adicionaAlergia);