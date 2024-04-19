var tempos = [];
var tempo = document.getElementById("tempo");
var botao = document.getElementById("btnIncluir");

function lerValores(){
    var t = parseInt(tempo.value);
    if(t != 0 && !isNaN(t) && tempos.length < 10){
        tempos.push(t); // adiciona o tempo no vetor 
    }
    else{
        alert("valor inválido ou atingiu os 10 valores")
    }
    console.log(tempos.join());
    mostrar()
}

function mostrar(){
    var media = 0;
    var cont = 0;
    var menor = 0;
    var maior = 0;
    tempos.forEach(function(t, ind){ // laço para o vetor
        // t -> tempo do indice
        // ind -> indice do vetor
        media = media + t;
        if(t < 30)
            cont++
        if( t > maior)
            maior = t;
        if(ind == 0)
            menor = t;
        else if(t < menor)
            menor = t;
    })//fim do foreach
    media = media / tempos.length;

    var resultado = "Média = "+ media + "<br> Maior Valor = "+ maior + "<br> Menor Valor = "+ menor +"<br> Número de deslocamentos com < 30min = "+ cont;

    document.getElementById("resultado").innerHTML = resultado;
}
//adiciona um ouvinte de evento
botao.addEventListener("click", lerValores);