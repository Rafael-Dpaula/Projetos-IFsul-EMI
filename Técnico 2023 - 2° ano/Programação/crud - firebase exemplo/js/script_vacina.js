var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");
var vacinaDAO = new VacinaDAO(db);
var linha = "";
var id = "";

function submeterForm() { //chamado quando clica no botão gravar
    var descricao = document.getElementById("descricao").value;
    var valor = document.getElementById("valor").value;

    var vacina = new Vacina(id, descricao, valor);

    if (linha != "") { // alteração
        vacinaDAO.update(id, vacina.toString()).then(() => {
            gravarAlteracao(vacina);
        });
    } else {
        vacinaDAO.add(vacina.toString()).then((id) => {
            vacina.id = id;
            adicionaLinha(vacina);
        });
    }
    limparCampos();
}

function limparCampos() {
    id = "";
    document.getElementById("form").reset(); // limpar form
}

function adicionaLinha(vacina) {
    var tabela = document.getElementById("lista").
        getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); //cria a linha
    linha.id = vacina.id;
    //criar colunas
    var campoDesc = document.createElement("td");
    var campoValor = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");
    //atribuir dados
    campoDesc.innerHTML = vacina.descricao;
    campoValor.innerHTML = vacina.valor;
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
    linha.appendChild(campoDesc);
    linha.appendChild(campoValor);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);
    //adiciona linha na tabela
    tabela.appendChild(linha);
}

function gravarAlteracao(vacina) {
    linha.cells[0].innerHTML = vacina.nome;
    linha = "";
    id = ""; // deixa linha em branco pois terminou a alteração
}

function alterar() {
    linha = this.parentElement.parentElement;
    document.getElementById('descricao').value = linha.cells[0].innerHTML;
    document.getElementById('valor').value = linha.cells[1].innerHTML;
    id = linha.id;
}

function excluir() {
    if (confirm("Confirma a exclusão da vacina?")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        id = lin.id;
        document.getElementById("lista").deleteRow(ind);
        vacinaDAO.remove(id);
    }
}

function mostrarTabela() {
    vacinaDAO.getAll().then((vacinas) => {
        vacinas.forEach(al => {
            adicionaLinha(al);
        });
    });
}
mostrarTabela();
botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);

