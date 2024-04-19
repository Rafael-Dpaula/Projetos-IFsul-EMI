var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");
var alergiaDAO = new AlergiaDAO(db);
var linha = "";
var id = ""; 

function submeterForm(){ //chamado quando clica no botão gravar
    var nome = document.getElementById("nome").value;
    /// validar form - falta fazer
    // criar objeto alergia
    var alergia = new Alergia(id, nome);
    
    if (linha != ""){ // alteração
        alergiaDAO.update(id, alergia.toString()).then(()=>{
            gravarAlteracao(alergia);
        });
     }else{
        alergiaDAO.add(alergia.toString()).then((id) => {
            alergia.id = id;
            adicionaLinha(alergia);
        });
    }
    limparCampos();
}

function limparCampos(){
    id = "";
    document.getElementById("form").reset(); // limpar form
}

function adicionaLinha(alergia){
    var tabela = document.getElementById("lista").
    getElementsByTagName("tbody")[0];
    var linha = document.createElement("tr"); //cria a linha
    linha.id = alergia.id; 
    //criar colunas
    var campoNome = document.createElement("td");
    var campoAlterar = document.createElement("td");
    var campoExcluir = document.createElement("td");
    //atribuir dados
    campoNome.innerHTML = alergia.nome;
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
    linha.appendChild(campoAlterar);
    linha.appendChild(campoExcluir);
    //adiciona linha na tabela
    tabela.appendChild(linha);
}

function gravarAlteracao(alergia){ 
    linha.cells[0].innerHTML = alergia.nome;
    linha = "";
    id = ""; // deixa linha em branco pois terminou a alteração
}

function alterar(){
    linha = this.parentElement.parentElement;
    document.getElementById('nome').value = linha.cells[0].innerHTML;
    id = linha.id;
}

function excluir(){
    if (confirm("Confirma a exclusão da alergia?")){
        var lin = this.parentElement.parentElement;
        var ind = lin.rowIndex;
        id = lin.id;
        document.getElementById("lista").deleteRow(ind);
        alergiaDAO.remove(id);
    }
}

function mostrarTabela(){
    alergiaDAO.getAll().then((alergias) => {
        alergias.forEach(al => {
            adicionaLinha(al);
        });
    });
}
mostrarTabela();
botao.addEventListener("click", submeterForm);
limpar.addEventListener("click", limparCampos);

