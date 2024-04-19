var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");
var botaoAlergia = document.getElementById("adicionaAlergia");
var selectAlergia = document.getElementById("alergias");

//vetores 
var vAlergias = [];
var vAlergiasAnimal = []; // vetor para as alergias do animal

// outras variáveis
var linha = "";
var id = "";

// objetos para armazenar no banco
var alergiaDAO = new AlergiaDAO(db);
var animalDAO = new AnimalDAO(db);

function submeterForm() {
    var nome = document.getElementById("nome").value;
    var classe = document.getElementById("classe").value;
    var nascimento = document.getElementById("nascimento").value;
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
    var animal = new Animal(id, nome, classe, nascimento, raca, porte,
        genero, cor, peso, anamnese, tutor, getAlergias());

    if (linha != "") {//alteração
        animalDAO.update(id, animal.toString()).then(() => {
            gravarAlteracao(animal);
        });
    } else { // inclusão
        animalDAO.add(animal.toString()).then((id) => {
            animal.id = id;
            adicionaLinha(animal);
        });
    }
    limparCampos();
}

function gravarAlteracao(animal) {
    linha.cells[0].innerHTML = animal.nome;
    linha.cells[1].innerHTML = mostrarAlergias(animal);
    linha = "";
    id = "";
}

function adicionaLinha(animal) {
    var tabela = document.getElementById("lista").
        getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); //cria a linha
    linha.id = animal.id;
    //criar colunas
    var campoNome = document.createElement("td");
    var campoAlergias = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");
    //atribuir dados
    campoNome.innerHTML = animal.nome;
    campoAlergias.innerHTML = mostrarAlergias(animal);
    // criar botões
    var btnAlterar = document.createElement("input");
    var btnExcluir = document.createElement("input");
    btnAlterar.setAttribute("type", "button");
    btnExcluir.setAttribute("type", "button");
    btnAlterar.setAttribute("value", "Alterar");
    btnExcluir.setAttribute("value", "Excluir");
    btnAlterar.addEventListener("click", alterar);
    btnExcluir.addEventListener("click", excluir);
    // adicionar botões nas colunas
    campoAlterar.appendChild(btnAlterar);
    campoExcluir.appendChild(btnExcluir);
    // adiciona colunas na linha
    linha.appendChild(campoNome);
    linha.appendChild(campoAlergias);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);
    //adiciona linha na tabela
    tabela.appendChild(linha);
}

function alterar() {
    linha = this.parentElement.parentElement; // pai do pai do botão
    id = linha.id;
    animalDAO.getById(id).then((animal) => {
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
        mostrarAlergiasAnimal(animal);
    });
}

function excluir() {
    if (confirm("Confirma a exclusão do animal?")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        id = lin.id;
        // excluir da tabela
        document.getElementById("lista").deleteRow(ind);
        animalDAO.remove(id);
    }
}

function limparCampos() {
    document.getElementById("form").reset();
    vAlergiasAnimal = [];
    document.getElementById("alergias").innerHTML = "";
    id = "";
}

function mostrarTabela() {
    animalDAO.getAll().then((animal) => {
        animal.forEach(a => {
            adicionaLinha(a);
        });
    });
}

function mostrarTodasAlergias() {
    var caixa = document.getElementById("listaAlergias");
    caixa.innerHTML = "<option></option>";
    alergiaDAO.getAll("").then((alergia) => {
        alergia.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
            vAlergias[a.id] = a.nome;
        });
    });
}

function adicionaAlergia() {
    var id = document.getElementById("listaAlergias").value;
    if (verificaAlergia(id)) { // encontrou a alergia no vetor
        alert("Alergia já foi incluída");
        return;
    }
    alergiaDAO.getAll("").then((alergia) => {
        alergia.forEach(a => {
            if (id == a.id) { // objeto encontrado
                vAlergiasAnimal.push(a);
                var caixa = document.getElementById("alergias");
                var op = document.createElement("option");
                op.text = a.nome;
                op.value = a.id;
                caixa.add(op);
            }
        });
    });
}

function mostrarAlergias(animal) {
    var lista = "";
    animal.alergias.forEach(function (a) {
        lista += vAlergias[a] + ", ";
    });
    return lista;
}

function mostrarAlergiasAnimal(animal) {
    var caixa = document.getElementById("alergias");
    caixa.innerHTML = "";
    animal.alergias.forEach(function (a) {
        var op = document.createElement("option");
        var al = new Alergia(a, vAlergias[a]);
        vAlergiasAnimal.push(al);
        op.text = vAlergias[a];
        op.value = a;
        caixa.add(op);
    });
}

function retiraAlergia() {
    var ind = selectAlergia.selectedIndex;
    // remove a alergia do select
    selectAlergia.options[ind].remove();
    // excluir a alergia do vetor de alergias do animal 
    vAlergiasAnimal.splice(ind, 1);
}

function verificaAlergia(id) { // retorna true se encontra a alergia
    var log = 0;
    vAlergiasAnimal.forEach(function (a) {
        if (id == a.id)
            log = 1;
    });
    if (log == 1)
        return true;
    else
        return false;
}

function getAlergias() {
    var v = [];
    vAlergiasAnimal.forEach(function (a) {
        v.push(a.id);
    });
    return v;
}

mostrarTodasAlergias();
mostrarTabela();
botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);
botaoAlergia.addEventListener("click", adicionaAlergia);
selectAlergia.addEventListener('dblclick', retiraAlergia);
