var enviar = document.getElementById("enviar");
var limpar = document.getElementById("limpar");
var btnPedido = document.getElementById("adicionaPedido");
var btnCliente = document.getElementById("adicionaCliente");
var produtos = document.getElementById("produtos");
var clientes = document.getElementById("clientes");

var pedidos = [];
var vTodosProdutos = [];
var vProdutosPedido = [];

var vTodosClientes = [];
var vClientePedido = [];

var linha = "";

function gerarID() {
    var id = 0;
    pedidos.forEach(function (p) {
        if (p.id > id)
            id = p.id;
    });
    return id + 1;
}

function limparCampos() {
    document.getElementById('form').reset();
    document.getElementById('produtos').innerHTML = "";
    document.getElementById('clientes').innerHTML = "";
    linha = "";
    vProdutosPedido = [];
    vClientePedido = [];
}

function Data() {
    var desc = document.getElementById('desc').value;
    var valorTotal = document.getElementById('valorTotal').value;
    var horaPedido = document.getElementById('hrPedido').value;
    var dtPedido = document.getElementById('dataPedido').value;

    if (desc == "" || valorTotal == "" || horaPedido == "" || dtPedido == "") {
        alert('Por favor preencha todos os campos.');
        return;
    } else {

        var pedido = new Pedido(gerarID(), desc, valorTotal, horaPedido, dtPedido);

        pedido.produtos = vProdutosPedido;
        pedido.clientes = vClientePedido;

        if (linha != "") {
            salvarAlterar(pedido);
            location.reload();
        } else {
            pedidos.push(pedido);
            criarTbl(pedido);
        }

        navegador();
        limparCampos();
    }
}

function navegador() {
    var dados = JSON.stringify(pedidos);
    localStorage.setItem('pedidos', dados);
}

function salvarAlterar(pedido) {
    linha.cells[0].innerHTML = pedido.nome;
    var ind = linha.rowIndex - 1;
    pedidos[ind] = pedido;
    linha = "";
}

function Alterar() {
    linha = this.parentElement.parentElement;
    var ind = linha.rowIndex - 1;
    var pedido = pedidos[ind];

    document.getElementById('desc').value = pedido.desc;
    document.getElementById('valorTotal').value = pedido.valorTotal;
    document.getElementById('hrPedido').value = pedido.horaPedido;
    document.getElementById('dataPedido').value = pedido.dtPedido;
    vProdutosPedido = pedido.produtos;
    vClientePedido = pedido.clientes;
    mostrarProdutosPedido();
    mostrarClientesPedido();
}

function Excluir() {
    if (confirm("Confirma a exclusão do Cliente")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        pedidos.splice(ind - 1, 1);
        document.getElementById("lista").deleteRow(ind);
        navegador();
    }
}

function criarTbl(pedido) {
    var lista = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var linha = document.createElement('tr');

    var descP = document.createElement('td');
    var valorT = document.createElement('td');
    var hrP = document.createElement('td');
    var dataD = document.createElement('td');
    var campoProdutos = document.createElement('td');
    var campoCliente = document.createElement('td');
    var campoExcluir = document.createElement('td');
    var campoAlterar = document.createElement('td');

    descP.setAttribute('id', 'list');
    valorT.setAttribute('id', 'list');
    hrP.setAttribute('id', 'list');
    dataD.setAttribute('id', 'list');
    campoProdutos.setAttribute('id', 'list');
    campoCliente.setAttribute('id', 'list');
    campoExcluir.setAttribute('id', 'list');
    campoAlterar.setAttribute('id', 'list');


    descP.innerHTML = pedido.desc;
    valorT.innerHTML = pedido.valorTotal;
    hrP.innerHTML = pedido.horaPedido;
    dataD.innerHTML = pedido.dtPedido;
    campoProdutos.innerHTML = mostrarProdutos(pedido);
    campoCliente.innerHTML =  mostrarCliente(pedido);

    var btnAlterar = document.createElement('input');
    var btnExcluir = document.createElement('input');

    btnAlterar.setAttribute('type', 'button');
    btnAlterar.setAttribute('value', 'alterar');
    btnExcluir.setAttribute('type', 'button');
    btnExcluir.setAttribute('value', 'excluir');

    btnAlterar.addEventListener('click', Alterar);
    btnExcluir.addEventListener('click', Excluir);

    campoAlterar.appendChild(btnAlterar);
    campoExcluir.appendChild(btnExcluir);

    linha.appendChild(descP);
    linha.appendChild(valorT);
    linha.appendChild(hrP);
    linha.appendChild(dataD);
    linha.appendChild(campoProdutos);
    linha.appendChild(campoCliente);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);

    lista.appendChild(linha);
}

function montarTbl() {
    if (localStorage.hasOwnProperty("pedidos")) {
        pedidos = JSON.parse(localStorage.getItem("pedidos"));
        pedidos.forEach(pedido => {
            criarTbl(pedido);
        });
    }
}

function mostrarTodosProdutos() {
    if (localStorage.hasOwnProperty("produtos")) {
        vTodosProdutos = JSON.parse(localStorage.getItem("produtos"));
        var caixa = document.getElementById("listaProdutos");
        caixa.innerHTML = "<option></option>";
        vTodosProdutos.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
        });
    }
}

function adicionaProduto() {
    var id = document.getElementById("listaProdutos").value;
    if (verificaProduto(id)) {
        alert("produto duplicado, já foi adicionado");
        return;
    }
    vTodosProdutos.forEach(function (p) {
        if (id == p.id) {
            vProdutosPedido.push(p);
            console.log(p);
            var caixa = document.getElementById("produtos");
            var op = document.createElement("option");
            op.text = p.nome;
            op.value = p.id;
            caixa.add(op);
        }
    });
}

function mostrarProdutos(pedido) {
    var lista = "";
    pedido.produtos.forEach(function (p) {
        lista += p.nome + ", ";
    });
    return lista;
}

function mostrarProdutosPedido() {
    var caixa = document.getElementById("produtos");
    caixa.innerHTML = "";
    vProdutosPedido.forEach(function (p) {
        var op = document.createElement("option");
        op.text = p.nome;
        op.value = p.id;
        caixa.add(op);
    });
}

function remove_produto() {
    let ind = produtos.selectedIndex;
    produtos.options[ind].remove();

    vProdutosPedido.splice(ind, 1);
    console.log(vProdutosPedido)
}

function verificaProduto(id) {
    var log = 0;
    vProdutosPedido.forEach(function (p) {
        if (id == p.id) {
            log = 1;
        }
    });
    if (log == 1) {
        return true;
    } else {
        return false
    }
}

function mostrarTodosClientes() {
    if (localStorage.hasOwnProperty("clientes")) {
        vTodosClientes = JSON.parse(localStorage.getItem("clientes"));
        var caixa = document.getElementById("listaClientes");
        caixa.innerHTML = "<option></option>";
        vTodosClientes.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
        });
    }
}

function adicionaCliente() {
    console.log(btnCliente)
    var id = document.getElementById("listaClientes").value;
    if (verificaCliente(id)) {
        alert("Cliente duplicado, já foi adicionado");
        return;
    }
    vTodosClientes.forEach(function (c) {
        if (id == c.id) {
            vClientePedido.push(c);
            var caixa = document.getElementById("clientes");
            var op = document.createElement("option");
            op.text = c.nome;
            op.value = c.id;
            caixa.add(op);
        }
    });
}

function mostrarCliente(pedido) {
    var lista = "";
    pedido.clientes.forEach(function (c) {
        lista += c.nome + ", ";
    });
    return lista;
}

function mostrarClientesPedido() {
    var caixa = document.getElementById("clientes");
    caixa.innerHTML = "";
    vClientePedido.forEach(function (c) {
        var op = document.createElement("option");
        op.text = c.nome;
        op.value = c.id;
        caixa.add(op);
    });
}

function remove_cliente() {
    let ind = clientes.selectedIndex;
    clientes.options[ind].remove();

    vClientePedido.splice(ind, 1);
}

function verificaCliente(id) {
    var log = 0;
    vClientePedido.forEach(function (a) {
        if (id == a.id) {
            log = 1;
        }
    });
    if (log == 1) {
        return true;
    } else {
        return false
    }
}


mostrarTodosProdutos();
mostrarTodosClientes();
montarTbl();
produtos.addEventListener('dblclick', remove_produto)
clientes.addEventListener('dblclick', remove_cliente)
enviar.addEventListener('click', Data);
limpar.addEventListener('click', limparCampos);
btnPedido.addEventListener('click', adicionaProduto);
btnCliente.addEventListener('click', adicionaCliente);