var temps = [];
var umis = [];

function process(){
    let temp1 = document.getElementById("temp1").value;
    let temp2 = document.getElementById("temp2").value;
    let temp3 = document.getElementById("temp3").value;
    let temp4 = document.getElementById("temp4").value;
    let temp5 = document.getElementById("temp5").value;
    let temp6 = document.getElementById("temp6").value;
    let temp7 = document.getElementById("temp7").value;
    let temp8 = document.getElementById("temp8").value;
    let temp9 = document.getElementById("temp9").value;
    let temp10 = document.getElementById("temp10").value;
    let temp11 = document.getElementById("temp11").value;
    let temp12 = document.getElementById("temp12").value;
    let temp13 = document.getElementById("temp13").value;
    let temp14 = document.getElementById("temp14").value;
    let temp15 = document.getElementById("temp15").value;
    let temp16 = document.getElementById("temp16").value;
    let temp17= document.getElementById("temp17").value;
    let temp18 = document.getElementById("temp18").value;
    let temp19 = document.getElementById("temp19").value;
    let temp20 = document.getElementById("temp20").value;
    let temp21 = document.getElementById("temp21").value;
    let temp22 = document.getElementById("temp22").value;
    let temp23 = document.getElementById("temp23").value;
    let temp24 = document.getElementById("temp24").value;

    let umi1 = document.getElementById("umir1").value;
    let umi2 = document.getElementById("umir2").value;
    let umi3 = document.getElementById("umir3").value;
    let umi4 = document.getElementById("umir4").value;
    let umi5 = document.getElementById("umir5").value;
    let umi6 = document.getElementById("umir6").value;
    let umi7 = document.getElementById("umir7").value;
    let umi8 = document.getElementById("umir8").value;
    let umi9 = document.getElementById("umir9").value;
    let umi10 = document.getElementById("umir10").value;
    let umi11 = document.getElementById("umir11").value;
    let umi12 = document.getElementById("umir12").value;
    let umi13 = document.getElementById("umir13").value;
    let umi14 = document.getElementById("umir14").value;
    let umi15 = document.getElementById("umir15").value;
    let umi16 = document.getElementById("umir16").value;
    let umi17 = document.getElementById("umir17").value;
    let umi18 = document.getElementById("umir18").value;
    let umi19 = document.getElementById("umir19").value;
    let umi20 = document.getElementById("umir20").value;
    let umi21 = document.getElementById("umir21").value;
    let umi22 = document.getElementById("umir22").value;
    let umi23 = document.getElementById("umir23").value;
    let umi24 = document.getElementById("umir24").value;

    let somaT = 0;
    let somaU = 0;
    let mediaT = 0;
    let mediaU = 0;

    temps.push(parseFloat(temp1));
    temps.push(parseFloat(temp2));
    temps.push(parseFloat(temp3));
    temps.push(parseFloat(temp4));
    temps.push(parseFloat(temp5));
    temps.push(parseFloat(temp6));
    temps.push(parseFloat(temp7));
    temps.push(parseFloat(temp8));
    temps.push(parseFloat(temp9));
    temps.push(parseFloat(temp10));
    temps.push(parseFloat(temp11));
    temps.push(parseFloat(temp12));
    temps.push(parseFloat(temp13));
    temps.push(parseFloat(temp14));
    temps.push(parseFloat(temp15));
    temps.push(parseFloat(temp16));
    temps.push(parseFloat(temp17));
    temps.push(parseFloat(temp18));
    temps.push(parseFloat(temp19));
    temps.push(parseFloat(temp20));
    temps.push(parseFloat(temp21));
    temps.push(parseFloat(temp22));
    temps.push(parseFloat(temp23));
    temps.push(parseFloat(temp24));

    umis.push(parseFloat(umi1));
    umis.push(parseFloat(umi2));
    umis.push(parseFloat(umi3));
    umis.push(parseFloat(umi4));
    umis.push(parseFloat(umi5));
    umis.push(parseFloat(umi6));
    umis.push(parseFloat(umi7));
    umis.push(parseFloat(umi8));
    umis.push(parseFloat(umi9));
    umis.push(parseFloat(umi10));
    umis.push(parseFloat(umi11));
    umis.push(parseFloat(umi12));
    umis.push(parseFloat(umi13));
    umis.push(parseFloat(umi14));
    umis.push(parseFloat(umi15));
    umis.push(parseFloat(umi16));
    umis.push(parseFloat(umi17));
    umis.push(parseFloat(umi18));
    umis.push(parseFloat(umi19));
    umis.push(parseFloat(umi20));
    umis.push(parseFloat(umi21));
    umis.push(parseFloat(umi22));
    umis.push(parseFloat(umi23));
    umis.push(parseFloat(umi24));


    //soma temp:
    for (i in temps){
        somaT = somaT + temps[i];
    }
    mediaT = mediaT + somaT / temps.length;

    //soma umid:
    for(i in umis){
        somaU = somaU + umis[i];
    }
    mediaU = mediaU + somaU / umis.length;


    //max e min:
    let maxT = Math.max(...temps);
    let minT = Math.min(...temps);

    let maxU = Math.max(...umis);
    let minU = Math.min(...umis);

    //prints:
    let listatemp = document.getElementById("restmp");
    listatemp.innerHTML = temps;

    let listaumi = document.getElementById("resumi");
    listaumi.innerHTML = umis;

    let mediaumis = document.getElementById("resmumi");
    mediaumis.innerHTML = mediaU;

    let mediatemps = document.getElementById("resmtmp");
    mediatemps.innerHTML = mediaT;

    let maxt = document.getElementById("maxt");
    maxt.innerHTML = maxT;
    let mint = document.getElementById("mint");
    mint.innerHTML = minT;

    let maxu = document.getElementById("maxu");
    maxu.innerHTML = maxU;
    let minu = document.getElementById("minu");
    minu.innerHTML = minU;
}   