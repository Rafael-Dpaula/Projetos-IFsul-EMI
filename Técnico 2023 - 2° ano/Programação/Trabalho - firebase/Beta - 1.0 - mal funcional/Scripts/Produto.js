var enviar = document.getElementById("enviar");
var limpar = document.getElementById("limpar");
var btnFiltrar = document.getElementById("btnFiltrar");
var produtoDAO = new ProdutoDAO(db);
var linha = "";
var id = "";


function form() {
    var nome = document.getElementById("nome").value;
    var marca = document.getElementById("marca").value;
    var preco = document.getElementById("preco").value;
    var desconto = document.getElementById("desconto").value;
    if (nome == "" || marca == "" || preco == "" || desconto == "") {
        alert('Por favor preencha todos os campos.');
        return;
    } else {


        var produto = new Produto(id, nome, marca, preco, desconto);

        if (linha != "") {
            produtoDAO.update(id, produto.toString()).then(() => {
                salvarAlterar(produto);
            });
        } else {
            produtoDAO.add(produto.toString()).then((id) => {
                produto.id = id;
                criarTbl(produto);
            });
        }

        limparCampos();
    }
}

function limparCampos() {
    document.getElementById("form").reset();
}

function criarTbl(produto) {
    var tbl = document.getElementById("lista").getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr");
    linha.id = produto.id;

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

function salvarAlterar(produto) {
    linha.cells[0].innerHTML = produto.nome;
    linha = "";
    id = "";
}

function Alterar() {
    linha = this.parentElement.parentElement;
    id = linha.id;

    document.getElementById('nome').value = linha.cells[0].innerHTML;
    document.getElementById('marca').value = linha.cells[1].innerHTML;
    document.getElementById('preco').value = linha.cells[2].innerHTML;
    document.getElementById('desconto').value = linha.cells[3].innerHTML;
}

function Excluir() {
    if (confirm("Confirma a exclusão da produto?")) {
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        id = lin.id;
        document.getElementById("lista").deleteRow(ind);
        produtoDAO.remove(id);
    }
}

function mostrartbl() {
    var tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; 
    var pesquisa = document.getElementById("filtro").value.toLowerCase();
    produtoDAO.getAll(pesquisa).then((produtos) => {
        produtos.forEach(pr => {
            criarTbl(pr);
        });
    });
}

mostrartbl();
enviar.addEventListener("click", form);
limpar.addEventListener("click", limparCampos);
btnFiltrar.addEventListener("click", mostrartbl);