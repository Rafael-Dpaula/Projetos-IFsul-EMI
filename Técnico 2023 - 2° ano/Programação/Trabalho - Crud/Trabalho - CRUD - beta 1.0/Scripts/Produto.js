var enviar = document.getElementById("enviar");
var limpar = document.getElementById("limpar");

var produtos = [];
var linha = "";


function form() {
    var nome = document.getElementById("nome").value;
    var marca = document.getElementById("marca").value;
    var preco = document.getElementById("preco").value;
    var precoN = parseFloat(preco.replace('R$', ' '));
    var desconto = document.getElementById("desconto").value;
    var descontoN = parseFloat(desconto.replace('%', ' '));

    let produto = new Produto(gerarId(), nome, marca, preco, desconto, precoN, descontoN);

    if (linha != "") {
        salvarAlterar(produto);
        location.reload();
    } else {
        produtos.push(produto);
        criarTbl(produto);
    }

    Navegador();
    limparCampos();
}

function gerarId(produtos) {
    var id = 0;
    produtos.forEach(function (p) {
        if (p.id > id) {
            id = p.id;
        }
    });
    return id + 1;
}

function criarTbl(produto) {
    var tbl = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr");

    var nome = document.createElement('td');
    var marca = document.createElement('td');
    var preco = document.createElement('td');
    var desconto = document.createElement('td');
    var campoAlterar = document.createElement('td');
    var campoExcluir = document.createElement('td');

    nome.setAttribute('id', 'list');
    marca.setAttribute('id', 'list');
    preco.setAttribute('id', 'list');
    desconto.setAttribute('id', 'list');
    campoAlterar.setAttribute('id', 'list');
    campoExcluir.setAttribute('id', 'list');

    nome.innerHTML = produto.nome;
    marca.innerHTML = produto.marca;
    preco.innerHTML = produto.preco;
    desconto.innerHTML = produto.desconto;

    var btnAlterar = document.createElement('input');
    var btnExcluir = document.createElement('input');
    btnAlterar.setAttribute("value", "alterar");
    btnAlterar.setAttribute("type", "button");
    btnExcluir.setAttribute("value", "excluir");
    btnExcluir.setAttribute("type", "button");

    btnAlterar.addEventListener("click", Alterar);
    btnExcluir.addEventListener("click", Excluir);

    campoAlterar.appendChild(btnAlterar);
    campoExcluir.appendChild(btnExcluir);

    linha.appendChild(nome);
    linha.appendChild(marca);
    linha.appendChild(preco);
    linha.appendChild(desconto);
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);

    tbl.appendChild(linha);

}

function Navegador() {
    var dados = JSON.stringify(produtos);
    localStorage.setItem('produtos', dados);
}

function limparCampos() {
    document.getElementById("form").reset();
}


function salvarAlterar(produto) {
    linha.cells[0].innerHTML = produto.nome;
    var ind = linha.rowIndex - 1;
    produtos[ind] = produto;
    linha = "";
}

function Alterar() {
    linha = this.parentElement.parentElement;
    var ind = linha.rowIndex - 1;
    var produto = produtos[ind];

    document.getElementById('nome').value = produto.nome;
    document.getElementById('marca').value = produto.marca;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('desconto').value = produto.desconto;
}

function Excluir() {
    if (confirm("Confirma a exclusão do produto")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        produtos.splice(ind - 1, 1);
        document.getElementById('lista').deleteRow(ind);
        Navegador();
    }
}

function mostrartbl() {
    if (localStorage.hasOwnProperty("produtos")) {
        produtos = JSON.parse(localStorage.getItem("produtos"));
        produtos.forEach(produto => {
            criarTbl(produto);

        });
    }
}

mostrartbl();
enviar.addEventListener("click", form);
limpar.addEventListener("click", limparCampos);