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

    if(nome == '' || genero == '...' || cpf == '' || dtNascimento == '' || cidade == '' || uf == '' || formaPgto == '...' || fone == '' || endereco == ''){
        alert('Preencha todos os campos');
        return;
    }

    var cliente = new Cliente(id, nome, cpf, genero, dtNascimento, cidade, uf, formaPgto, fone, endereco);

    if (linha != "") { 
        clienteDAO.update(id, cliente.toString()).then(() => {
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
    document.getElementById("form").reset(); 
}

function adicionaLinha(cliente) {
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr");
    linha.id = cliente.id;

    var campoNome = document.createElement("td");
    var campoCpf = document.createElement("td");
    var campoPgto = document.createElement("td");
    var campoCidade = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");

    campoNome.innerHTML = cliente.nome;
    campoCpf.innerHTML = cliente.cpf;
    campoPgto.innerHTML = cliente.formaPgto;
    campoCidade.innerHTML = `${cliente.cidade}/${cliente.uf}`;

    var btnAlterar = document.createElement("input");
    var btnExcluir = document.createElement("input");

    btnAlterar.setAttribute("type", "button");
    btnExcluir.setAttribute("type", "button");
    btnAlterar.setAttribute("value", "alterar");
    btnExcluir.setAttribute("value", "excluir");
    btnAlterar.addEventListener("click", alterar);
    btnExcluir.addEventListener("click", excluir);

    campoAlterar.appendChild(btnAlterar);
    campoExcluir.appendChild(btnExcluir);

    linha.appendChild(campoNome);
    linha.appendChild(campoCpf);
    linha.appendChild(campoPgto);
    linha.appendChild(campoCidade);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);

    tabela.appendChild(linha);
}

function gravarAlteracao(cliente) {
    linha.cells[0].innerHTML = cliente.nome;
    linha.cells[1].innerHTML = cliente.cpf;
    linha.cells[2].innerHTML = cliente.formaPgto;
    linha.cells[3].innerHTML = `${cliente.cidade}/${cliente.uf}`;
    linha = "";
    id = "";
}

function alterar() {
    linha = this.parentElement.parentElement;
    id = linha.id;
    clienteDAO.getById(id).then((cliente) => {
        document.getElementById("nome").value = cliente.nome;
        document.getElementById("cpf").value = cliente.cpf;
        document.getElementById("genero").value = cliente.genero;
        document.getElementById("dtNascimento").value = cliente.dtNascimento;
        document.getElementById("cidade").value = cliente.cidade;
        document.getElementById("uf").value = cliente.uf;
        document.getElementById("formaPgto").value = cliente.formaPgto;
        document.getElementById("fone").value = cliente.fone;
        document.getElementById("endereco").value = cliente.endereco;
    });
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
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
        tabela.innerHTML = ""; 
    var pesquisa = document.getElementById("filtro").value.toLowerCase();
    clienteDAO.getAll(pesquisa).then((clientes) => {
        clientes.forEach(cl => {
            adicionaLinha(cl);
        });
    });
}
mostrarTabela();
botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);
btnFiltrar.addEventListener("click", mostrarTabela);


