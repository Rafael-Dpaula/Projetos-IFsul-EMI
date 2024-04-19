var botao = document.getElementById("botao");
var botao_mostrar = document.getElementById ("botao_mostrar")
var limpar = document.getElementById("limpar");
var vetor = []


function LimparTabela(){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = " ";
}

function incluir(){
    var inserir =  document.getElementById("inserir").value;
    if(inserir==""){
        alert("Digite a Materia com atividades para fazer");
    }else{
        vetor.push(inserir);
        document.getElementById("inserir").value="";
    }
console.log("função")
console.log(vetor)
}

function mostrar(){
    vetor.forEach(function(materia){
        mostrarMateria(materia);
        console.log(materia);
    });
}

function mostrarMateria(materia){
    var tabela =document.getElementById("tabela");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tarefa = document.createTextNode(materia);

    td.appendChild(tarefa);
    tr.appendChild(td);
    tabela.appendChild(tr)
}

botao.addEventListener("click", incluir);
//btn_incluir.addEventListener('click', incluir);
botao_mostrar.addEventListener('click', mostrarMateria);
limpar.addEventListener("click", LimparTabela)


//var btn_incluir = document.getElementById("bnt_incluir");
//function testar(){

//    var texto = document.getElementById("valor").value;
  //  var tabela = document.getElementById("tabela");
    //var linha = document.createElement("tr");
    //var coluna = document.createElement("td");

    
   // coluna.appendChild(document.createTextNode(texto));
    ///linha.appendChild(coluna);
    //tabela.appendChild(linha);

//}

///botao.addEventListener("click", testar);
//limpar.addEventListener("click", LimparTabela)//*