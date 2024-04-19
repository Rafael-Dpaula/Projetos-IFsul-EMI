class moto {
    constructor(nome, num_rodas, marca, cilindrada, modelo, tamanho, ligado, empina, cortagiro, RL) {
        this.nome = nome;
        this.num_rodas = num_rodas;
        this.marca = marca;
        this.cilindrada = cilindrada;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.ligado = ligado;
        this.empina = empina;
        this.cortagiro = cortagiro;
        this.RL = RL;
    }
    ligamoto() {
        this.ligado = true;
    }
    desligamoto() {
        this.ligado = false;
    }
    ativaempina() {
        if (this.liga == true) {
            this.empina = true;
        } else { return false; }
    }
    ativacortagiro() {
        if (this.liga == true) {
            this.cortagiro = true;
        } else { return false; }
    }
    ativaRL() {
        if (this.liga == true) {
            this.RL = true;
        } else { return false; }
    }
}

class carro {
    constructor(nome, numcinto, numroda, marca, potencia, modelo, giros, liga, drift, carga) {
        this.nome = nome;
        this.numcinto = numcinto;
        this.numroda = numroda;
        this.marca = marca;
        this.potencia = potencia;
        this.modelo = modelo;
        this.giros = giros;
        this.liga = liga;
        this.drift = drift;
        this.carga = carga;

    }
    ligadocarro() {
        this.liga = true;
    }
    desligacarro() {
        this.liga = false;
    }
    ativadrift() {
        if (this.liga == true) {
            this.drift = true;
        } else { return false; }
    }
    carga() {
        this.carga = true;
    }
    marcagiro(giro) {
        if (this.liga == true) {
            this.giros = this.giros + giro;
        } else { this.giros = this.giros + 0 }
    }

}


class aviao {
    constructor(nome, asas, caixapreta, modelo, marca, passageiros, liga, voa, autopilot, radar) {
        this.nome = nome;
        this.asas = asas;
        this.caixapreta = caixapreta;
        this.modelo = modelo;
        this.marca = marca;
        this.passageiros = passageiros;
        this.radar = radar;
        this.autopilot = autopilot;
        this.liga = liga;
        this.voa = voa;
    }
    ligaaviao() {
        this.liga = true;
    }
    desligaaviao() {
        this.liga = false;
    }
    ativavoar() {
        if (this.liga == true) {
            this.voa = true;
        } else { return false; }
    }
    ativaautomatico() {
        if (this.liga == true) {
            this.autopilot = true;
        } else { return false; }
    }
    ativaradar() {
        if (this.liga == true) {
            this.radar = true;
        } else { return false; }
    }

}

//objetos criados:
var moto1 = new moto("XJ6", 2, "yamaha", 400, "naked", "média", true, false, true, true);
var moto2 = new moto("R1", 2, "yamaha", 1000, "carenada", "grande", false, false, false, false);

var carro1 = new carro("civic", 5, 4, "honda", 143, "sedan", 1500, true, true, false);
var carro2 = new carro("S10", 5, 4, "chevrolet", 200, "caminhonete", 8000, false, false, false);

var aviao1 = new aviao('F22 Raptor', 2, 1, "caça de combate", "Lockheed Martin", 1, true, true, false, false);
var aviao2 = new aviao("747", 2, 1, "Transporte", "Boeing", 660, false, false, false, false);

//métodos

moto2.ligamoto();
moto2.ativacortagiro();
carro1.marcagiro(500);
aviao1.ativaradar();

console.log(moto1,"---------------------------------", moto2,"---------------------------------", carro1,"---------------------------------", carro2,"---------------------------------", aviao1,"---------------------------------", aviao2);