var lista1 = document.getElementById("lista1");
var lista2 = document.getElementById("lista2");
//referência para o objeto de seleção da imagem
var imagem = document.getElementById("imagem");  

var opcoes = [];
var botao = document.getElementById("botao");

function carregaDados() {
    opcoes.push("força");
    opcoes.push("fogo");
    opcoes.push("voar");
    opcoes.push("congelar");
    opcoes.push("telepatia");
    lista1.innerHTML = ""; // limpar a lista1
    ///TAREFA
    /*
        carregar os dados do vetor "opcoes" para a caixa de seleção 
        lista1
    */
   opcoes.forEach(function(valor, ind){
       var op = document.createElement("option"); // criando opção
       op.text = valor; // atribui texto que vai aparecer
       op.value = valor; // atribui o valor 
       lista1.appendChild(op); // adicionando a opção na lista1
   });
}

function moveLista2(){ // mover da lista1 para a lista 2
    var ind = lista1.selectedIndex; // índice selecionado
    var item = lista1.options[ind].text;
    console.log(ind + "- " + item);
    var op = document.createElement("option");
    op.text = item;
    op.value = item;
    lista2.appendChild(op); 
    lista1.options[ind].remove(); // remover opção  
}

function moveLista1(){ //mover da lista 2 para a lista 1
    var ind = lista2.selectedIndex; // índice selecionado
    var item = lista2.options[ind].text;
    var op = document.createElement("option");
    op.text = item;
    op.value = item;
    lista1.appendChild(op); 
    lista2.options[ind].remove(); // remover opção  
}

function testar(){
    var selecionados = "";
    for (let i = 0; i < lista2.length; i++) {
        selecionados = selecionados + lista2.options[i].text + ", ";
    } 
    document.getElementById("resultado").innerHTML = selecionados;
    // altera o estilo de display para block - faz mostrar
    document.getElementById("card").style.display = "block";
}

function getImagem(){ // função para pegar a imagem e mostrar
    if (this.files && this.files[0]) { // se tem algum arquivo selecionado
        var file = new FileReader(); // cria um objeto para ler o arquivo
        file.onload = function(arquivo){ // quando terminar de carregar o arquivo
            // mostrar a imagem no elemento img 
            document.getElementById('imagem_card').src = arquivo.target.result;
        }
        file.readAsDataURL(this.files[0]);//carregar arquivo a partir da url 
    }
}

carregaDados();
lista1.addEventListener("dblclick", moveLista2);
lista2.addEventListener("dblclick", moveLista1);
botao.addEventListener("click", testar);
// vincular chamada da função getImagem com alteração na caixa de seleção de arquivo
imagem.addEventListener('change', getImagem);



