var frutas = ['maça','banana','uva','melancia','mamão','laranja','manga'];

var tam = frutas.length;
console.log("tamanho do vetor: " + tam);
console.log("vetor: " + frutas);

for(let i = 0;i < tam; i++){
    console.log(i + " - " + frutas[i]);
}

console.log("    ");
b = 2;
a = 1;
c = b++;
d = ++a;
console.log("c = " + c);//2
console.log("d = " + d);//2

function parametros(){
    let val1 = parseInt(document.getElementById("valor1")).value;
    let val2 = parseInt(document.getElementById("valor2")).value;
    let valor1 = val1;
    let valor2 = val2;
    let resultado = valor1 + valor2;
    
    return resultado
    //n deu certo k
}
parametros();

function soma(a,b){
    s = soma(a,b);
}

console.log = ("   ");
//mostrar uma mensagem de alerta dizendo "olá mundo"

function mensagem(){
    alert("olá mundo");
}
mensagem();

function diferença(x,y){
    let z = x - y;
    alert("mostrando a diferença dos valores... = " + z);
}

diferença(10,4);