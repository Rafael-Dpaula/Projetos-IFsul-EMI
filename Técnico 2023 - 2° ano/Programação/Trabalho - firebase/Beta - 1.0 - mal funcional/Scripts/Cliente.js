var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");
var btnFiltrar = document.getElementById("btnFiltrar");
var clienteDAO = new ClienteDAO(db);
var linha = "";
var id = "";

function submeterForm() {
    var nome = document.getElementById("nome").value;
    var genero = document.getElementById("genero").value;
    var cpf = document.getElementById("cpf").value;
    var dtNascimento = document.getElementById("dtNascimento").value;
    var cidade = document.getElementById("cidade").value;
    var uf = document.getElementById("uf").value;
    var formaPgto = document.getElementById("formaPgto").value;
    var fone = document.getElementById("fone").value;
    var endereco = document.getElementById("endereco").value;

    var cliente = new Cliente(id, nome, genero, cpf, dtNascimento, cidade, uf, formaPgto,fone, endereco);

    if (linha != "") { // alteração
        ClienteDAO.update(id, cliente.toString()).then(() => {
            gravarAlteracao(cliente);
        });
    } else {
        clienteDAO.add(cliente.toString()).then((id) => {
            cliente.id = id;
            adicionaLinha(cliente);
        });
    }
    limparCampos();
}

function limparCampos() {
    id = "";
    document.getElementById("form").reset(); // limpar form
}

function adicionaLinha(cliente) {
    var tabela = document.getElementById("lista").
        getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); //cria a linha
    linha.id = cliente.id;
    //criar colunas
    var campoNome = document.createElement("td");
    var campoCpf = document.createElement("td");
    var campoFormaPgto = document.createElement("td");
    var campoCidade = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");
    //atribuir dados
    campoNome.innerHTML = cliente.nome;
    campoCpf.innerHTML = cliente.cpf;
    campoFormaPgto.innerHTML = cliente.formaPagamento;
    campoCidade.innerHTML = `${cliente.cidade}/${cliente.uf}`;
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
    linha.appendChild(campoCpf);
    linha.appendChild(campoFormaPgto);
    linha.appendChild(campoCidade);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);
    //adiciona linha na tabela
    tabela.appendChild(linha);
}

function gravarAlteracao(cliente) {
    linha.cells[0].innerHTML = cliente.nome;
    linha = "";
    id = ""; // deixa linha em branco pois terminou a alteração
}

function alterar() {
    linha = this.parentElement.parentElement;
    document.getElementById('nome').value = linha.cells[0].innerHTML;
    id = linha.id;
}

function excluir() {
    if (confirm("Confirma a exclusão do(a) cliente?")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        id = lin.id;
        document.getElementById("lista").deleteRow(ind);
        clienteDAO.remove(id);
    }
}

function mostrarTabela() {
    var tabela = document.getElementById("lista").
        getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; // limpar linhas da tabela
    var pesquisa = document.getElementById("filtro").
        value.toLowerCase();
    clienteDAO.getAll(pesquisa).then((clientes) => {
        clientes.forEach(al => {
            adicionaLinha(al);
        });
    });
}
mostrarTabela();
botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);
btnFiltrar.addEventListener("click", mostrarTabela);


