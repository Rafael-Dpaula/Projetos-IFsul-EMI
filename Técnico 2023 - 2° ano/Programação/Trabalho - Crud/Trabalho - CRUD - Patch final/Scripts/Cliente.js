var btnenviar = document.getElementById('enviar');
var btnlimpar = document.getElementById('limpar');

var clientes = [];
var linha = "";

function GerarID() {
    var id = 0;
    clientes.forEach(function (c) {
        if (c.id > id)
            id = c.id;
    });
    return id + 1;
}

function limparCampos() {
    document.getElementById('form').reset();
    linha = "";
}

function Data() {
    var nome = document.getElementById('nome').value;
    var genero = document.getElementById('genero').value;
    var cpf = document.getElementById('cpf').value;
    var dtNascimento = document.getElementById('dtNascimento').value;
    var cidade = (document.getElementById('cidade').value).toLowerCase();
    var uf = (document.getElementById('uf').value).toUpperCase();
    var formaPgto = document.getElementById('frmPgto').value;
    var fone = document.getElementById('fone').value;
    var endereco = document.getElementById('endereco').value;

    if (nome == "" || genero == "" || cpf == "" || dtNascimento == "" || cidade == "" || uf == "" || formaPgto == "" || fone == "" || endereco == "") {
        alert('Por favor preencha todos os campos.');
        return;
    } else {


        let cliente = new Cliente(GerarID(), nome, genero, cpf, dtNascimento, cidade, uf, formaPgto, fone, endereco);


        if (linha != "") {
            salvarAlterar(cliente);
            location.reload();
        } else {
            clientes.push(cliente);
            criarTbl(cliente);
        }

        insert();
        limparCampos();
    }
}

function insert() {
    var dados = JSON.stringify(clientes);
    localStorage.setItem('clientes', dados);
}

function salvarAlterar(cliente) {
    var ind = linha.rowIndex - 1;
    clientes[ind] = cliente;
    linha.cells[0].innerHTML = cliente.nome;
    linha = "";
}

function Alterar() {
    linha = this.parentElement.parentElement;
    var ind = linha.rowIndex - 1;
    var cliente = clientes[ind];
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('genero').value = cliente.genero;
    document.getElementById('cpf').value = cliente.cpf;
    document.getElementById('dtNascimento').value = cliente.dtNascimento;
    document.getElementById('cidade').value = cliente.cidade;
    document.getElementById('uf').value = cliente.uf;
    document.getElementById('frmPgto').value = cliente.formaPgto;
    document.getElementById('fone').value = cliente.fone;
    document.getElementById('endereco').value = cliente.endereco;
}

function Excluir() {
    if (confirm("Confirma a exclusão do Cliente")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        clientes.splice(ind - 1, 1);
        document.getElementById("lista").deleteRow(ind);
        insert();
    }
}

function criarTbl(cliente) {
    var lista = document.getElementById('lista').getElementsByTagName('tbody')[0];
    var linha = document.createElement('tr');

    var nome = document.createElement('td');
    var formaPgto = document.createElement('td');
    var alterar = document.createElement('td');
    var excluir = document.createElement('td');

    nome.setAttribute('id', 'list');
    formaPgto.setAttribute('id', 'list');
    alterar.setAttribute('id', 'list');
    excluir.setAttribute('id', 'list');

    nome.innerHTML = cliente.nome;
    formaPgto.innerHTML = cliente.formaPgto;

    var btnalterar = document.createElement('input');
    var btnexcluir = document.createElement('input');
    btnalterar.setAttribute('value', 'alterar');
    btnalterar.setAttribute('type', 'button');
    btnexcluir.setAttribute('value', 'excluir');
    btnexcluir.setAttribute('type', 'button');

    btnalterar.addEventListener('click', Alterar);
    btnexcluir.addEventListener('click', Excluir);

    alterar.appendChild(btnalterar);
    excluir.appendChild(btnexcluir);

    linha.appendChild(nome);
    linha.appendChild(formaPgto);
    linha.appendChild(alterar);
    linha.appendChild(excluir);

    lista.appendChild(linha);
}

function montarTbl() {
    if (localStorage.hasOwnProperty("clientes")) {
        clientes = JSON.parse(localStorage.getItem("clientes"));
        clientes.forEach(cliente => {
            criarTbl(cliente);
        });
    }
}

montarTbl();
btnenviar.addEventListener('click', Data);
btnlimpar.addEventListener('click', limparCampos);
console.log(clientes);