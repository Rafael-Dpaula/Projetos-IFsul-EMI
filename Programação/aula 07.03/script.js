var resultplv = document.getElementById("resultplv");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var desloc = document.getElementById("desloc");
var temps = [];
var deslocs = [];
var cont = 0;
function programa(){
  let valor = parseInt(document.getElementById("C").value);
  if(temps.length == 10){
    alert("O limite de leituras foi atingido");
    maxemin(); media(); temp30();
  }else{
    if(valor == 0 || isNaN(valor)){
            alert("fim do trajeto / fim das leituras");
            temps.push(valor);
            for(let i = 0; i < temps.length; i++){
              if(isNaN(temps[i])){
                temps.splice(i, 1);
                i--;
              }
            }
            let tempo = Math.max(...temps); deslocs.push(tempo);
            maxemin();
            media();
            temp30();
            console.log(temps.join())
            console.log(deslocs)
            reset();
    }else{
        if(valor < 0){
            alert("Valor temporal inexistente! digite novamente.");
        }else{
            temps.push(valor);
            let calc = (temps.length - 10) * (-1);
            alert("restam mais " + calc + " leituras");
            console.log(temps.join())
            desloc.innerHTML = "Leituras do deslocamento atual: "+temps;
        }
    }
  }
  function media(){
    let soma = 0;
    let media = 0;
    for(i in deslocs){
      soma = soma + deslocs[i];
    }
    media = soma/deslocs.length;
    console.log(media);
    b.innerHTML = "A média de tempo dos deslocamentos foi de: "+media;
  }
  function maxemin(){
    let maior = Math.max(...deslocs);
    let menor = Math.min(...deslocs);
    
    console.log("maior é: "+maior);
    console.log("menor é: "+menor);
    e.innerHTML = "O menor deslocamento registrado foi de: "+menor;
    d.innerHTML = "O maior deslocamento registrado foi de: "+maior;
  }
  function temp30(){
    for(i = 0; i < deslocs.length; i++){
      if(deslocs[i] <= 29){
        cont++;
        i++;
      }else{
        i++;
      }
    }
    console.log("o deslocamento foi feito em menos de 30 min: " + cont + " vezes");
    c.innerHTML = "A quantidade de vezes que o deslocamento foi menor que 30 minutos foi de: "+cont+" vezes";
  }
  function limpar(){
    document.getElementById("C").value = "";
  }
  limpar();
  resultplv.innerHTML = "Resultados:";
  a.innerHTML = "Os tempos de deslocamento registrados foram: "+deslocs.join();
}
function reset(){
    temps = [];
    alert("Dados deste deslocamento coletados!");
    console.log(temps.join());
}
