
function calculoAreas() {
    var qtd = parseInt(document.getElementById("qtd").value);
    var h = parseFloat(document.getElementById("h").value);
    var a = parseFloat(document.getElementById("a").value);
    var areaB, areaL, areaT, v;

    if (qtd != 5 && qtd != 6 && qtd != 3) {
        alert("Quantidade de arestas diferente de 6, 5 ou 3");
    }
    else {
        if (qtd == 3) {//prisma triangular regular
            areaB = ((a * a) * (Math.sqrt(3))) / 4; // area da base
            
            areaL = (a * h) * 3; // area lateral

            areaT = areaL + (2 * areaB); // area total

            v = areaB * h; //volume

            console.log("area base = " + areaB);
            console.log("area lateral = " + areaL);
            console.log("area total = " + areaT);
            console.log("volume = " + v);

        }
        else if (qtd == 6) { //prisma hexagonal regular
            areaB = (3 * (a * a) * Math.sqrt(3)) / 2; //area da base

            areaL = (a * h) * 6; //area lateral

            areaT = areaL + (2 * areaB); //area total

            v = areaB * h; //volume

            console.log("area base = " + areaB);
            console.log("area lateral = " + areaL);
            console.log("area total = " + areaT);
            console.log("volume = " + v);
        }

        else if (qtd == 5) { /// prisma pentagonal regular
            let sp = (a * 5) / 2; // semi perimetro do pentagono
            let ap = (a / 2) / Math.tan(36 * (Math.PI / 180));//apotema do pentagono

            areaB = ap * sp; //area da base

            areaL = (a * h) * 5; //area lateral

            areaT = (2 * areaB) + areaL; //area total
            
            v = areaB * h; //volume 
            console.log("area base = " + areaB);
            console.log("area lateral = " + areaL);
            console.log("area total = " + areaT);
            console.log("volume = " + v);
        }

        if (h > 0 && a > 0) {
            //nome do prisma
            if (qtd == 3) {
                document.getElementById("prismatriname").style.display = 'block';
                document.getElementById("prismapenname").style.display = 'none';
                document.getElementById("prismahexname").style.display = 'none';
                document.getElementById("img").style.display = 'block';
            } else if (qtd == 5) {
                document.getElementById("prismatriname").style.display = 'none';
                document.getElementById("prismapenname").style.display = 'block';
                document.getElementById("prismahexname").style.display = 'none';;
                document.getElementById("img").style.display = 'block';
            } else if (qtd == 6) {
                document.getElementById("prismatriname").style.display = 'none';
                document.getElementById("prismapenname").style.display = 'none';
                document.getElementById("prismahexname").style.display = 'block';
                document.getElementById("img").style.display = 'block';
            }
            let mostarAB = document.getElementById("mostraAB");
            let mostarAL = document.getElementById("mostraAL");
            let mostarAT = document.getElementById("mostraAT");
            let mostrarV = document.getElementById("mostraV");
            mostarAB.innerHTML = areaB.toFixed(3);
            mostarAL.innerHTML = areaL.toFixed(3);
            mostarAT.innerHTML = areaT.toFixed(3);
            mostrarV.innerHTML = v.toFixed(3);
            aparecerDados();
            if (qtd == 3) {
                ptri();
            } else if (qtd == 5) {
                ppen();
            } else if (qtd == 6) {
                phex()
            }
        } else {
            alert('valores devem ser maiores que 0');
        }

    }
}


function ptri() {
    let img = document.getElementById('img').src = '../images/prisma_tri3.png';
    let div = document.getElementById('imagem');
    div.appendChild(img);
}

function phex() {
    let img = document.getElementById('img').src = '../images/prisma_hex3.png';
    let div = document.getElementById('imagem');
    div.appendChild(img);
}

function ppen() {
    let img = document.getElementById('img').src = '../images/prisma_pen3.png';
    let div = document.getElementById('imagem');
    div.appendChild(img);
}

function aparecerDados() {
    let AB = document.getElementById("AB");
    let AL = document.getElementById("AL");
    let AT = document.getElementById("AT");
    let V = document.getElementById("V");
    AB.style.display = 'block';
    AL.style.display = 'block';
    AT.style.display = 'block';
    V.style.display = 'block';

    document.getElementById("rodape").style.position = "relative";
}

let botao = document.getElementById("botao");
botao.addEventListener("click", calculoAreas);