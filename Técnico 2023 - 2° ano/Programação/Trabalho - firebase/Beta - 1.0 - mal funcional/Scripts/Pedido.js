var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");
var botaoProduto = document.getElementById("adicionaProduto");
var selectProdutos = document.getElementById("produtos");

var vProdutos = [];
var vProdutosPedido = [];

var linha = "";
var id = "";

var produtoDAO = new ProdutoDAO(db);
var pedidoDAO = new PedidoDAO(db);
var clienteDAO = new ClienteDAO(db);

function submeterForm() {
    var desc = document.getElementById("desc").value;
    var cliente = document.getElementById("cliente").value;
    var valorTotal = document.getElementById("valorTotal").value;
    var dtPedido = document.getElementById("dtPedido").value;
    var hrPedido = document.getElementById("hrPedido").value;

    if (nome.length == 0) {
        erros.innerHTML = "O campo nome deve ser informado";
        return;
    }
    var pedido = new Pedido(id, desc, valorTotal, dtPedido, hrPedido, cliente, getProdutos());

    if (linha != "") {
        pedidoDAO.update(id, pedido.toString()).then(() => {
            gravarAlteracao(pedido);
        });
    } else {
        pedidoDAO.add(pedido.toString()).then((id) => {
            pedido.id = id;
            adicionaLinha(pedido);
        });
    }
    limparCampos();
}

function gravarAlteracao(pedido) {
    linha.cells[0].innerHTML = pedido.cliente;
    linha.cells[1].innerHTML = pedido.desc;
    linha.cells[2].innerHTML = pedido.hrPedido;
    linha.cells[3].innerHTML = pedido.dtPedido;
    linha.cells[4].innerHTML = pedido.valorTotal;
    linha.cells[5].innerHTML = mostrarProdutos(pedido);
    linha = "";
    id = "";
}

function adicionaLinha(pedido) {
    var tabela = document.getElementById("lista").
        getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr");
    linha.id = pedido.id;
    var campoCliente = document.createElement("td");
    var campoDesc = document.createElement("td");
    var campoValor = document.createElement("td");
    var campoHora = document.createElement("td");
    var campoData = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");

    campoDesc.innerHTML = pedido.nome;
    campoValor.innerHTML = pedido.valorTotal;
    campoHora.innerHTML = pedido.dtPedido;
    campoData.innerHTML = pedido.hrPedido;
    campoCliente.innerHTML = pedido.cliente;
    campoProdutos.innerHTML = mostrarProdutos(pedido);

    var btnAlterar = document.createElement("input");
    var btnExcluir = document.createElement("input");

    btnAlterar.setAttribute("type", "button");
    btnExcluir.setAttribute("type", "button");
    btnAlterar.setAttribute("value", "Alterar");
    btnExcluir.setAttribute("value", "Excluir");
    btnAlterar.addEventListener("click", alterar);
    btnExcluir.addEventListener("click", excluir);

    campoAlterar.appendChild(btnAlterar);
    campoExcluir.appendChild(btnExcluir);

    linha.appendChild(campoCliente);
    linha.appendChild(campoDesc);
    linha.appendChild(campoValor);
    linha.appendChild(campoData);
    linha.appendChild(campoHora);
    linha.appendChild(campoProdutos);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);

    tabela.appendChild(linha);
}

function alterar() {
    linha = this.parentElement.parentElement;
    id = linha.id;
    pedidoDAO.getById(id).then((pedido) => {
        document.getElementById("desc").value = pedido.desc;
        document.getElementById("cliente").value = pedido.cliente;
        document.getElementById("valorTotal").value = pedido.valorTotal;
        document.getElementById("dtPedido").value = pedido.dtPedido;
        document.getElementById("hrPedido").value = pedido.hrPedido;
        vProdutosPedido = pedido.produtos;
        mostrarProdutosPedido(pedido);
    });
}

function excluir() {
    if (confirm("Confirma a exclusão do pedido?")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        id = lin.id;
        document.getElementById("lista").deleteRow(ind);
        pedidoDAO.remove(id);
    }
}

function limparCampos() {
    document.getElementById("form").reset();
    vProdutosPedido = [];
    document.getElementById("produtos").innerHTML = "";
    id = "";
}

function mostrarTabela() {
    pedidoDAO.getAll().then((pedido) => {
        pedido.forEach(a => {
            adicionaLinha(a);
        });
    });
}

function mostrarTodosProdutos() {
    var caixa = document.getElementById("listaProdutos");
    caixa.innerHTML = "<option></option>";
    pedidoDAO.getAll("").then((pedido) => {
        pedido.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
            vProdutos[a.id] = a.nome;
        });
    });
}

function adicionaProduto() {
    var id = document.getElementById("listaProdutos").value;
    if (verificaAlergia(id)) {
        alert("Produto já foi incluído");
        return;
    }
    produtoDAO.getAll("").then((produto) => {
        produto.forEach(a => {
            if (id == a.id) {
                vProdutosPedido.push(a);
                var caixa = document.getElementById("Produtos");
                var op = document.createElement("option");
                op.text = a.nome;
                op.value = a.id;
                caixa.add(op);
            }
        });
    });
}

function mostrarProdutos(pedido) {
    var lista = "";
    pedido.produtos.forEach(function (a) {
        lista += vProdutos[a] + ", ";
    });
    return lista;
}

function mostrarProdutosPedido(pedido) {
    var caixa = document.getElementById("produtos");
    caixa.innerHTML = "";
    pedido.produtos.forEach(function (a) {
        var op = document.createElement("option");
        var pr = new Produto(a, vProdutos[a]);
        vProdutosPedido.push(pr);
        op.text = vProdutos[a];
        op.value = a;
        caixa.add(op);
    });
}

function retiraProduto() {
    var ind = selectProdutos.selectedIndex;
    selectProdutos.options[ind].remove();
    vProdutosPedido.splice(ind, 1);
}

function verificaAlergia(id) {
    var log = 0;
    vProdutosPedido.forEach(function (a) {
        if (id == a.id)
            log = 1;
    });
    if (log == 1)
        return true;
    else
        return false;
}

function getProdutos() {
    var v = [];
    vProdutosPedido.forEach(function (a) {
        v.push(a.id);
    });
    return v;
}


function mostrarListaCliente() {
    var caixa = document.getElementById("clientes");
    caixa.innerHTML = "<option></option>";
    clienteDAO.getAll("").then((cliente) => {
        console.log("Clientes: " + JSON.stringify(cliente));
        cliente.forEach(function (a) {
            var op = document.createElement("option");
            op.text = a.nome;
            op.value = a.id;
            caixa.add(op);
        });
    });
}

mostrarTodosProdutos();
mostrarTabela();
mostrarListaCliente();

botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);
botaoProduto.addEventListener("click", adicionaProduto);
selectProdutos.addEventListener('dblclick', retiraProduto);
