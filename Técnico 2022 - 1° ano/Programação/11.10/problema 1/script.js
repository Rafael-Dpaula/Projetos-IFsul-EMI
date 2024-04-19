var listaNomes = [];

function inserir(){
    let nome = document.getElementById("nome").value;
    listaNomes.push(nome);
    console.log(listaNomes)
    limparCampos();
    mostrar();
}

function mostrar(){
    listaNomes.sort(); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = listaNomes;    
    console.log(listaNomes)
}

function zerar(){
    listaNomes = [];
    mostrar();
}

function limparCampos(){
    document.getElementById("nome").value = "";
}