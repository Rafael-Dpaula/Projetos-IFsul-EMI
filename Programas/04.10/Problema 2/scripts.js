var listaLivros = [];

function Inserir(){
    let Nome = document.getElementById("nome").value;
    listaLivros.push(Nome);
    Lista();
}

function Lista(){
    let result = document.getElementById("resultado");
    result.innerHTML = listaLivros;
    console.log(listaLivros);
}

function Remover(){
    let result = document.getElementById("resultado");
    listaLivros.pop();
    result.innerHTML = listaLivros;
    console.log(listaLivros);
}

function Tamanho(){
    console.log(listaLivros.length);
}