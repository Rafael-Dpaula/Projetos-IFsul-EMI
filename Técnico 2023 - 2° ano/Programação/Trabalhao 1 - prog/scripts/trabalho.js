var select_pericia = [];
var selec_raca = [];
var selecionadas = [];
var select_peri = document.getElementById("pericias");
var select_raca = document.getElementById("racas");
var peri_seleci = document.getElementById("peri_seleci");
var imagem = document.getElementById("imagem");

function selects() {
    select_pericia.push("Furtividade");
    select_pericia.push("Escalar");
    select_pericia.push("Acrobacia");
    select_pericia.push("Abrir Fechaduras");
    select_pericia.push("Conhecimento");
    select_pericia.push("Intimidar");
    select_pericia.push("Percepção");
    select_pericia.push("Enganar");
    select_pericia.push("Sobrevivência");
    select_pericia.push("Alquimia");
    select_peri.innerHTML = "";

    selec_raca.push("Elfo");
    selec_raca.push("Humano");
    selec_raca.push("Minotauro");
    selec_raca.push("Goblin");
    selec_raca.push("Orc");
    selec_raca.push("Anão");
    selec_raca.push("Gnomo");
    selec_raca.push("Vampiro");
    selec_raca.push("Lobisomen");
    selec_raca.push("Draconato");

    for (let i = 0; i < select_pericia.length; i++) {
        let op = document.createElement("option");
        let valor = 0
        op.text = select_pericia[i];
        op.value = valor;
        select_peri.appendChild(op);
        valor = valor + 1;
    }
    for (let i = 0; i < selec_raca.length; i++) {
        let op = document.createElement("option");
        op.text = selec_raca[i];
        op.value = selec_raca[i];
        select_raca.appendChild(op);
    }
}
selects();

function selecionar_pericias() {
    let ind = select_peri.selectedIndex; // indice selecionado

    if (peri_seleci.options.length >= 5) {
        if (peri_seleci.options.length == 5) {
            alert("Número máximo de pericias atingido")
        }
    }

    else {
        let item = select_peri.options[ind].text;
        let op = document.createElement("option");
        op.text = item;
        op.value = item;
        peri_seleci.appendChild(op);
        let temp = select_peri.options[ind].text;
        select_peri.options[ind].remove();

        selecionadas.push(item); // adiciona a perícia ao vetor
        let index = select_pericia.indexOf(temp);
        if (index !== -1) {
            select_pericia.splice(index, 1);
        }
        console.log(selecionadas.join());
    }
}

function remove_peri() {
    let ind = peri_seleci.selectedIndex; // indice selecionado
    let item = peri_seleci.options[ind].text; // texto do item selecionado
    let op = document.createElement("option");
    op.text = item;
    op.value = item;
    select_peri.appendChild(op); // adiciona o item de volta ao select de perícias

    peri_seleci.options[ind].remove(); // remove o item da lista de perícias selecionadas
    selecionadas.splice(selecionadas.indexOf(item), 1);
    console.log(selecionadas.join());
}

function getData() {
    let nF = document.getElementById("forca").value;
    let nA = document.getElementById("destreza").value;
    let nAr = document.getElementById("armadura").value;


    let index = select_raca.selectedIndex;
    let item = select_raca.options[index].text;

    document.getElementById("raca_selecionada").innerHTML = item;

    document.getElementById("nforc").innerHTML = nF;
    document.getElementById("nagil").innerHTML = nA;
    document.getElementById("narma").innerHTML = nAr;
    //raça selecionada
    let classe_selecionada = document.querySelectorAll("input[type='radio']");
    let classe;
    for (let i = 0; i < classe_selecionada.length; i++) {
        if (classe_selecionada[i].checked) {
            classe = classe_selecionada[i].value;
        }
    }
    document.getElementById("classe_selecionada").innerHTML = classe;

    //pericias selecionadas
    let per_selec = document.getElementById("per_selec");
    per_selec.innerHTML = "";

    let ul = document.createElement("ul");
    selecionadas.forEach((per_selec, ind) => {
        let li = document.createElement("li");
        li.textContent = per_selec;
        ul.appendChild(li);
    });
    per_selec.appendChild(ul);


    //nome do heroi
    let nome = document.getElementById("nome").value;
    document.getElementById("nome_card").innerHTML = nome.toUpperCase();
    //mostrar card
    document.getElementById("card").style.display = "block";
}

function getImagem() { // função para pegar a imagem e mostrar
    if (this.files && this.files[0]) { // se tem algum arquivo selecionado
        var file = new FileReader(); // cria um objeto para ler o arquivo
        file.onload = function (arquivo) { // quando terminar de carregar o arquivo
            // mostrar a imagem no elemento img 
            document.getElementById('imagem_card').src = arquivo.target.result;
        }
        file.readAsDataURL(this.files[0]);//carregar arquivo a partir da url 
    }
}
function limparall() {
    peri_seleci.innerHTML = [];
    selecionadas = [];
    let nome = document.getElementById("nome");
    let forca = document.getElementById("forca");
    let destreza = document.getElementById("destreza");
    let armadura = document.getElementById("armadura");
    let card_display = document.getElementById("card");

    nome.value = ""; nome.innerHTML = "";
    forca.value = ""; forca.innerHTML = "";
    destreza.value = ""; destreza.innerHTML = "";
    armadura.value = ""; armadura.innerHTML = "";
    card_display.style.display = "none";
    selec_raca = [];
    select_pericia = [];
    selects();

    console.log("teste limpar");
}
function testes() {
    if (peri_seleci.options.length < 2) {//se possui o mínimo de pericias
        alert("número mínimo de pericias não atingido");
        alert("restam: " + (2 - peri_seleci.options.length) + " pericias a selecionar");
        document.getElementById("card").style.display = "none";
    }
    //se possui o limite de nivel nos atributos e se foi digitado algo
    let destreza = document.getElementById("destreza");
    let forca = document.getElementById("forca");
    let armadura = document.getElementById("armadura");

    if (destreza == !NaN || destreza.value < 1 || destreza.value > 100) {
        alert("nivel de destreza inválido"); document.getElementById("card").style.display = "none";
    } else if (forca == !NaN || forca.value < 1 || forca.value > 100) {
        alert("nivel de força inválido"); document.getElementById("card").style.display = "none";
    } else if (armadura == !NaN || armadura.value < 1 || armadura.value > 100) {
        alert("nivel de armadura inválido"); document.getElementById("card").style.display = "none";
    }

    // verificar se uma opção de rádio foi selecionada
    let opcoes = document.getElementsByName("opcoes");
    let selecionado = false;
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            selecionado = true;
            break;
        }
    }
    // verificar se o nome do herói foi digitado
    let nome = document.getElementById("nome").value;
    if (nome != 0) {
        // código a ser executado se o nome foi digitado
    } else {
        alert("Digite um nome para o herói");
        document.getElementById("card").style.display = "none";
    }

    if (selecionado) {
        return// código a ser executado se uma opção de rádio foi selecionada
    } else {
        alert("Selecione uma classe para o herói");
        document.getElementById("card").style.display = "none";
    }
}
function tema_claro() {
    let elements = document.querySelectorAll("p, label, input[type='radio'], select");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }
    let body = document.querySelector("body");
    body.setAttribute("style", "background-image: url(../texturas/textura_de_madeira_clara.jpeg)");

    let raca = document.querySelector("#racas");
    let pericia = document.querySelector("#pericias");
    let pericia_seleci = document.querySelector("#peri_seleci");
    raca.setAttribute("style", "color:black; background-color:white;");
    pericia.setAttribute("style", "color:black; background-color:white;");
    pericia_seleci.setAttribute("style", "color:black; background-color:white;");

    let inputs = document.querySelector("input[type='text']");
    inputs.setAttribute("style", "color:black; background-color:white;");

    let atribute = document.querySelectorAll("input[name='atributo']");
    for (let i = 0; i < atribute.length; i++){
    atribute[i].setAttribute("style", "color:black; background-color:white; font-family:cursive;");
}}


function tema_escuro() {
    let elements = document.querySelectorAll("p, label, input[type='radio'], select");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    let body = document.querySelector("body");
    body.setAttribute("style", "background-image: url(../texturas/textura_de_madeira_escura.jpeg)");

    let raca = document.querySelector("#racas");
    let pericia = document.querySelector("#pericias");
    let pericia_seleci = document.querySelector("#peri_seleci");
    raca.setAttribute("style", "color:white; background-color:black;");
    pericia.setAttribute("style", "color:white; background-color:black;");
    pericia_seleci.setAttribute("style", "color:white; background-color:black;");

    let inputs = document.querySelector("input[type='text']");
    inputs.setAttribute("style", "color:white; background-color:black;");

    let atribute = document.querySelectorAll("input[name='atributo']");
    for (let i = 0; i < atribute.length; i++){
    atribute[i].setAttribute("style", "color:white; background-color:black; font-family:cursive;");
}
    let esc_no_card = document.querySelectorAll("#card *");
    for (let i = 0; i < esc_no_card.length; i++) {
    esc_no_card[i].style.color = "black";
}}


let botao_tema_claro = document.getElementById("btn_claro");
let botao_tema_escuro = document.getElementById("btn_escuro");
var botao = document.getElementById("criarcard");
var botao_reset = document.getElementById("limpar_botao");

select_peri.addEventListener("dblclick", selecionar_pericias);
peri_seleci.addEventListener("click", remove_peri);
botao.addEventListener("click", getData);
botao.addEventListener("click", testes);
imagem.addEventListener("change", getImagem);
botao_reset.addEventListener("click", limparall);

botao_tema_claro.addEventListener("click", tema_claro);
botao_tema_escuro.addEventListener("click", tema_escuro);
