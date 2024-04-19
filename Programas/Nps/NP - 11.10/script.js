var temps = [];
var Umis = [];

function Ler(){
    let temperat = document.getElementById("Temp").value;
    let result = document.getElementById("resultTemp");
    let umidad = document.getElementById("umiRela").value;
    let result2 = document.getElementById("resultUmid");
    temps.push(temperat);
    result.innerHTML = temps;

    Umis.push(umidad);
    result2.innerHTML = Umis;

    console.log(temps);
    console.log(Umis);
    limparCampos();
}


function reset(){
    let result = document.getElementById("resultTemp");
    let result2 = document.getElementById("resultUmid");
    temps = [];
    Umis = [];
    result.innerHTML = temps;
    result2.innerHTML = Umis;
}


function Maxtemp(){
    let result = document.getElementById("tempMax");
    let tempmax = Math.max(...temps);
    result.innerHTML = tempmax;
    console.log("a maior temperatura lida é: "+tempmax);
}


function Mintemp(){
    let result = document.getElementById("tempMin");
    let tempmin = Math.min(...temps);
    result.innerHTML = tempmin;
    console.log("a menor temperatura lida é: "+tempmin);
}


function Maxumi(){
    let result = document.getElementById("umiMax");
    let umimax = Math.max(...Umis);
    result.innerHTML = umimax;
    console.log("a maior umidade lida é: "+umimax);
}


function Minumi(){
    let result = document.getElementById("umiMin");
    let umimin = Math.max(...Umis);
    result.innerHTML = umimin;
    console.log("a menor umidade lida é: "+umimin);
}


function limparCampos(){
    document.getElementById("Temp").value = "";
    document.getElementById("umiRela").value = "";
}