var temps = []

function enviar(){
    let temper = document.getElementById("temp");
    temps.push(parseFloat(temper.value));
    console.log(temps);
    let result = document.getElementById("result");
    result.innerHTML = temps;
    limpar();
}

function max(){
    let result = document.getElementById("maxim");
    let max = Math.max(...temps);
    console.log(max);
    result.innerHTML = max;
}

function min(){
    let result = document.getElementById("minim");
    let min = Math.min(...temps);
    console.log(min);
    result.innerHTML = min;
}
function media(){
    let result = document.getElementById("media");
    let soma = 0;
    let média = 0;
    for (i in temps){
        soma = soma + temps[i];
    }
    média = soma/temps.length;
    console.log(média);
    result.innerHTML = média;
}
function limpar(){
    document.getElementById("temp").value = "";
}