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
console.log("cliente: " + document.getElementById("cliente").value);
function submeterForm() {
    var cliente = document.getElementById("cliente").value;
    var desc = document.getElementById("desc").value;
    var valorTotal = document.getElementById("valorTotal").value;
    var horaPedido = document.getElementById("horaPedido").value;
    var dtPedido = document.getElementById("dtPedido").value;

    if (desc.length == 0 || valorTotal.length == 0 || dtPedido.length == 0 || horaPedido.length == 0 || cliente == null) {
        alert("todos os campos devem ser informados");
        return;
    }
    var pedido = new Pedido(id, desc, valorTotal, horaPedido, dtPedido, cliente, getProdutos());

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
    linha.cells[2].innerHTML = pedido.valorTotal;
    linha.cells[3].innerHTML = pedido.horaPedido;
    linha.cells[4].innerHTML = pedido.dtPedido;
    linha.cells[5].innerHTML = mostrarProdutos(pedido);
    linha = "";
    id = "";
}

function adicionaLinha(pedido) {
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr");
    linha.id = pedido.id;
    var campoCliente = document.createElement("td");
    var campoDesc = document.createElement("td");
    var campoValor = document.createElement("td");
    var campoData = document.createElement("td");
    var campoHora = document.createElement("td");
    var campoProdutos = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");

    campoCliente.innerHTML = pedido.cliente;
    campoDesc.innerHTML = pedido.desc;
    campoValor.innerHTML = pedido.valorTotal;
    campoHora.innerHTML = pedido.horaPedido;
    campoData.innerHTML = pedido.dtPedido;
    campoProdutos.innerHTML = mostrarProdutos(pedido);

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

    linha.appendChild(campoCliente);
    linha.appendChild(campoDesc);
    linha.appendChild(campoValor);
    linha.appendChild(campoHora);
    linha.appendChild(campoData);
    linha.appendChild(campoProdutos);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);

    tabela.appendChild(linha);
}

function alterar() {
    linha = this.parentElement.parentElement;
    id = linha.id;
    pedidoDAO.getById(id).then((pedido) => {
        document.getElementById("cliente").value = pedido.cliente;
        document.getElementById("desc").value = pedido.desc;
        document.getElementById("valorTotal").value = pedido.valorTotal;
        document.getElementById("horaPedido").value = pedido.horaPedido;
        document.getElementById("dtPedido").value = pedido.dtPedido;
        //vProdutosPedido = pedido.produtos;
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
        pedido.forEach(p => {
            adicionaLinha(p);
        });
    });
}

function mostrarTodosProdutos() {
    var caixa = document.getElementById("listaProdutos");
    caixa.innerHTML = "<option></option>";
    produtoDAO.getAll("").then((produto) => {
        produto.forEach(function (p) {
            var op = document.createElement("option");
            op.text = p.nome;
            op.value = p.id;
            caixa.add(op);
            vProdutos[p.id] = p.nome;
        });
    });
}

function adicionaProduto() {
    var id = document.getElementById("listaProdutos").value;
    if (verificaProduto(id)) {
        alert("Produto já foi incluído");
        return;
    }
    produtoDAO.getAll('').then((produto) => {
        produto.forEach(p => {
            if (id == p.id) {
                vProdutosPedido.push(p);
                var caixa = document.getElementById("produtos");
                var op = document.createElement("option");
                op.text = p.nome;
                op.value = p.id;
                caixa.add(op);
                console.log(vProdutosPedido)
            }
        });
    });
}

function mostrarProdutos(pedido) {
    var lista = "";
    pedido.produtos.forEach(function (p) {
        lista += vProdutos[p] + ", ";
    });
    return lista;
}

function mostrarProdutosPedido(pedido) {
    var caixa = document.getElementById("produtos");
    caixa.innerHTML = "";
    pedido.produtos.forEach(function (p) {
        var op = document.createElement("option");
        var pr = new Produto(p, vProdutos[p]);
        vProdutosPedido.push(pr);
        op.text = vProdutos[p];
        op.value = p;
        caixa.add(op);
    });
}

function retiraProduto() {
    var ind = selectProdutos.selectedIndex;
    vProdutosPedido.splice(ind, 1);
    selectProdutos.options[ind].remove();
    console.log(vProdutosPedido)
}

function verificaProduto(id) {
    var log = 0;
    vProdutosPedido.forEach(function (p) {
        if (id == p.id)
            log = 1;
    });
    if (log == 1)
        return true;
    else
        return false;
}

function getProdutos() {
    var v = [];
    vProdutosPedido.forEach(function (p) {
        v.push(p.id);
    });
    return v;
}


function mostrarListaCliente() {
    var caixa = document.getElementById("cliente");
    caixa.innerHTML = "<option></option>";
    clienteDAO.getAll("").then((cliente) => {
        cliente.forEach(function (p) {
            var op = document.createElement("option");
            op.text = p.nome;
            op.value = p.nome;
            op.id = p.id;
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
