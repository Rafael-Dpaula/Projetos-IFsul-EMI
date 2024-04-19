/*pegar a referência da caixa de texto e dos botões 
função incluir
    -testar se tem valor digitado
    - limpar caixa de texto 
    -se não mostar mensagem    
    
    
função mostrar 
    laço forEach par o vetor
        -montar item da lista


função limpar
    excluir dados do vetor
    excluir dados da lista

vincular as funçoes com os botões
*/

var texto = document.getElementById("tarefa");
var adicionar = document.getElementById("adicionar");
var mostrar = document.getElementById("mostrar");
var limpar = document.getElementById("limpar");
var tarefas = [];


function incluirTarefas(){
    var t = texto.value;
    if (t.length > 0){ //se tem algum conteudo
        tarefas.push(t);
        texto.value = "";
    }else{
        alert("Informe um'a tarefa!");
    }
console.log(tarefas.join());
}

function mostarTarefas(){
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    tarefas.forEach(function(t,i){
        montarItem(t, i);
    });
}

function montarItem(t, i){ //t=tarefa  i= índice do vetor 
    var lista = document.getElementById("lista");
    var li = document.createElement("li");
    //adicionar texto no li
    li.appendChild(document.createTextNode(t));
    //criando um atributo id com o índice
    li.setAttribute("id", i);
    var botao = document.createElement("button");
    botao.appendChild(document.createTextNode("X"));
    botao.addEventListener("click", excluir);
    li.appendChild(botao);
    //adicionar li na lista
    lista.appendChild(li);

}

function excluir(){
    //alert("clicou no excluir");
    //this referente ao objeto, neste caso o botão q foi clicado
    console.log(this);
    //pegar o pai do elemento this
    item = this.parentNode;
    console.log(item);
    //pegar o pai do item e excluir o item 
    item.parentNode.removeChild(item);
    tarefas.splice(id, 1); //splice remove itens do vetor 
    mostrarTarefas();
}

function limparTarefas(){
    //limpar vetor tarefas
    tarefas = [];
    //excluir itens da lista no html
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

}

adicionar.addEventListener("click", incluirTarefas);
mostrar.addEventListener("click", mostarTarefas);
limpar.addEventListener ("click", limparTarefas);