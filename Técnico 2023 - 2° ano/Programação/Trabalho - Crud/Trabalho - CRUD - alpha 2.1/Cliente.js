var btnenviar = document.getElementById('enviar');
var btnlimpar = document.getElementById('limpar');
var pedido = document.getElementById('pedido');

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

function Alterar() {
    linha = this.parentElement.parentElement;
    document.getElementById('nome').value = linha.cells[0].innerHTML;
}

function Excluir() {
    if (confirm("Confirma a exclusão da alergia")) {
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
    var pedido = document.createElement('td');
    var alterar = document.createElement('td');
    var excluir = document.createElement('td');
    
    nome.setAttribute('id', 'list');
    formaPgto.setAttribute('id', 'list');
    pedido.setAttribute('id', 'list');
    alterar.setAttribute('id', 'list');
    excluir.setAttribute('id', 'list');

    nome.innerHTML = cliente.nome;
    formaPgto.innerHTML = cliente.formaPgto;
    pedido.innerHTML = cliente.pedido;
    
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

function mostrarTodosPedidos() {
    if (localStorage.hasOwnProperty("clientes")) {
        vTodosPedidos = JSON.parse(localStorage.getItem("clientes"));
        var caixa = document.getElementById("listaClientes");
        caixa.innerHTML = "<option></option>";
        vTodosPedidos.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
        });
    }
}

function adicionaPedido() {
    var id = document.getElementById("listaPedidos").value;
    vTodosPedidos.forEach(function (a) {
        if (id == a.id) {
            vPedidosCliente.push(a);
            console.log(a);
            var caixa = document.getElementById("clientes");
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
        }
    });
}

function mostrarClientes(cliente) {
    var lista = "";
    cliente.clientes.forEach(function (c) {
        lista += c.nome + ", ";
    });
    return lista;
}

function mostrarPedidosCliente() {
    var caixa = document.getElementById("clientes");
    caixa.innerHTML = "";
    vPedidosCliente.forEach(function (a) {
        var op = document.createElement("option");
        op.text = a.nome;
        op.value = a.id;
        caixa.add(op);
    });
}

mostrarTodosPedidos();
montarTbl();
btnenviar.addEventListener('click', Data);
btnlimpar.addEventListener('click', limparCampos);
console.log(clientes);