var lista1 = document.getElementById("lista1");
var lista2 = document.getElementById("lista2");
var opcoes = [];

function carregaDados(){
    opcoes.push("força");
    opcoes.push("fogo");
    opcoes.push("voar");
    opcoes.push("congelar");
    opcoes.push("telepatia");
    lista1.innerHTML = "";
    ///TAREFA
    /*
        carregar os dados do vetor "opcoes" para a caixa de seleção
        lista1
    */
    for(var i = 0; i < opcoes.length; i++) { //adiciona cada elemento do vetor em um option no select
        var item = document.createElement("option"); //cria um option na lista1
        item.text = opcoes[i]; //adiciona o elemento de cada indice em um option
        lista1.appendChild(item);
    }
    lista1.addEventListener("change", selecionados);
    selecionados();
}
function selecionados(){ //adiciona os poderes que foram selecionados na lista 2
    var selecionado = lista1.selectedOptions; //retorna qual item da lista1 foi selecionado
    for (var i = 0; i < selecionado.length;i++) {
        let item = document.createElement("option");//cria um option na lista 2
        item.text = selecionado[i].text; //adiciona o elemento de cada indice do "selecionado" no option 
        lista2.appendChild(item);
    }
}
carregaDados();