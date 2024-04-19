var btnenviar = document.getElementById('enviar');
var btnlimpar = document.getElementById('limpar');

var clientes = [];
var linha = "";

function GerarID() {
    var id = 0;
    clientes.forEach(function (a) {
        if (a.id > id)
        id = a.id;
});
    return id + 1;
}

function limparCampos() {
    document.getElementById('form').reset();
}

function Data() {
    var nome = document.getElementById('nome').value;
    var genero = document.getElementById('genero').value;
    var cpf = document.getElementById('cpf').value;
    var dtNascimento = document.getElementById('dtNascimento').value;
    var cidade = (document.getElementById('cidade').value).toLowerCase();
    var uf = (document.getElementById('uf').value).toUpperCase();
    var formaPgto = document.getElementById('frmPgto').value;
    var fone= document.getElementById('fone').value;
    var endereco = document.getElementById('endereco').value;
    var pedido = document.getElementById('pedido').value;
    

    let cliente = new Cliente(GerarID(), nome, genero, cpf, dtNascimento, cidade, uf, formaPgto, fone, endereco, pedido);
    
    if (linha != "") {
        salvarAlterar(cliente);
    } else {
        clientes.push(cliente);
        criarTbl(cliente);
    }
    
    insert();
    limparCampos();
}

function insert() {
    var dados = JSON.stringify(clientes);
    localStorage.setItem('clientes', dados);
}

function salvarAlterar(cliente) {
    linha.cells[0].innerHTML = cliente.nome;
    var ind = linha.rowIndex - 1;
    clientes[ind] = cliente;
    linha = "";
}

function alterar() {
    linha = this.parentElement.parentElement;
    document.getElementById('nome').value = linha.cells[0].innerHTML;
}

function excluir() {
    if (confirm("Confirma a exclusão da alergia")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        clientes.splice(ind - 1, 1);
        document.getElementById("lista").deleteRow(ind);
        gravarNavegador();
    }
}

function criarTbl(cliente) {
    var lista = document.getElementById('lista').getElementsByTagName('tbody')[0];
    var linha = document.createElement('tr');
    
    var nome = document.createElement('td');
    var formaPgto = document.createElement('td');
    var pedido = document.createElement('td');
    var alterar = document.createElement('td');
    var excluir = document.createElement('td');
    
    nome.innerHTML = cliente.nome;
    formaPgto.innerHTML = cliente.formaPgto;
    pedido.innerHTML = cliente.pedido;
    
    var btnalterar = document.createElement('input');
    var btnexcluir = document.createElement('input');
    btnalterar.setAttribute('value', 'alterar');
    btnalterar.setAttribute('type', 'button');
    btnexcluir.setAttribute('value', 'excluir'); 
    btnexcluir.setAttribute('type', 'button');
    
    btnalterar.addEventListener('click', alterar);
    btnexcluir.addEventListener('click', excluir);
    
    alterar.appendChild(btnalterar);
    excluir.appendChild(btnexcluir);
    
    linha.appendChild(nome);
    linha.appendChild(formaPgto);
    linha.appendChild(pedido);
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