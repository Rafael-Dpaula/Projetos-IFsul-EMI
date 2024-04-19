var select_pericia = [];
var selec_raca = [];
var selecionadas = [];
var select_peri = document.getElementById("pericias");
var select_raca = document.getElementById("racas");
var peri_seleci = document.getElementById("peri_seleci");

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
    let ind = select_peri.value; // indice selecionado

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

removeEventListener("dblclick", selecionar_pericias);
addEventListener("dblclick", selecionar_pericias);
removeEventListener("dblclick", remove_peri);
addEventListener("click", remove_peri);