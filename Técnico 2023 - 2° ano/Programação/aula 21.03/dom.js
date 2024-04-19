var btnVerificar = document.querySelector('#btnverificar');
var btnincluir = document.querySelector("#btnincluir")
function verificar(){
    //pegar um objeto que tenha nome = cores e que esteja checado (selecionado)
    var cor = document.querySelector("input[name='cores']:checked");
    var res = document.querySelector("#resultado");
    res.innerHTML = "cor selecionada: "+ cor.value;

    //pegar todos os objetos input que tenham a class = disc
    var disciplinas = document.querySelectorAll("input[class='disc']");
    var disciplinas_selecionadas = "";
    for(i = 0; i < disciplinas.length; i++){
        console.log('teste')
        if(disciplinas[i].checked){//retorna true se a caixa está selecionada
            disciplinas_selecionadas += disciplinas[i].value + ",";
        }
    }
    res.innerHTML = res.innerHTML + "<br>" + "disciplinas selecionadas: "+ disciplinas_selecionadas;
    
    //pegar todos os objetos que são input com type = button
    var botoes = document.querySelectorAll("input[type='button']");
    for(i = 0; i < botoes.length; i++){
        botoes[i].setAttribute("class", "botao_"+cor.value);
    }
}
function incluir(){
    var texto = document.querySelector("#texto");
    var lista = document.querySelector("#lista");
    //criando item da lista
    var item = document.createElement("li");
    //adicionando dado para o itm da lista
    item.appendChild(document.createTextNode(texto.value));
    //adicionando o item a lista
    lista.appendChild(item);
    texto.value = "";
}

btnVerificar.addEventListener("click", verificar)
btnincluir.addEventListener("click", incluir)