class Periferico{
    constructor(cor, nome, marca, tipo, ligado, led, ligarled){
        this.cor = cor;
        this.nome = nome;
        this.marca = marca;
        this.tipo = tipo;
        this.led = led;
        this.ligado = ligado;
        this.ligarled = ligarled;
    }
    liga(){
        this.liga = true;
    }
    ligaled(){
        if(this.ligado == true && this.led == true){
        this.ligarled = true;
    }else{this.ligarled = false;}
}
    desligaled(){
        if(this.ligado == true && this.led == true){
        this.ligarled = false;
    }else{this.ligarled = false;}
    }
    desliga(){
        this.ligado = false;
        this.ligarled = false;
    }
}

class Computador{
    constructor(cor, processador, placadevideo, memram, freqmemram,liga, Perifericos){
        this.cor = cor;
        this.processador = processador;
        this.placadevideo = placadevideo;
        this.memram = memram;
        this.freqmemram = freqmemram;
        this.liga = liga;
        this.perifericos = [];
    }

    addPeriferico(peri){
        this.perifericos.push(peri);
    }
    
    ligado(){
        this.liga = true;
    }
    desligado(){
        this.liga = false;
    }
}

var computador1 = new Computador("branco", "i9 13th geração", "rtx geforce 4090", "32gb", "4200 MHz", true);
var computador2 = new Computador("preto", "i3 10th geração", "HD graphics 4000", "4gb", "3200 MHz", false);

computador1.desligado();
computador2.ligado();

var peri1 = new Periferico("preto", "lightPRO", "logitech", "mouse", false, false, false);
var peri2 = new Periferico("preto", "odyssey G7", "samsung", "monitor", true, false, true);
var peri3 = new Periferico("branco", "kumara K552W", "redragon", "teclado", true, true, false);
var peri4 = new Periferico("branco", "cloud stinger", "hiperX", "fone de ouvido", false,  true, true);

peri1.liga();
peri2.ligaled();
peri2.desliga();
peri3.ligaled();
peri4.desligaled();

computador1.addPeriferico(peri1);
computador1.addPeriferico(peri3);
computador2.addPeriferico(peri2);
computador2.addPeriferico(peri4);

console.log(computador1, computador2);
