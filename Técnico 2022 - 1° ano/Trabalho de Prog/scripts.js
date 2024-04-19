var arraypp = [];
var arraypi = [];
var arraycp = [];
var arrayci = [];
var arraypg = [];
var arraycg = [];
var plantas = [];

function calcular(){
    let peso = parseFloat(document.getElementById("peso").value);
    let compri = parseFloat(document.getElementById("width").value);

    if(peso%2==0 && peso>0){
        arraypp.push(peso);
        arraypg.push(peso);
        console.log(arraypp.sort + " " + "array peso par");
    }
    else if(peso%2!=0 && peso>0){
        arraypi.push(peso);
        arraypg.push(peso);
        console.log(arraypi.sort + " " + "array peso impar");
    }

    if(compri%2==0 && compri>0){
        arraycp.push(compri);
        arraycg.push(compri);
        console.log(arraycp.sort + " " + "array compri par");
    }
    else if(compri%2!=0 && compri>0){
        arrayci.push(compri);
        arraycg.push(compri);
        console.log(arrayci.sort + " " + "array compri impar");
    }
    let maiorp;
    let menorp;
    let maiorc;
    let menorc;
    //maior e menor//
    if(peso>0 && compri>0){
        maiorp = Math.max(...arraypg);
        menorp = Math.min(...arraypg);
        maiorc = Math.max(...arraycg);
        menorc = Math.min(...arraycg);
    }
    else{
        maiorp = 0;
        menorp = 0;
        maiorc = 0;
        menorc = 0;
    }
    //resultados//
    let planta = document.getElementById("name").value;
    plantas.push(planta);
    let escplanta = document.getElementById("escplanta");
    escplanta.innerHTML = "Plantas análisadas:"
    let nomeplantas = document.getElementById("nomeplanta");
    nomeplantas.innerHTML = plantas;

    let resultescp1 = document.getElementById('escppar');
    resultescp1.innerHTML = 'Dados de peso pares coletados:'
    let resultp1 = document.getElementById('ppar');
    resultp1.innerHTML = arraypp.sort();
    let resultescp2 = document.getElementById('escpimp');
    resultescp2.innerHTML = 'Dados de peso ímpares coletados';
    let resultp2 = document.getElementById('pimpar');
    resultp2.innerHTML = arraypi.sort();

    let resultescc1 = document.getElementById('esccpar');
    resultescc1.innerHTML = "Dados pares de comprimento coletados:";
    let resultc1 = document.getElementById("cpar");
    resultc1.innerHTML = arraycp.sort();
    let resultescc2 = document.getElementById("esccimp");
    resultescc2.innerHTML = "Dados ímpares de comprimento coletados:";
    let resultc2 = document.getElementById("cimpar");
    resultc2.innerHTML = arrayci.sort();

    let escmaiorp = document.getElementById("escpmaior");
    escmaiorp.innerHTML = "O maior peso coletado:"
    let pmaior = document.getElementById("pmaior");
    pmaior.innerHTML = maiorp + "g";
    let escmenorp = document.getElementById("escpmenor");
    escmenorp.innerHTML = "O menor peso coletado:";
    let pmenor = document.getElementById("pmenor");
    pmenor.innerHTML = menorp + "g";

    let escmaoiorc = document.getElementById("esccmaior");
    escmaoiorc.innerHTML = "O maior comprimento coletado:";
    let cmaior = document.getElementById("cmaior");
    cmaior.innerHTML = maiorc + "cm";
    let escmenorc = document.getElementById("esccmenor");
    escmenorc.innerHTML = "O menor comprimento coletado:";
    let cmenor = document.getElementById("cmenor");
    cmenor.innerHTML = menorc + "cm";

    limpar();
}

function limpar(){
    document.getElementById("peso").value = " ";
    document.getElementById("width").value = " ";
    document.getElementById("name").value = " ";
}